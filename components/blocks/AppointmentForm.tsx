'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H2, P, Small } from '@/components/ui/typography';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FadeUp } from '@/components/ui/motion';
import { siteConfig } from '@/config/site.config';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z
    .string()
    .min(8, 'Enter a valid phone number')
    .regex(/^[\d\s+()-]+$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  postcode: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const services = [
  'Split System Air Conditioning',
  'Ducted Air Conditioning',
  'AC Repair & Maintenance',
  'Electrical Services',
  'EV Charger Installation',
  'Building & Construction',
  'Other',
];

const inputBase =
  'w-full h-12 rounded-md border-0 bg-[#2d3748] px-4 text-sm text-white outline-none placeholder:text-white/40 transition-all focus:ring-2 focus:ring-accent';

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', phone: '', email: '', service: '', postcode: '', message: '' },
  });

  async function onSubmit(data: FormData) {
     
    console.log('Appointment form submitted:', data);
    reset();
  }

  return (
    <Section spacing="lg" className="bg-muted/40">
      <Container size="xl">
        <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left — promo card (2 cols) */}
          <FadeUp className="lg:col-span-2">
            <Stack gap="lg" className="bg-secondary text-secondary-foreground rounded-2xl p-8">
              <H2 className="text-secondary-foreground text-xl font-bold sm:text-2xl">
                Leading Cooling Company Serving Australia!
              </H2>

              <div className="flex items-center gap-4">
                <div className="bg-accent text-accent-foreground flex shrink-0 flex-col items-center rounded-lg px-4 py-3 text-lg leading-tight font-bold">
                  <span>20%</span>
                  <span>OFF</span>
                </div>
                <P className="text-secondary-foreground font-semibold">
                  Electrical or AC Maintenance &amp; Repair
                </P>
              </div>

              <hr className="border-secondary-foreground/20" />

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-secondary-foreground text-center text-2xl font-bold transition-opacity hover:opacity-80 sm:text-3xl"
              >
                {siteConfig.phone}
              </a>
            </Stack>
          </FadeUp>

          {/* Right — form (3 cols) */}
          <FadeUp delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
              <H2 className="text-secondary mb-6">Schedule an Appointment</H2>

              {isSubmitSuccessful ? (
                <Stack gap="md" align="center" className="py-8 text-center">
                  <H2 className="text-accent">Thank You!</H2>
                  <P variant="muted">
                    Your request has been submitted. We&apos;ll get back to you shortly.
                  </P>
                </Stack>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
                  {/* Row: Name + Phone */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <input
                        placeholder="Name"
                        aria-invalid={!!errors.name}
                        className={`${inputBase} ${errors.name ? 'ring-destructive ring-2' : ''}`}
                        {...register('name')}
                      />
                      {errors.name && (
                        <Small className="text-destructive mt-1">{errors.name.message}</Small>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        aria-invalid={!!errors.phone}
                        className={`${inputBase} ${errors.phone ? 'ring-destructive ring-2' : ''}`}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <Small className="text-destructive mt-1">{errors.phone.message}</Small>
                      )}
                    </div>
                  </div>

                  {/* Row: Email + Service */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        aria-invalid={!!errors.email}
                        className={`${inputBase} ${errors.email ? 'ring-destructive ring-2' : ''}`}
                        {...register('email')}
                      />
                      {errors.email && (
                        <Small className="text-destructive mt-1">{errors.email.message}</Small>
                      )}
                    </div>
                    <div>
                      <Select
                        value={watch('service') || undefined}
                        onValueChange={(val) => {
                          if (val) setValue('service', val, { shouldValidate: true });
                        }}
                      >
                        <SelectTrigger
                          className={`!h-12 w-full rounded-md border-0 bg-[#2d3748] px-4 text-sm text-white data-placeholder:text-white/40 ${errors.service ? 'ring-destructive ring-2' : ''}`}
                          aria-invalid={!!errors.service}
                        >
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <Small className="text-destructive mt-1">{errors.service.message}</Small>
                      )}
                    </div>
                  </div>

                  {/* Post Code */}
                  <input placeholder="Post Code" className={inputBase} {...register('postcode')} />

                  {/* Message */}
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="focus:ring-accent w-full resize-none rounded-md border-0 bg-[#2d3748] px-4 py-3 text-sm text-white transition-all outline-none placeholder:text-white/40 focus:ring-2"
                    {...register('message')}
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent mt-1 w-full rounded-md py-3.5 text-sm font-bold text-white transition-all hover:brightness-110 disabled:opacity-50 sm:w-auto sm:px-10"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Now'}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
