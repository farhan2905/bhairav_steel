import { Facebook, Globe, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'News', href: '#' },
  ],
  products: [
    { label: 'Steel Plates', href: '/products' },
    { label: 'Steel Bars', href: '/products' },
    { label: 'Steel Coils', href: '/products' },
    { label: 'Custom Products', href: '/products' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Quality Certs', href: '/services' },
  ],
};

function FooterLink({ label, href }: { label: string; href: string }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className="text-slate-400 hover:text-white transition-colors">
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className="text-slate-400 hover:text-white transition-colors">
      {label}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-10 lg:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="footer-logo-badge">
                <img src="/brand-logo.png" alt="Bhairav Steel logo" className="brand-logo-footer" />
              </div>
              <span className="font-display font-bold text-xl">
                Bhairav <span className="text-blue-400">Steel</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Precision manufacturing and reliable transport of specialized bulk steel orders.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={`${link.label}-company`}>
                  <FooterLink label={link.label} href={link.href} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={`${link.label}-products`}>
                  <FooterLink label={link.label} href={link.href} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={`${link.label}-support`}>
                  <FooterLink label={link.label} href={link.href} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-custom py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Bhairav Steel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
