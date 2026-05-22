'use client';

import { Phone, Mail, MapPin, Check, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Heading, P } from '@/components/ui/typography';

export function Contact() {
  return (
    <section id="contact" className="py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
            Schedule an appointment
          </span>
          <Heading
            level={2}
            className="font-heading text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            Tell us about the job.
          </Heading>
          <P className="mt-3.5 text-[17px] text-[#4F6172]">
            Fill in the form and a real human gets back to you — usually within a few business
            hours. Need someone today? Give us a call directly.
          </P>
        </div>

        <div className="grid grid-cols-[1fr_1.1fr] items-start gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Info */}
          <div>
            <InfoBlock
              icon={Phone}
              label="Phone"
              value={siteConfig.phone}
              sub={`Mobile: ${siteConfig.mobile}`}
            />
            <InfoBlock
              icon={Mail}
              label="Email"
              value={siteConfig.email}
              sub="Replies within a few business hours"
            />
            <InfoBlock
              icon={MapPin}
              label="Service area"
              value="Brisbane & Gold Coast"
              sub="Servicing all major suburbs across SEQ"
            />

            {/* Emergency CTA */}
            <div className="mt-8 rounded-[14px] bg-[#E73438] p-6 text-white">
              <div className="font-heading text-[18px] font-bold">We&apos;re On Call</div>
              <P className="mt-2 text-[14px] text-white/85">
                Need an emergency electrician? We offer call-outs across Brisbane and Gold Coast.
              </P>
              <a
                href={`tel:${siteConfig.mobile.replace(/\s/g, '')}`}
                className="font-heading mt-4 inline-flex items-center gap-2 text-[20px] font-bold"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.mobile}
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            className="rounded-[22px] border border-[#E3E9F0] bg-white p-10 shadow-[0_1px_2px_rgba(14,27,44,0.06),0_1px_1px_rgba(14,27,44,0.04)] max-[520px]:p-7"
            onSubmit={(e) => {
              e.preventDefault();
              const btn = e.currentTarget.querySelector('button') as HTMLButtonElement;
              btn.textContent = 'Thanks \u2014 we\u2019ll be in touch';
              btn.style.background = '#6BA432';
            }}
          >
            <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
              <Field label="Full name" type="text" placeholder="Jane Smith" required />
              <Field label="Phone" type="tel" placeholder="0400 000 000" required />
            </div>
            <Field label="Email" type="email" placeholder="you@example.com" required />
            <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
              <Field label="Postcode" type="text" placeholder="e.g. 4000" />
              <div className="mb-[18px] flex flex-col">
                <label className="mb-2 text-[13px] font-semibold text-[#0E1B2C]">
                  Service needed
                </label>
                <select className="rounded-[10px] border border-[#E3E9F0] bg-white px-3.5 py-[13px] text-[15px] text-[#0E1B2C] transition-all focus:border-[#2196D6] focus:shadow-[0_0_0_3px_rgba(33,150,214,0.15)] focus:outline-none">
                  <option>Air Conditioning</option>
                  <option>Electrical</option>
                  <option>Building &amp; Construction</option>
                  <option>Emergency Call-out</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-[18px] flex flex-col">
              <label className="mb-2 text-[13px] font-semibold text-[#0E1B2C]">
                Tell us about the job
              </label>
              <textarea
                className="min-h-[120px] resize-y rounded-[10px] border border-[#E3E9F0] bg-white px-3.5 py-[13px] text-[15px] text-[#0E1B2C] transition-all focus:border-[#2196D6] focus:shadow-[0_0_0_3px_rgba(33,150,214,0.15)] focus:outline-none"
                placeholder="Describe what you need — feel free to mention timeframe."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E73438] px-[22px] py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229]"
            >
              Send Enquiry
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <div className="mt-3 flex items-start gap-2 text-[12px] leading-[1.4] text-[#4F6172]">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6BA432]" strokeWidth={2.5} />
              We never share your details. Your info goes to our office team only.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="mt-7 flex items-start gap-3.5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#E9F4FB] text-[#1779B8]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <Heading
          level={4}
          className="font-heading mb-1 text-[14px] font-medium tracking-[0.04em] text-[#4F6172] uppercase"
        >
          {label}
        </Heading>
        <div className="text-[18px] leading-[1.3] font-semibold text-[#0E1B2C]">{value}</div>
        <div className="mt-0.5 text-[14px] text-[#4F6172]">{sub}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="mb-[18px] flex flex-col">
      <label className="mb-2 text-[13px] font-semibold text-[#0E1B2C]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-[10px] border border-[#E3E9F0] bg-white px-3.5 py-[13px] text-[15px] text-[#0E1B2C] transition-all focus:border-[#2196D6] focus:shadow-[0_0_0_3px_rgba(33,150,214,0.15)] focus:outline-none"
      />
    </div>
  );
}
