import { Heading, P } from '@/components/ui/typography';

const steps = [
  {
    num: '01',
    title: 'Get in touch',
    desc: 'Call, text or send us a quick photo of the job. Most enquiries get a same-day reply.',
    alt: false,
  },
  {
    num: '02',
    title: 'Free quote',
    desc: 'We\u2019ll come out, scope the work and send a fixed, itemised quote — no obligation.',
    alt: true,
  },
  {
    num: '03',
    title: 'Book in',
    desc: 'Pick a time that suits you. We confirm the day before and ring on the way.',
    alt: false,
  },
  {
    num: '04',
    title: 'Job done',
    desc: 'We complete the work, hand over compliance certificates, and walk you through it.',
    alt: true,
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#6BA432] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#82BD3F]">
            How we work
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            Four simple steps from call to completion.
          </Heading>
          <P className="text-[17px] text-[#4F6172]">
            We&apos;ve stripped out the back-and-forth so you know exactly what&apos;s happening,
            what it costs, and when we&apos;ll be done.
          </P>
        </div>

        <div className="relative grid grid-cols-4 gap-5 before:absolute before:top-[34px] before:right-[5%] before:left-[5%] before:h-px before:bg-[repeating-linear-gradient(90deg,#E3E9F0_0_8px,transparent_8px_14px)] max-[900px]:grid-cols-2 before:max-[900px]:hidden max-[520px]:grid-cols-1">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-[1] rounded-[14px] border border-[#E3E9F0] bg-white p-6"
            >
              <div
                className={`font-heading mb-5 grid h-12 w-12 place-items-center rounded-full text-[18px] font-bold ${step.alt ? 'border-transparent bg-[#2196D6] text-white' : 'border border-[#E3E9F0] bg-white text-[#0E1B2C]'}`}
              >
                {step.num}
              </div>
              <Heading level={4} className="font-heading mb-2 text-[18px] font-bold text-[#0E1B2C]">
                {step.title}
              </Heading>
              <P className="text-[14px] text-[#4F6172]">{step.desc}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
