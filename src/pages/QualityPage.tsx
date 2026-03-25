import { Award, CheckCircle2 } from 'lucide-react';
import { DetailLayout } from '../components/detail-layout';

const certifications = [
  {
    name: 'ISO 9001:2015',
    focus: 'Quality management systems and process consistency.',
  },
  {
    name: 'ISO 14001:2015',
    focus: 'Environmental impact management and operational controls.',
  },
  {
    name: 'OHSAS 18001',
    focus: 'Occupational health and safety framework for workforce protection.',
  },
];

const checkpoints = [
  'Incoming raw material verification and supplier screening',
  'In-process checks for dimensional and mechanical integrity',
  'Laboratory validation for chemistry and strength parameters',
  'Final inspection with full test report and dispatch clearance',
];

export default function QualityPage() {
  return (
    <DetailLayout
      sectionLabel="Quality Center"
      title="A Structured Quality System at Every Stage"
      subtitle="Quality at Bhairav Steel is built into planning, production, and dispatch with measurable checkpoints and certification-backed processes."
    >
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="font-display text-3xl font-bold text-slate-900">Certifications</h2>
            <div className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <article key={cert.name} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <Award className="text-blue-600" size={18} />
                    <h3 className="font-semibold text-slate-900">{cert.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{cert.focus}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="font-display text-3xl font-bold text-slate-900">Inspection Workflow</h2>
            <ul className="mt-6 space-y-4">
              {checkpoints.map((checkpoint, index) => (
                <li key={checkpoint} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{checkpoint}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
              <CheckCircle2 size={16} />
              Average quality acceptance remains above 99.9% across outgoing batches.
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
