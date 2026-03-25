import { Mail, MapPin, Phone, UserRound } from 'lucide-react';
import { DetailLayout } from '../components/detail-layout';

export default function ContactPage() {
  const contactPeople = [
    {
      name: 'Bhargav Patel',
      role: 'Sales Director',
      direct: '+91 98200 11223',
    },
    {
      name: 'Neha Mehta',
      role: 'Key Accounts Manager',
      direct: '+91 98198 44556',
    },
    {
      name: 'Rohan Shah',
      role: 'Operations Coordinator',
      direct: '+91 98921 77889',
    },
  ];

  return (
    <DetailLayout
      sectionLabel="Contact Desk"
      title="Talk to Our Steel Specialists"
      subtitle="Share project details, timelines, and technical requirements. We will reply with a clear commercial and technical response."
    >
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="font-display text-3xl font-bold text-slate-900">Contact Information</h2>
            <div className="mt-7 space-y-5">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <Mail className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">sales@bhairavsteel.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <Phone className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">General Company Number</p>
                  <p className="font-semibold text-slate-900">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <MapPin className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Address</p>
                  <p className="font-semibold text-slate-900">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-slate-900">Contact Our Team</h3>
            <p className="mt-3 text-slate-600">
              Reach out directly to the right person for quotes, delivery planning, and technical queries.
            </p>
            <div className="mt-6 space-y-4">
              {contactPeople.map((person) => (
                <article key={person.direct} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                        <UserRound className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{person.name}</p>
                        <p className="text-sm text-slate-500">{person.role}</p>
                        <p className="mt-1 text-sm font-medium text-blue-700">Direct: {person.direct}</p>
                      </div>
                    </div>
                    <a href={`tel:${person.direct.replace(/\s+/g, '')}`} className="btn-secondary !px-4 !py-2 text-sm">
                      Call
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
