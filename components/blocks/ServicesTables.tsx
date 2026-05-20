'use client';

import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H2, H3, P, Lead } from '@/components/ui/typography';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion';

const electricalServices = [
  { service: 'Power point installation', desc: 'Add or upgrade outlets in any room' },
  { service: 'Lighting upgrades', desc: 'LED lights, downlights, outdoor lighting' },
  { service: 'Switchboard upgrades', desc: 'Safe and modern switchboard replacements' },
  { service: 'Safety switch/RCD installation', desc: 'Protect your home from electrical faults' },
  { service: 'Appliance installations', desc: 'Ovens, cooktops, dishwashers & more' },
  { service: 'Emergency repairs', desc: 'Fast response for urgent electrical issues' },
];

const acServices = [
  'Split system aircon installation',
  'Ducted air conditioning design & install',
  'Aircon cleaning and servicing',
  'Air conditioner replacement or upgrades',
  'Wi-Fi control setup and zone control',
];

const combinedServices = [
  { need: 'Installing a new air conditioner', help: 'Electrical and installation included' },
  { need: 'Renovating your kitchen', help: 'Cooktop, oven & lighting installation' },
  { need: 'Upgrading a rental property', help: 'Fans, aircon, smoke alarms & more' },
  { need: 'Full house fit-outs', help: 'One team for everything' },
];

const differentiators = [
  'Fast response times',
  'Friendly, respectful team',
  'Transparent pricing',
  'Quality parts and trusted brands',
  'Great customer reviews',
];

export function ServicesTables() {
  return (
    <>
      {/* Electrical Services Table */}
      <Section spacing="lg" className="bg-muted/40">
        <Container size="xl">
          <Stack gap="xl">
            <FadeUp>
              <Stack gap="sm">
                <H2>Our Electrical Services</H2>
                <P>
                  We handle all types of residential and commercial electrical work across Brisbane
                  and Gold Coast.
                </P>
              </Stack>
            </FadeUp>

            <StaggerGroup className="w-full" slow>
              <div className="border-border bg-card overflow-hidden rounded-xl border">
                <div className="bg-primary text-primary-foreground grid grid-cols-2 px-6 py-3 text-sm font-bold">
                  <span>Electrical Service</span>
                  <span>Description</span>
                </div>
                {electricalServices.map((item, i) => (
                  <StaggerItem key={item.service}>
                    <div
                      className={`grid grid-cols-2 px-6 py-3.5 text-sm ${i % 2 === 0 ? '' : 'bg-muted/30'}`}
                    >
                      <H3 className="text-sm font-semibold">{item.service}</H3>
                      <P variant="muted" className="text-sm">
                        {item.desc}
                      </P>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerGroup>

            <FadeUp>
              <P variant="muted">
                Whether it&apos;s a small job or a full house rewire, we&apos;ll get it done safely
                and efficiently.
              </P>
            </FadeUp>
          </Stack>
        </Container>
      </Section>

      {/* AC Services */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeUp>
              <Stack gap="lg">
                <H2>Air Conditioning Installation &amp; Servicing</H2>
                <P>
                  Looking for help with air conditioning? Our team installs and services all major
                  brands of split system and ducted air conditioning units.
                </P>
                <Stack gap="sm">
                  <Lead>Air Conditioning Services:</Lead>
                  {acServices.map((s) => (
                    <span key={s} className="text-foreground flex items-center gap-2 text-sm">
                      <span className="bg-accent size-1.5 shrink-0 rounded-full" />
                      {s}
                    </span>
                  ))}
                </Stack>
                <P variant="muted">
                  We help you choose the right size and system, install it professionally, and keep
                  it running smoothly.
                </P>
              </Stack>
            </FadeUp>

            <FadeUp delay={0.15}>
              <Stack gap="lg">
                <H2>Electrical and Air Conditioning in One</H2>
                <P>
                  Most homes need both electrical and air conditioning services at some point.
                  Instead of calling multiple trades, Links Air makes it easy — we do both.
                </P>
                <div className="border-border bg-card overflow-hidden rounded-xl border">
                  <div className="bg-secondary text-secondary-foreground grid grid-cols-2 px-5 py-3 text-sm font-bold">
                    <span>Need This Done?</span>
                    <span>We Can Help!</span>
                  </div>
                  {combinedServices.map((item, i) => (
                    <div
                      key={item.need}
                      className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 === 0 ? '' : 'bg-muted/30'}`}
                    >
                      <span className="text-foreground font-medium">{item.need}</span>
                      <span className="text-muted-foreground">{item.help}</span>
                    </div>
                  ))}
                </div>
                <P variant="muted">
                  We save you time and money by offering both electrical and air conditioning work
                  in one visit.
                </P>
              </Stack>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* What Makes Us Different */}
      <Section spacing="md" className="bg-primary text-primary-foreground">
        <Container size="xl">
          <FadeUp>
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <Stack gap="sm">
                <H2 className="text-primary-foreground">What Makes Us Different?</H2>
                <P className="text-primary-foreground/70">
                  At Links Air Electrical, we focus on doing the job right the first time — no
                  shortcuts, no mess, no stress.
                </P>
              </Stack>
              <div className="flex flex-wrap justify-center gap-3 md:justify-end">
                {differentiators.map((d) => (
                  <span
                    key={d}
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground rounded-full border px-4 py-2 text-sm font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
}
