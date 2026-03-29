import { useState } from 'react';
import { CheckCircle2, Factory, FlaskConical, Package, Tag, Layers, Beaker } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { DetailLayout } from '../components/detail-layout';
import { getProductBySlugs } from '../lib/products-data';

export default function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams();
  const [activeSubIdx, setActiveSubIdx] = useState(0);

  if (!categorySlug || !productSlug) {
    return <Navigate to="/products" replace />;
  }

  const resolved = getProductBySlugs(categorySlug, productSlug);
  if (!resolved) {
    return <Navigate to="/products" replace />;
  }

  const { category, product } = resolved;

  /* Determine which spec table to display */
  const hasSubProducts = product.subProducts && product.subProducts.length > 0;
  const activeSpecTable = hasSubProducts
    ? product.subProducts![activeSubIdx].specTable
    : product.specTable;
  const activeSpecTitle = hasSubProducts
    ? product.subProducts![activeSubIdx].name
    : 'Specifications & Composition';

  return (
    <DetailLayout
      sectionLabel="Product Details"
      title={product.name}
      subtitle={product.shortDescription}
    >
      <section className="section-padding bg-white">
        <div className="container-custom">

          {/* ── Breadcrumb ── */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products/${category.slug}`} className="hover:text-blue-600 transition-colors">{category.name}</Link>
            <span>/</span>
            <span className="font-semibold text-slate-700">{product.name}</span>
          </div>

          {/* ── Hero Grid: Image + Quick Facts ── */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product image */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="h-[280px] w-full object-cover sm:h-[380px] transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Quick facts panel */}
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{product.name}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{product.shortDescription}</p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Category */}
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-100">
                    <Layers className="mt-0.5 text-blue-600 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-medium">Category</p>
                      <p className="font-semibold text-slate-900 mt-0.5">{category.name}</p>
                    </div>
                  </div>

                  {/* Product type */}
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-100">
                    <Tag className="mt-0.5 text-blue-600 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-medium">Product Type</p>
                      <p className="font-semibold text-slate-900 mt-0.5">{product.productType}</p>
                    </div>
                  </div>

                  {/* Typical specs */}
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-100 sm:col-span-2">
                    <Beaker className="mt-0.5 text-blue-600 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-medium">Typical Specification</p>
                      <p className="font-semibold text-slate-900 mt-0.5 text-sm">{product.commonSpecs}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="text-blue-600" size={18} />
                    <h4 className="font-semibold text-blue-900 text-sm uppercase tracking-wide">Available Variants</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <span key={v} className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Physical specs */}
              {product.physicalSpecs && product.physicalSpecs.length > 0 && (
                <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wide mb-3">Physical Sizes / Forms</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.physicalSpecs.map((s) => (
                      <span key={s} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Sub-Product Type Selector + Specification Table ── */}
          {activeSpecTable && activeSpecTable.length > 0 && (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                  <FlaskConical className="text-white" size={18} />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {hasSubProducts ? 'Product Specifications' : 'Specifications & Composition'}
                </h3>
              </div>

              {/* ── Sub-product variant pill buttons ── */}
              {hasSubProducts && (
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-3">Select Type</p>
                  <div className="flex flex-wrap gap-2">
                    {product.subProducts!.map((sub, idx) => (
                      <button
                        key={sub.name}
                        onClick={() => setActiveSubIdx(idx)}
                        className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 border ${
                          activeSubIdx === idx
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Active spec table heading ── */}
              {hasSubProducts && (
                <h4 className="font-display text-lg font-bold text-blue-700 mb-4">{activeSpecTitle}</h4>
              )}

              
              {/* Specification Table */}
              {product.gradeTables && product.gradeTables.length > 0 ? (
                <div className="space-y-8 mt-2">
                  {product.gradeTables.map((gt, gIdx) => (
                    <div key={gIdx} className="overflow-hidden rounded-xl border border-slate-200">
                      {gt.name && (
                        <div className="bg-slate-100 py-3 px-5 border-b border-slate-200">
                          <h4 className="font-semibold text-slate-800">{gt.name}</h4>
                        </div>
                      )}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b-2 border-slate-200 bg-slate-50">
                              {gt.headers.map((h, hIdx) => (
                                <th key={hIdx} className="py-3 px-5 text-sm font-bold text-slate-700 whitespace-nowrap">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {gt.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="py-3 px-5 text-sm text-slate-700 whitespace-nowrap">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {activeSpecTable.map((row, idx) => (
                        <tr
                          key={`${row.parameter}-${idx}-spec`}
                          className="border-b border-slate-200 last:border-0 hover:bg-slate-50/50 transition-colors"
                        >
                          <td className="py-3.5 px-6 font-medium text-slate-700 bg-slate-50/50 w-1/2 border-r border-slate-200">
                            {row.parameter}
                          </td>
                          <td className="py-3.5 px-6 text-slate-800 font-semibold">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          
          {/* ── Overview & Detailed Description ── */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Overview</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{product.overview}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Detailed Description</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{product.detailedDescription}</p>
            </div>
          </div>

          
          {/* ── Production Method ── */}
          {product.productionMethod && (
            <div className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-3 md:w-1/3 flex-shrink-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500">
                  <Factory className="text-white" size={18} />
                </div>
                <h3 className="font-display text-xl font-bold text-amber-900">Production Method</h3>
              </div>
              <p className="text-amber-800 leading-relaxed text-sm sm:text-base md:w-2/3">{product.productionMethod}</p>
            </div>
          )}

          
          {/* ── Applications ── */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-5">Common Applications</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {product.applications.map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          
          {/* ── Key Technical Points ── */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-5">Key Technical Points</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {product.keyPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-100 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 text-blue-600 flex-shrink-0" size={16} />
                  {point}
                </div>
              ))}
            </div>
          </div>

        </div>
      
        </section>

      {/* ── Related products in same category ── */}
      <section className="pb-20 bg-slate-50">
        <div className="container-custom pt-10">
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
            More in {category.name}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${category.slug}/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="h-32 overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{p.name}</h4>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">{p.shortDescription}</p>
                    <span className="mt-3 inline-block text-xs font-semibold text-blue-600">View Details →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </DetailLayout>
  );
}
