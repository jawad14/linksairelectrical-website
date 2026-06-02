'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Check, ChevronRight, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Heading, P } from '@/components/ui/typography';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(8, 'Please enter a valid phone number')
    .regex(/^[\d\s\-+()]+$/, 'Phone number can only contain digits, spaces, and dashes'),
  email: z.string().email('Please enter a valid email address'),
  postcode: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: '',
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_ALEESA_API_URL || 'http://localhost:8000';
      const res = await fetch(`${baseUrl}/api/v1/integrations/website-form/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_ALEESA_FORM_API_KEY!,
        },
        body: JSON.stringify({
          formId: 'contact-us',
          originUrl: window.location.href,
          fields: {
            name: data.name,
            phone: data.phone,
            email: data.email,
            postcode: data.postcode || '',
            service: data.service,
            message: data.message || '',
          },
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || 'Submission failed');
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setSubmitError(message);
    }
  }

  return (
    <section id="contact" className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-[1fr_1.1fr] items-start gap-[clamp(32px,6vw,80px)] max-[900px]:grid-cols-1">
          {/* Left — info */}
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#1779B8] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#2196D6]">
              Get in touch
            </span>
            <Heading
              level={2}
              className="font-heading mt-4 text-[clamp(30px,3.8vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#0E1B2C]"
            >
              Let&apos;s Fix It For You
            </Heading>
            <P className="mt-3.5 text-[17px] text-[#4F6172]">
              Tell us what&apos;s going on and we&apos;ll get back to you fast — usually within a
              couple of hours. No obligation, no pressure. Just honest advice on the best way to
              sort your problem.
            </P>

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
              <Heading level={4} className="font-heading text-[18px] font-bold text-white">
                Electrical Emergency?
              </Heading>
              <P className="mt-2 text-[14px] text-white/85">
                Power out, sparking outlet, or no AC on a 40-degree day? We answer 24/7 and get to
                you fast.
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

          {/* Right — form */}
          <form
            className="rounded-[22px] border border-[#E3E9F0] bg-white p-10 shadow-[0_1px_2px_rgba(14,27,44,0.06),0_1px_1px_rgba(14,27,44,0.04)] max-[520px]:p-7"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#E8F5E0] text-[#6BA432]">
                  <Check className="h-8 w-8" strokeWidth={2.5} />
                </div>
                <Heading level={3} className="font-heading text-[22px] font-bold text-[#0E1B2C]">
                  Thanks — we&apos;ll be in touch!
                </Heading>
                <P className="max-w-[320px] text-[15px] text-[#4F6172]">
                  Our team will get back to you within a few business hours.
                </P>
              </div>
            ) : (
              <>
                <Heading
                  level={3}
                  className="font-heading mb-6 text-[22px] font-bold text-[#0E1B2C]"
                >
                  Request a Free Quote
                </Heading>

                <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
                  <Field
                    label="Full name"
                    type="text"
                    placeholder="Jane Smith"
                    error={errors.name?.message}
                    {...register('name')}
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    placeholder="0400 000 000"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                </div>

                <Field
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
                  <Field
                    label="Postcode"
                    type="text"
                    placeholder="e.g. 4000"
                    {...register('postcode')}
                  />
                  <div className="mb-[18px] flex flex-col">
                    <label className="mb-2 text-[13px] font-semibold text-[#0E1B2C]">
                      Select Service
                    </label>
                    <select
                      className={`rounded-[10px] border bg-white px-3.5 py-3.5 text-[15px] text-[#0E1B2C] transition-all focus:border-[#2196D6] focus:shadow-[0_0_0_3px_rgba(33,150,214,0.15)] focus:outline-none ${errors.service ? 'border-[#E73438]' : 'border-[#E3E9F0]'}`}
                      {...register('service')}
                    >
                      <option value="">Select Service</option>
                      <option>Air Conditioning Services</option>
                      <option>Electrical Services</option>
                      <option>Builder Services</option>
                    </select>
                    {errors.service && <FieldError message={errors.service.message} />}
                  </div>
                </div>

                <div className="mb-[18px] flex flex-col">
                  <label className="mb-2 text-[13px] font-semibold text-[#0E1B2C]">
                    Tell us about the job
                  </label>
                  <textarea
                    className="min-h-[120px] resize-y rounded-[10px] border border-[#E3E9F0] bg-white px-3.5 py-3.5 text-[15px] text-[#0E1B2C] transition-all focus:border-[#2196D6] focus:shadow-[0_0_0_3px_rgba(33,150,214,0.15)] focus:outline-none"
                    placeholder="Describe what you need — feel free to mention timeframe."
                    {...register('message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E73438] px-[22px] py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(231,52,56,0.6)] transition-transform hover:-translate-y-px hover:bg-[#D62229] disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  {!isSubmitting && <ChevronRight className="h-4 w-4" strokeWidth={2.5} />}
                </button>

                {submitError && (
                  <div className="mt-3 flex items-start gap-2 rounded-[10px] border border-[#E73438]/20 bg-[#FEF2F2] px-4 py-3 text-[13px] text-[#E73438]">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      {submitError}. Please try again or call us at {siteConfig.mobile}.
                    </span>
                  </div>
                )}

                <div className="mt-3 flex items-start gap-2 text-[12px] leading-[1.4] text-[#4F6172]">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6BA432]" strokeWidth={2.5} />
                  We never share your details. Your info goes to our office team only.
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Helper components ── */

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span className="mt-1.5 flex items-center gap-1 text-[12px] text-[#E73438]">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {message}
    </span>
  );
}

import { forwardRef } from 'react';

const Field = forwardRef<
  HTMLInputElement,
  {
    label: string;
    type: string;
    placeholder: string;
    error?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>
>(function Field({ label, type, placeholder, error, ...rest }, ref) {
  return (
    <div className="mb-[18px] flex flex-col">
      <label className="mb-2 text-[13px] font-semibold text-[#0E1B2C]">{label}</label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`rounded-[10px] border bg-white px-3.5 py-3.5 text-[15px] text-[#0E1B2C] transition-all focus:border-[#2196D6] focus:shadow-[0_0_0_3px_rgba(33,150,214,0.15)] focus:outline-none ${error ? 'border-[#E73438]' : 'border-[#E3E9F0]'}`}
        {...rest}
      />
      <FieldError message={error} />
    </div>
  );
});

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
