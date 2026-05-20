'use client';

import { Clock, Shield, ThumbsUp, Wrench, Star, Ban } from 'lucide-react';
import { Container, Section } from '@/components/ui/layout';
import { StaggerGroup, StaggerItem } from '@/components/ui/motion';

const stats = [
  { icon: Clock, label: '7+ Years Experience' },
  { icon: ThumbsUp, label: '100% Satisfaction' },
  { icon: Shield, label: 'Zero Damage Install' },
  { icon: Star, label: 'Top Brands' },
  { icon: Wrench, label: 'Periodic Maintenance' },
  { icon: Ban, label: 'No Hidden Charges' },
];

export function TrustStats() {
  return (
    <Section spacing="sm" className="border-border/60 border-y bg-white">
      <Container size="xl">
        <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <div className="flex items-center gap-3 py-2">
                  <Icon className="text-accent size-5 shrink-0" />
                  <span className="text-foreground text-sm font-medium">{stat.label}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
