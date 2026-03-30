import { Mail, MapPin, Phone } from 'lucide-react';
import { DetailLayout } from '../components/detail-layout';

export default function ContactPage() {
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
                  <Phone className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Phone</p>
                  <p className="font-semibold text-slate-900">+91 82838 45490 <br/>+91 96023 02808</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <Mail className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">bhairavsteel247@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <MapPin className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Head Office</p>
                  <p className="font-semibold text-slate-900">Shop No. 251, Massimo Complex,<br/>Althan Canal Road, Bhimrad,<br/>Surat, Gujarat - 395017</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <MapPin className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Branch Office</p>
                  <p className="font-semibold text-slate-900">Howrah Kolkata, West Bengal - India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-slate-900">Company Information</h3>
            <p className="mt-3 text-slate-600">
              Bhairav Steel operates across multiple regions, ensuring high-quality steel gets to where it is needed on time.
            </p>
            <div className="mt-6 space-y-4">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-2">
                      <p className="text-slate-500 uppercase tracking-wider text-xs font-semibold">Tax Information</p>
                      <p className="font-bold text-lg text-slate-900">GST: 24GCEPB3421C1ZF</p>
                  </div>
                </article>
                <article className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <div className="flex flex-col gap-2">
                      <p className="text-blue-600 uppercase tracking-wider text-xs font-semibold">Certifications</p>
                      <p className="font-bold text-lg text-slate-900">MSME Certified</p>
                  </div>
                </article>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
