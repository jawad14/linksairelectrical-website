'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Stack } from '@/components/ui/layout';
import { H2, Muted, Small } from '@/components/ui/typography';

type DocKey = 'kb' | 'rules';
type Docs = Record<DocKey, { content: string; updated_at: string; updated_by: string }>;

const DOCS: { key: DocKey; title: string; help: string }[] = [
  {
    key: 'kb',
    title: 'Knowledge base',
    help: 'Prices, services, areas, terms and the quoting process. Plain text; headings start with #. The assistant only ever quotes prices written here.',
  },
  {
    key: 'rules',
    title: 'Reply rules',
    help: 'How replies are written: opening lines, what to include, what never to say, example replies. One rule per line.',
  },
];

export function AiSettingsEditor({ apiBase }: { apiBase: string }) {
  const key = useSearchParams().get('key') ?? '';
  const url = apiBase ? `${apiBase.replace(/\/$/, '')}/linksair-ai-${key}` : '';
  const [docs, setDocs] = useState<Docs | null>(null);
  const [draft, setDraft] = useState<Record<DocKey, string>>({ kb: '', rules: '' });
  const [name, setName] = useState('');
  const [status, setStatus] = useState<string>('');
  const [busy, setBusy] = useState<DocKey | null>(null);

  // reads the two documents; state is set by the callers (effect below, and after a save)
  const fetchDocs = useCallback(async (): Promise<Docs> => {
    const r = await fetch(`${url}?format=json`, { cache: 'no-store' });
    if (!r.ok) throw new Error(`${r.status}`);
    return (await r.json()) as Docs;
  }, [url]);

  useEffect(() => {
    if (!url) return;
    let active = true;
    fetchDocs()
      .then((d) => {
        if (!active) return;
        setDocs(d);
        setDraft({ kb: d.kb.content, rules: d.rules.content });
      })
      .catch(() => {
        if (active)
          setStatus('Could not load the settings. Check the link is the one you were given.');
      });
    return () => {
      active = false;
    };
  }, [url, fetchDocs]);

  const save = async (doc: DocKey) => {
    if (!url) return;
    setBusy(doc);
    setStatus('');
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, doc, content: draft[doc], updated_by: name.trim() || 'owner' }),
      });
      const d = (await r.json()) as { ok?: boolean; error?: string };
      if (!r.ok || !d.ok) throw new Error(d.error ?? `${r.status}`);
      setStatus(
        `${DOCS.find((x) => x.key === doc)?.title} saved. The next email the assistant answers will use it.`,
      );
      const fresh = await fetchDocs();
      setDocs(fresh);
    } catch (e) {
      setStatus(`Not saved: ${e instanceof Error ? e.message : 'unknown error'}`);
    } finally {
      setBusy(null);
    }
  };

  if (!key || !url) {
    return <Muted>This page needs the private link you were given (it ends with ?key=…).</Muted>;
  }
  if (!docs) {
    return <Muted>{status || 'Loading…'}</Muted>;
  }

  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Label htmlFor="editor-name">Your name (shown as who last changed it)</Label>
        <input
          id="editor-name"
          className="border-input focus-visible:ring-ring/50 h-9 w-full max-w-xs rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Zam"
        />
      </Stack>
      {DOCS.map(({ key: k, title, help }) => (
        <Stack key={k} gap="sm">
          <H2>{title}</H2>
          <Muted>{help}</Muted>
          <Textarea
            value={draft[k]}
            onChange={(e) => setDraft((d) => ({ ...d, [k]: e.target.value }))}
            spellCheck={false}
            className="min-h-[28rem] font-mono text-sm leading-relaxed"
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={() => void save(k)}
              disabled={busy !== null || draft[k] === docs[k].content}
            >
              {busy === k ? 'Saving…' : `Save ${title.toLowerCase()}`}
            </Button>
            <Small>
              Last changed {docs[k].updated_at || '—'}
              {docs[k].updated_by ? ` by ${docs[k].updated_by}` : ''}
            </Small>
          </div>
        </Stack>
      ))}
      {status ? <Small role="status">{status}</Small> : null}
    </Stack>
  );
}
