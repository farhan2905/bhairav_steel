import { Building2, Calendar, CheckCircle2, Factory, Globe, Shield, Users } from 'lucide-react';
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
  { icon: Calendar, label: 'Year Established', value: '1998' },
  { icon: Building2, label: 'Companies Served', value: '1000+' },
  { icon: Globe, label: 'Countries Supplied', value: '50+' },
  { icon: Users, label: 'Workforce Strength', value: '600+' },
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
      title="Decades of Excellence in Steel Manufacturing"
      subtitle="Founded on principles of precision and quality, Bhairav Steel has evolved into a leading manufacturer of high-performance steel products."
    >
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">About Us</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Founded on principles of precision and quality, Bhairav Steel has evolved into a leading manufacturer of high-performance steel products.
              Our journey from a modest beginning to an industry leader reflects our unwavering commitment to excellence.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              We serve diverse sectors including infrastructure, energy, automotive, and heavy industry with products that meet the highest international standards.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'State-of-the-art manufacturing facility',
                'ISO 9001:2015 certified processes',
                'Dedicated R&D team',
                'Global supply chain network',
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
