import Image from 'next/image';
import { Container, Section, Grid, Stack } from '@/components/ui/layout';
import { H3, Small } from '@/components/ui/typography';

const stats = [
  { icon: '/images/icons/experience.png', title: '7+ Years', subtitle: 'of Experience' },
  { icon: '/images/icons/satisfaction.png', title: '100%', subtitle: 'Client Satisfaction' },
  { icon: '/images/icons/zero-damage.png', title: 'Zero Damage', subtitle: 'Installation' },
  {
    icon: '/images/icons/top-brands.png',
    title: 'Top Brands',
    subtitle: 'Servicing All Major Brands',
  },
  { icon: '/images/icons/maintenance.png', title: 'Periodic', subtitle: 'AC Maintenance' },
  { icon: '/images/icons/no-hidden-charges.png', title: 'No Hidden', subtitle: 'Charges' },
];

export function TrustStats() {
  return (
    <Section spacing="md" className="bg-primary text-primary-foreground">
      <Container size="xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <Stack key={stat.title} gap="sm" align="center" className="text-center">
              <div className="bg-primary-foreground/10 flex size-16 items-center justify-center rounded-full">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={40}
                  height={40}
                  className="size-10 brightness-0 invert"
                />
              </div>
              <H3 className="text-primary-foreground text-base">{stat.title}</H3>
              <Small className="text-primary-foreground/70">{stat.subtitle}</Small>
            </Stack>
          ))}
        </div>
      </Container>
    </Section>
  );
}
