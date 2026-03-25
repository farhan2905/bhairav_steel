import type { ReactNode } from 'react';
import SiteFooter from './site-footer';
import SiteHeader from './site-header';

type DetailLayoutProps = {
  title: string;
  subtitle: string;
  sectionLabel: string;
  children: ReactNode;
};

export function DetailLayout({ title, subtitle, sectionLabel, children }: DetailLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader forceSolid />

      <section className="page-load-enter relative overflow-hidden border-b border-slate-200 bg-slate-50 pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_45%)]" />
        <div className="container-custom relative z-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">{sectionLabel}</span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 lg:text-lg">{subtitle}</p>
        </div>
      </section>

      <main className="page-load-content">{children}</main>

      <SiteFooter />
    </div>
  );
}
