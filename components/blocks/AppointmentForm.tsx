'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Send, Calendar } from 'lucide-react';
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

const fieldStyle =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20';

const fieldError = 'border-destructive focus:border-destructive focus:ring-destructive/20';

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
    <Section spacing="lg">
      <Container size="md">
        <FadeUp>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            {/* Header strip */}
            <div className="from-primary to-secondary bg-gradient-to-r px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-accent size-6" />
                <H2 className="text-primary-foreground text-xl sm:text-2xl">
                  Schedule an Appointment
                </H2>
              </div>
              <P className="text-primary-foreground/60 mt-1 text-sm">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </P>
            </div>

            {/* Form body */}
            <div className="bg-white p-6 sm:p-8">
              {isSubmitSuccessful ? (
                <Stack gap="md" align="center" className="py-10 text-center">
                  <div className="bg-accent/10 flex size-16 items-center justify-center rounded-full">
                    <Send className="text-accent size-7" />
                  </div>
                  <H2 className="text-accent">Thank You!</H2>
                  <P variant="muted">
                    Your request has been submitted. We&apos;ll get back to you shortly.
                  </P>
                </Stack>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                  {/* Row: Name + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        className={`${fieldStyle} ${errors.name ? fieldError : ''}`}
                        {...register('name')}
                      />
                      {errors.name && (
                        <Small className="text-destructive mt-1">{errors.name.message}</Small>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        aria-invalid={!!errors.phone}
                        className={`${fieldStyle} ${errors.phone ? fieldError : ''}`}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <Small className="text-destructive mt-1">{errors.phone.message}</Small>
                      )}
                    </div>
                  </div>

                  {/* Row: Email + Service */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        aria-invalid={!!errors.email}
                        className={`${fieldStyle} ${errors.email ? fieldError : ''}`}
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
                          className={`bg-background !h-auto w-full rounded-lg border px-4 py-3 text-sm ${
                            watch('service') ? 'text-foreground' : 'text-muted-foreground'
                          } ${errors.service ? 'border-destructive' : 'border-border'}`}
                          aria-invalid={!!errors.service}
                        >
                          <SelectValue placeholder="Select service" />
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
                  <input placeholder="Post code" className={fieldStyle} {...register('postcode')} />

                  {/* Message */}
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className={`${fieldStyle} resize-none`}
                    {...register('message')}
                  />

                  {/* Bottom row: submit + phone */}
                  <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110 disabled:opacity-50 sm:w-auto"
                    >
                      <Send className="size-4" />
                      {isSubmitting ? 'Submitting...' : 'Submit Now'}
                    </button>
                    <P variant="muted" className="text-sm">
                      or call{' '}
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                        className="text-destructive font-bold transition-opacity hover:opacity-80"
                      >
                        <Phone className="mr-1 inline size-3.5" />
                        {siteConfig.phone}
                      </a>
                    </P>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
