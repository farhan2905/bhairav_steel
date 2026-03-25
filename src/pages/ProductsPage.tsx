import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DetailLayout } from '../components/detail-layout';
import { productCatalog } from '../lib/products-data';

export default function ProductsPage() {
  return (
    <DetailLayout
      sectionLabel="Products"
      title="Products"
      subtitle="Browse our 4 main categories and open each subproduct for detailed specifications and use-case information."
    >
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productCatalog.map((category) => (
              <article key={category.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="h-36 overflow-hidden">
                  <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-bold text-slate-900">{category.name}</h2>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{category.description}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {category.products.length} subproducts
                  </p>
                  <Link
                    to={`/products/${category.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View Subproducts
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-slate-900">All Products and Subproducts</h3>
            <div className="mt-5 space-y-4">
              {productCatalog.map((category) => (
                <div key={`buttons-${category.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <Link to={`/products/${category.slug}`} className="text-sm font-bold uppercase tracking-wide text-blue-700 hover:text-blue-800">
                    {category.name}
                  </Link>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.products.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${category.slug}/${product.slug}`}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
