import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, ArrowRight, Phone, Mail, MapPin,
  Factory, Shield, Globe, Lightbulb, Users, Award,
  CheckCircle2, TrendingUp, Clock, Truck, Linkedin
} from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Quality', href: '#quality' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3 border-b border-slate-200/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/brand-logo.png" alt="Bhairav Steel logo" className="brand-logo-nav transition-transform duration-300 group-hover:scale-105" />
          <span className={`font-display font-bold text-xl ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Bhairav <span className={isScrolled ? 'text-blue-600' : 'text-blue-600'}>Steel</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`nav-link text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-sm py-3 px-6"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'hover:bg-slate-100' : 'hover:bg-slate-100'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-slate-700' : 'text-slate-700'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-slate-700' : 'text-slate-700'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      src: '/hero_foundry.jpg',
      title: 'Precision Steel, Delivered Fast',
      subtitle: 'Reliable supply for high-demand projects.',
    },
    {
      src: '/products_stack.jpg',
      title: 'Built for Infrastructure',
      subtitle: 'Durable grades for structural performance.',
    },
    {
      src: '/quality_lab.jpg',
      title: 'Every Batch Tested',
      subtitle: 'Strict quality control at every stage.',
    },
    {
      src: '/logistics_train.jpg',
      title: 'Ready for Global Dispatch',
      subtitle: 'Strong logistics with dependable timelines.',
    },
    {
      src: '/about_facade.jpg',
      title: 'Experience You Can Build On',
      subtitle: 'Decades of steel expertise for demanding industries.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-slate-100 pt-28 pb-16 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_45%)]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div ref={contentRef} className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs tracking-wide uppercase text-slate-700 mb-5 border border-slate-200 shadow-sm">
              Bhairav Steel Industry Partner
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4 max-w-2xl">
              {heroSlides[activeSlide].title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mb-7 max-w-lg leading-relaxed">
              {heroSlides[activeSlide].subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#products" className="btn-primary !py-3 !px-6 text-sm">
                Explore Products
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary !py-3 !px-6 text-sm bg-white/95">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-box-wrap">
            <div className="hero-box-frame">
              {heroSlides.map((slide, index) => (
                <div key={slide.src} className={`hero-box-slide ${index === activeSlide ? 'is-active' : ''}`}>
                  <img src={slide.src} alt={slide.title} className="hero-slide-image w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2.5 mt-8 lg:mt-10">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={`dot-${slide.src}`}
              onClick={() => setActiveSlide(index)}
              className={`hero-dot hero-dot-light ${index === activeSlide ? 'is-active' : ''}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
      function AboutSection() {
        const sectionRef = useRef<HTMLElement>(null);

        useEffect(() => {
          const ctx = gsap.context(() => {
            gsap.fromTo('.about-content',
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: 'top 70%',
                  toggleActions: 'play none none reverse',
                }
              }
            );

            gsap.fromTo('.about-image',
              { opacity: 0, x: 50 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: 'top 60%',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          }, sectionRef);

          return () => ctx.revert();
        }, []);

        const features = [
          'State-of-the-art manufacturing facility',
          'ISO 9001:2015 certified processes',
          'Dedicated R&D team',
          'Global supply chain network',
        ];

        return (
          <section ref={sectionRef} id="about" className="section-padding bg-white relative">
            <div className="blob bg-blue-100 w-64 h-64 top-20 right-0" />
      
            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image */}
                <div className="about-image relative">
                  <div className="rounded-3xl overflow-hidden shadow-xl img-zoom">
                    <img 
                      src="/about_facade.jpg" 
                      alt="Bhairav Steel Facility" 
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-600 rounded-3xl -z-10 hidden lg:block" />
                </div>

                {/* Content */}
                <div className="about-content">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
                  <div className="line-deco mt-4 mb-6" />
            
                  <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
                    Decades of Excellence in Steel Manufacturing
                  </h2>
            
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Founded on principles of precision and quality, Bhairav Steel has evolved 
                    into a leading manufacturer of high-performance steel products. Our journey 
                    from a modest beginning to an industry leader reflects our unwavering 
                    commitment to excellence.
                  </p>
            
                  <p className="text-slate-600 leading-relaxed mb-8">
                    We serve diverse sectors including infrastructure, energy, automotive, 
                    and heavy industry with products that meet the highest international standards.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn-primary">
                    Learn More
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      }

// Products Section
function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      title: 'Steel Plates',
      description: 'High-strength plates for construction and industrial applications',
      image: '/products_stack.jpg',
      specs: 'Thickness: 3mm - 200mm',
    },
    {
      title: 'Steel Bars & Rods',
      description: 'Precision-engineered bars for structural and manufacturing use',
      image: '/capabilities_worker.jpg',
      specs: 'Diameter: 6mm - 100mm',
    },
    {
      title: 'Steel Coils',
      description: 'Hot and cold rolled coils for diverse industrial needs',
      image: '/contact_yard.jpg',
      specs: 'Width: 600mm - 2000mm',
    },
  ];

  return (
    <section ref={sectionRef} id="products" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <div className="line-deco mx-auto mt-4 mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
            Engineered for Every Application
          </h2>
          <p className="text-slate-600 text-lg">
            From standard grades to custom specifications, we deliver steel products 
            that meet your exact requirements with full certification.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card product-card-item">
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-sm font-medium">{product.specs}</span>
                  <a href="#contact" className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            View All Products
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Factory,
      title: 'Custom Manufacturing',
      description: 'Tailored steel products manufactured to your exact specifications and requirements.',
    },
    {
      icon: Shield,
      title: 'Quality Testing',
      description: 'Comprehensive mechanical testing, NDT, and full traceability documentation.',
    },
    {
      icon: Truck,
      title: 'Global Logistics',
      description: 'Multi-modal transportation solutions with documented handling from yard to site.',
    },
    {
      icon: Lightbulb,
      title: 'Technical Consulting',
      description: 'Expert guidance on material selection, specifications, and application optimization.',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-white relative">
      <div className="blob bg-slate-200 w-80 h-80 -bottom-40 -left-40" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <div className="line-deco mx-auto mt-4 mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
            Full-Spectrum Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            From inquiry to delivery, we provide comprehensive services that ensure 
            your project success at every stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card card-hover bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="feature-icon mb-6">
                <service.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Quality Section
function QualitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.quality-content',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo('.quality-image',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management' },
    { name: 'ISO 14001:2015', desc: 'Environmental Management' },
    { name: 'OHSAS 18001', desc: 'Occupational Health & Safety' },
  ];

  return (
    <section ref={sectionRef} id="quality" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="quality-content">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Quality Assurance</span>
            <div className="line-deco mt-4 mb-6" />
            
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
              Tested. Certified. Reliable.
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our commitment to quality is unwavering. Every product undergoes rigorous 
              testing and inspection to ensure it meets the highest industry standards 
              and your specific requirements.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <Award className="text-blue-600 mb-2" size={24} />
                  <div className="font-bold text-slate-900 text-sm">{cert.name}</div>
                  <div className="text-slate-500 text-xs">{cert.desc}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Mechanical testing and analysis',
                'Non-destructive testing (NDT)',
                'Chemical composition verification',
                'Full mill test reports',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">
              View Certifications
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Image */}
          <div className="quality-image relative">
            <div className="rounded-3xl overflow-hidden shadow-xl img-zoom">
              <img 
                src="/quality_lab.jpg" 
                alt="Quality Testing Laboratory" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-2xl p-6 hidden lg:block">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-blue-100 text-sm">Quality Pass Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: TrendingUp, value: '2M+', label: 'Tons Produced' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Clock, value: '24/7', label: 'Support' },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-blue-600">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <stat.icon className="mx-auto text-blue-200 mb-4" size={32} />
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "Bhairav Steel has been our trusted partner for over a decade. Their commitment to quality and on-time delivery is unmatched in the industry.",
      author: "Rajesh Sharma",
      role: "CEO, BuildTech Infrastructure",
    },
    {
      quote: "The technical expertise and support we receive from Bhairav Steel team has been instrumental in the success of our projects.",
      author: "Priya Patel",
      role: "Project Director, Metro Constructions",
    },
    {
      quote: "Exceptional product quality and professional service. Bhairav Steel understands the demands of international markets.",
      author: "Michael Chen",
      role: "Procurement Head, Global Steel Traders",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <div className="line-deco mx-auto mt-4 mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card testimonial-card-item">
              <div className="text-blue-600 text-4xl font-display mb-4">"</div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{testimonial.author[0]}</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo('.contact-form',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sales@bhairavsteel.com' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
    { icon: MapPin, label: 'Address', value: 'Mumbai, Maharashtra, India' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div className="contact-content">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <div className="line-deco mt-4 mb-6" />
            
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Tell us what you need—material, quantity, timeline. Our team will 
              respond within 24 hours with a customized quote.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <info.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">{info.label}</div>
                    <div className="text-slate-900 font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Request a Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  className="form-input h-32 resize-none"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Inquiry
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
    ],
    products: [
      { label: 'Steel Plates', href: '#products' },
      { label: 'Steel Bars', href: '#products' },
      { label: 'Steel Coils', href: '#products' },
      { label: 'Custom Products', href: '#contact' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Quality Certs', href: '#quality' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="footer-logo-badge">
                <img src="/brand-logo.png" alt="Bhairav Steel logo" className="brand-logo-footer" />
              </div>
              <span className="font-display font-bold text-xl">
                Bhairav <span className="text-blue-400">Steel</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Manufacturing high-performance steel products for infrastructure, 
              energy, and heavy industry worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
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

// Main App
function App() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <QualitySection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

