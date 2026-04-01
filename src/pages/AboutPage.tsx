import { Building2, Calendar, CheckCircle2, Globe, Shield, Users, TrendingUp } from 'lucide-react';
import { DetailLayout } from '../components/detail-layout';

const pillars = [
  {
    icon: TrendingUp,
    title: 'Trading Expertise',
    description: 'Market-aware sourcing and deal structuring for steel and bulk ferro alloy requirements.',
  },
  {
    icon: Shield,
    title: 'Commercial Assurance',
    description: 'Transparent documentation, clear terms, and disciplined execution across every transaction.',
  },
  {
    icon: Users,
    title: 'Commission Network',
    description: 'Reliable commission agents connecting vetted buyers and suppliers with confidentiality.',
  },
  {
    icon: Globe,
    title: 'Pan India Supply',
    description: 'Consistent fulfillment support across regions through an agile partner ecosystem.',
  },
];

const companyStats = [
  { icon: Calendar, label: 'Year Established', value: '2019' },
  { icon: Building2, label: 'Companies Served', value: '120+ ' },
  { icon: Globe, label: 'States Supplied', value: 'pan india' },
  { icon: TrendingUp, label: 'Tons Delivered', value: '10K+' },
];

const industries = [
  'Infrastructure and urban mobility projects',
  'Energy and process industries',
  'Automotive and engineering supply chains',
  'Heavy fabrication and industrial construction',
];

export default function AboutPage() {
  return (
    <DetailLayout
      sectionLabel="About Bhairav Steel"
      title="Steel Trading & Commission Brokerage"
      subtitle="Founded in 2019, Bhairav Steel is a trusted trading and commission partner for steel products and bulk ferro alloys across pan India."
    >
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">About Us</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Founded in 2019, Bhairav Steel has grown as a trusted trading partner for high-performance steel products and bulk ferro alloys. Our agile commercial approach helps clients secure specialized requirements with speed, clarity, and consistency.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              We operate with a strong commission-based brokerage model where our team bridges buyers and suppliers, aligns volumes, negotiates practical terms, and protects commercial discretion at every stage.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              From sourcing strategy to dispatch coordination, we focus on dependable deal execution and supply continuity, ensuring each transaction is value-driven and aligned to customer timelines.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Commission-driven buyer-supplier matchmaking',
                'Strong steel and ferro alloys trading network',
                'Specialized handling of bulk and custom orders',
                'Commercially confidential and transparent execution',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="font-display text-2xl font-bold text-slate-900">Company Highlights</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {companyStats.map((stat) => (
                <article key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4">
                  <stat.icon className="text-blue-600" size={18} />
                  <p className="mt-3 text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="text-center font-display text-3xl font-bold text-slate-900">Our Core Pillars</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="feature-icon mb-5">
                  <pillar.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="font-display text-2xl font-bold text-slate-900">Industries We Serve</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <div key={industry} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
