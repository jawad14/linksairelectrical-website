'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type DocKey = 'kb' | 'rules';
type Doc = { content: string; updated_at: string; updated_by: string };
type Docs = Record<DocKey, Doc>;
type Part = { id: string; title: string; text: string };

// The knowledge base is one markdown document split on "## N. Title" headings; the reply rules on their
// capital-letter headings. Each part is edited on its own, then the whole document is put back together
// in the same order and saved, so the assistant's workflow keeps reading one document per kind.
const KB_SPLIT = /^(?=## \d+\.)/m;
const RULES_SPLIT = /^(?=[A-Z][A-Z0-9 &'():/,.-]{6,}$)/m;

const KB_USED_BY_AI = ['1', '2', '3', '5'];
const KB_HINTS: Record<string, string> = {
  '1': 'Phone numbers, licences, service areas and hours the assistant may mention.',
  '2': 'What you offer and what you do not. The assistant only quotes for work listed here.',
  '3': 'The only prices the assistant will ever give. Keep this current.',
  '4': 'Reference for your team. Not read by the assistant.',
  '5': 'What the assistant asks a customer for before it can price a job.',
  '6': 'For your team. Not read by the assistant.',
  '7': 'For your team. The assistant follows the Reply rules further down.',
  '8': 'For your team. Not read by the assistant.',
  '9': 'Questions still to settle. When a price is decided, write it into the price list.',
};

function splitDoc(text: string, re: RegExp, prefix: string): { preamble: string; parts: Part[] } {
  const chunks = text.split(re);
  const preamble = chunks.length && !re.test(chunks[0]) ? chunks[0] : '';
  const body = preamble ? chunks.slice(1) : chunks;
  const parts = body
    .filter((c) => c.trim())
    .map((c, i) => ({
      id: `${prefix}-${i}`,
      title: c
        .split('\n')[0]
        .replace(/^#+\s*/, '')
        .trim(),
      text: c,
    }));
  return { preamble, parts };
}

function joinDoc(preamble: string, parts: Part[]): string {
  return (
    [preamble.replace(/\s+$/, ''), ...parts.map((p) => p.text.replace(/\s+$/, ''))]
      .filter(Boolean)
      .join('\n\n') + '\n'
  );
}

export function AiSettingsEditor({ apiBase }: { apiBase: string }) {
  const key = useSearchParams().get('key') ?? '';
  const url = apiBase && key ? `${apiBase.replace(/\/$/, '')}/linksair-ai-${key}` : '';
  const [docs, setDocs] = useState<Docs | null>(null);
  const [kb, setKb] = useState<{ preamble: string; parts: Part[] }>({ preamble: '', parts: [] });
  const [rules, setRules] = useState<{ preamble: string; parts: Part[] }>({
    preamble: '',
    parts: [],
  });
  const [name, setName] = useState('');
  const [status, setStatus] = useState<{ text: string; ok: boolean } | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const fetchDocs = useCallback(async (): Promise<Docs> => {
    const r = await fetch(`${url}?format=json`, { cache: 'no-store' });
    if (!r.ok) throw new Error(`${r.status}`);
    return (await r.json()) as Docs;
  }, [url]);

  const apply = (d: Docs) => {
    setDocs(d);
    setKb(splitDoc(d.kb.content, KB_SPLIT, 'kb'));
    setRules(splitDoc(d.rules.content, RULES_SPLIT, 'rules'));
  };

  useEffect(() => {
    if (!url) return;
    let active = true;
    fetchDocs()
      .then((d) => {
        if (active) apply(d);
      })
      .catch(() => {
        if (active)
          setStatus({
            text: 'Could not load the settings. Check the link is the one you were given.',
            ok: false,
          });
      });
    return () => {
      active = false;
    };
  }, [url, fetchDocs]);

  const saved = useMemo(
    () => ({
      kb: docs ? splitDoc(docs.kb.content, KB_SPLIT, 'kb') : null,
      rules: docs ? splitDoc(docs.rules.content, RULES_SPLIT, 'rules') : null,
    }),
    [docs],
  );

  const isDirty = (doc: DocKey, part: Part) => {
    const base = saved[doc]?.parts.find((p) => p.id === part.id);
    return !base || base.text !== part.text;
  };

  const save = async (doc: DocKey, part: Part) => {
    if (!url) return;
    setBusy(part.id);
    setStatus(null);
    const whole =
      doc === 'kb' ? joinDoc(kb.preamble, kb.parts) : joinDoc(rules.preamble, rules.parts);
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, doc, content: whole, updated_by: name.trim() || 'owner' }),
      });
      const d = (await r.json()) as { ok?: boolean; error?: string };
      if (!r.ok || !d.ok) throw new Error(d.error ?? `${r.status}`);
      setStatus({
        text: `"${part.title}" saved. The next email the assistant answers will use it.`,
        ok: true,
      });
      setDocs(await fetchDocs());
    } catch (e) {
      setStatus({
        text: `Not saved: ${e instanceof Error ? e.message : 'unknown error'}`,
        ok: false,
      });
    } finally {
      setBusy(null);
    }
  };

  const update = (doc: DocKey, id: string, text: string) => {
    const setter = doc === 'kb' ? setKb : setRules;
    setter((s) => ({ ...s, parts: s.parts.map((p) => (p.id === id ? { ...p, text } : p)) }));
  };

  if (!url) {
    return (
      <p className="ai-status bad">
        This page needs the private link you were given (it ends with ?key=…).
      </p>
    );
  }
  if (!docs) {
    return (
      <p className={`ai-status ${status && !status.ok ? 'bad' : ''}`}>
        {status?.text ?? 'Loading…'}
      </p>
    );
  }

  const groups: { doc: DocKey; title: string; intro: string; parts: Part[]; meta: Doc }[] = [
    {
      doc: 'kb',
      title: 'Knowledge base',
      intro:
        'Facts about the business. Sections marked "read by the assistant" are what it quotes from.',
      parts: kb.parts,
      meta: docs.kb,
    },
    {
      doc: 'rules',
      title: 'Reply rules',
      intro: 'How every reply is written. The assistant follows all of these.',
      parts: rules.parts,
      meta: docs.rules,
    },
  ];

  const card = (doc: DocKey, part: Part, index: number) => {
    const num = doc === 'kb' ? (part.title.match(/^(\d+)\./)?.[1] ?? '') : '';
    const usedByAi = doc === 'rules' || KB_USED_BY_AI.includes(num);
    const hint = doc === 'kb' ? KB_HINTS[num] : undefined;
    const dirty = isDirty(doc, part);
    const lines = Math.min(40, Math.max(8, part.text.split('\n').length + 1));
    return (
      <article className="ai-card" id={part.id} key={part.id}>
        <div className="ai-card-head">
          <span className={`ai-num ${usedByAi ? '' : 'muted'}`}>{num || index + 1}</span>
          <div>
            <h3>{part.title.replace(/^\d+\.\s*/, '')}</h3>
            {hint ? <p>{hint}</p> : null}
          </div>
          <span className={`ai-tag ${usedByAi ? 'on' : ''}`}>
            {usedByAi ? 'Read by the assistant' : 'For your team'}
          </span>
        </div>
        <textarea
          className="ai-ta"
          rows={lines}
          spellCheck={false}
          value={part.text}
          onChange={(e) => update(doc, part.id, e.target.value)}
        />
        <div className="ai-card-foot">
          <button
            type="button"
            className="btn btn-primary"
            disabled={busy !== null || !dirty}
            onClick={() => void save(doc, part)}
          >
            {busy === part.id ? 'Saving…' : dirty ? 'Save changes' : 'Saved'}
          </button>
          {dirty ? <span className="ai-dirty">Unsaved changes</span> : null}
        </div>
      </article>
    );
  };

  return (
    <div className="ai-layout">
      <aside className="ai-nav">
        <label className="ai-name">
          <span>Your name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Zam" />
          <small>Shown as who last changed a section</small>
        </label>
        {groups.map((g) => (
          <nav key={g.doc} aria-label={g.title}>
            <h4>{g.title}</h4>
            {g.parts.map((p) => (
              <a key={p.id} href={`#${p.id}`}>
                {p.title.replace(/^\d+\.\s*/, '')}
                {isDirty(g.doc, p) ? <i /> : null}
              </a>
            ))}
            <small>
              Last changed {g.meta.updated_at || '—'}
              {g.meta.updated_by ? ` by ${g.meta.updated_by}` : ''}
            </small>
          </nav>
        ))}
      </aside>
      <div className="ai-main">
        {status ? (
          <p className={`ai-status ${status.ok ? 'ok' : 'bad'}`} role="status">
            {status.text}
          </p>
        ) : null}
        {groups.map((g) => (
          <section className="ai-group" key={g.doc}>
            <div className="ai-group-head">
              <span className="eyebrow">{g.title}</span>
              <p>{g.intro}</p>
            </div>
            {g.parts.map((p, i) => card(g.doc, p, i))}
          </section>
        ))}
      </div>
    </div>
  );
}
