import { Factory, Lightbulb, Shield, Truck } from 'lucide-react';
import { DetailLayout } from '../components/detail-layout';

const services = [
  {
    icon: Factory,
    title: 'Custom Manufacturing',
    details: [
      'Specification-based manufacturing aligned to project requirements.',
      'Flexible production planning for phased dispatch schedules.',
      'Support for special grades and non-standard dimensions.',
    ],
  },
  {
    icon: Shield,
    title: 'Quality Testing and Documentation',
    details: [
      'Mechanical, chemical, and non-destructive testing workflows.',
      'Material traceability from raw batch to final dispatch.',
      'Complete mill test reports and compliance documentation.',
    ],
  },
  {
    icon: Truck,
    title: 'Logistics and Delivery Management',
    details: [
      'Multi-modal transport planning for domestic and export cargo.',
      'Dispatch sequencing aligned with site and project schedules.',
      'Shipment visibility with milestone-based communication.',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Technical Consultation',
    details: [
      'Guidance on grade selection and application suitability.',
      'Input on fabrication, weldability, and process optimization.',
      'Early-stage collaboration for risk and cost control.',
    ],
  },
];

export default function ServicesPage() {
  return (
    <DetailLayout
      sectionLabel="Service Details"
      title="End-to-End Support Beyond Material Supply"
      subtitle="Our service model combines technical depth with execution discipline so your teams can move faster with lower project risk."
    >
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="feature-icon mb-5">
                <service.icon className="text-blue-600" size={26} />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900">{service.title}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
                {service.details.map((detail) => (
                  <li key={detail} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </DetailLayout>
  );
}
