import { Zap, Activity, Wind, Sun, Battery, Circle, ChevronRight } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const services = [
  {
    icon: Zap,
    title: 'General electrical',
    desc: 'Power points, lighting, ceiling fans, switches and safety switches — installed, repaired and certified by licensed sparkies.',
    featured: true,
  },
  {
    icon: Activity,
    title: 'Switchboard upgrades',
    desc: 'Replace old ceramic fuses with modern, RCD-protected switchboards that meet current AS/NZS standards and keep your home safe.',
  },
  {
    icon: Wind,
    title: 'Split-system air con',
    desc: 'Supply and install of major brands — Daikin, Mitsubishi, Fujitsu. ARC-licensed, with tidy pipework and balanced refrigerant charges.',
  },
  {
    icon: Sun,
    title: 'LED lighting design',
    desc: 'Energy-saving LED downlights, pendants, garden & security lighting. We plan the layout, dimming and zoning — not just swap globes.',
  },
  {
    icon: Battery,
    title: 'EV chargers',
    desc: 'Type 2 home chargers from Tesla, Ocular & Fronius. We size your supply, set load management and certify the install.',
  },
  {
    icon: Circle,
    title: 'Smoke alarms & safety',
    desc: 'Interconnected photoelectric alarms, RCD testing and tag-and-test for landlords — keep your property compliant and insurable.',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-[#F4F7FA] py-[clamp(72px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mb-14 max-w-[760px]">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            What we do
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            One team for your electrical and air conditioning needs.
          </Heading>
          <P className="text-[17px] text-[#4F6172]">
            From single power-point repairs through to full home rewires and ducted A/C, we cover
            the lot — neatly, safely, and with paperwork sorted.
          </P>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {services.map((svc) => (
            <article
              key={svc.title}
              className={`group relative flex flex-col overflow-hidden rounded-[14px] border border-[#E3E9F0] bg-white p-[32px_28px] transition-all duration-250 after:absolute after:top-0 after:left-0 after:h-[3px] after:transition-[width] after:duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_8px_24px_-8px_rgba(14,27,44,0.18),0_2px_6px_rgba(14,27,44,0.06)] ${svc.featured ? 'after:w-full after:bg-[#E73438]' : 'after:w-0 after:bg-[#2196D6] hover:after:w-full'}`}
            >
              <div
                className={`mb-6 grid h-14 w-14 place-items-center rounded-[14px] ${svc.featured ? 'bg-[#FDE7E8] text-[#E73438]' : 'bg-[#E9F4FB] text-[#1779B8]'}`}
              >
                <svc.icon className="h-7 w-7" />
              </div>
              <Heading
                level={3}
                className="font-heading mb-2.5 text-[clamp(20px,1.6vw,24px)] leading-[1.08] font-bold text-[#0E1B2C]"
              >
                {svc.title}
              </Heading>
              <P className="grow text-[14.5px] text-[#4F6172]">{svc.desc}</P>
              <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0E1B2C]">
                Learn more
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
