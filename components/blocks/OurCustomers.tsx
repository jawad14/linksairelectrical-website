import { Home, Building2, HardHat, Store, Users } from 'lucide-react';
import { Heading, P } from '@/components/ui/typography';

const customers = [
  { icon: Home, label: 'Homeowners' },
  { icon: Building2, label: 'Landlords & Property Managers' },
  { icon: HardHat, label: 'Builders & Renovators' },
  { icon: Store, label: 'Office & Retail Businesses' },
  { icon: Users, label: 'Body Corporates & Developers' },
];

export function OurCustomers() {
  return (
    <section className="bg-[#F4F7FA] py-[clamp(72px,9vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,56px)]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-[18px] inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-[#E73438] uppercase before:inline-block before:h-0.5 before:w-6 before:bg-[#E73438]">
            Who we work with
          </span>
          <Heading
            level={2}
            className="font-heading mb-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#0E1B2C]"
          >
            Our Customers
          </Heading>
        </div>

        <div className="grid grid-cols-5 gap-5 max-[900px]:grid-cols-3 max-[520px]:grid-cols-2">
          {customers.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-4 rounded-[14px] border border-[#E3E9F0] bg-white p-6 text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FDE7E8] text-[#E73438]">
                <c.icon className="h-7 w-7" />
              </div>
              <P className="text-[14px] leading-[1.3] font-semibold text-[#0E1B2C]">{c.label}</P>
            </div>
          ))}
        </div>

        <P className="mt-8 text-center text-[16px] text-[#4F6172]">
          Whether you need one job done or ongoing support, we&apos;re happy to help.
        </P>
      </div>
    </section>
  );
}
