import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { DetailLayout } from '../components/detail-layout';
import { getCategoryBySlug } from '../lib/products-data';

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();

  if (!categorySlug) {
    return <Navigate to="/products" replace />;
  }

  const category = getCategoryBySlug(categorySlug);
  if (!category) {
    return <Navigate to="/products" replace />;
  }

  return (
    <DetailLayout
      sectionLabel="Products"
      title={category.name}
      subtitle={category.description}
    >
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="font-semibold text-slate-700">{category.name}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {category.products.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="h-36 sm:h-40 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">{item.shortDescription}</p>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-blue-600">{item.commonSpecs}</p>
                  <Link
                    to={`/products/${category.slug}/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <h3 className="font-display text-2xl font-bold text-slate-900">Quick Product Buttons</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {category.products.map((item) => (
                <Link
                  key={`quick-${item.slug}`}
                  to={`/products/${category.slug}/${item.slug}`}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="font-display text-2xl font-bold text-slate-900">Why Choose {category.name}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Quality verification before dispatch',
                'Reliable packing and logistics support',
                'Consistent chemistry and grade control',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  <CheckCircle2 className="text-blue-600" size={16} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
