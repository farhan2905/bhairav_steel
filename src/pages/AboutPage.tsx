import { Building2, Calendar, CheckCircle2, Factory, Globe, Shield, Users, TrendingUp } from 'lucide-react';
import { DetailLayout } from '../components/detail-layout';

const pillars = [
  {
    icon: Factory,
    title: 'Manufacturing Depth',
    description: 'Integrated facilities for plate processing, bar rolling, and custom profile production.',
  },
  {
    icon: Shield,
    title: 'Quality Discipline',
    description: 'Traceability and batch-level testing designed for high-compliance projects.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Export-ready documentation and logistics support for large multi-country programs.',
  },
  {
    icon: Users,
    title: 'People First',
    description: 'Experienced metallurgists and project teams focused on reliable execution.',
  },
];

const companyStats = [
  { icon: Calendar, label: 'Year Established', value: '2025' },
  { icon: Building2, label: 'Companies Served', value: '20+' },
  { icon: Globe, label: 'States Supplied', value: '10+' },
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
      title="Precision Steel Manufacturing & Transport"
      subtitle="Founded in 2025, Bhairav Steel specializes in the manufacturing, transport, and reliable execution of bulk specialized steel orders."
    >
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">About Us</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Founded in 2025, Bhairav Steel has rapidly established itself as a trusted partner in the manufacture and transport of high-performance steel products and bulk ferro alloys. Our agile approach allows us to confidently tackle specialized orders with precision and care.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Beyond manufacturing and logistics, we act as a dedicated trading partner and commercial broker for our clients. Our commission agents bridge buyers and suppliers, align quantities, and value-engineer every shipment while protecting commercial discretion.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              With a strong focus on manufacturing efficiency and streamlined transport, our team ensures seamless logistics and top-tier product quality for every specialized requirement, no matter the scale.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Agile manufacturing and transport framework',
                'MSME Certified quality processes',
                'Specialized handling of bulk orders',
                'Global supply chain and logistics network',
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
