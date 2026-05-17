"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Building2, Wrench, Truck, Shield, Users, Award, CheckCircle } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";

const clients = [
  { name: "National Bank of Pakistan", logo: "/nbp_logo.png" },
  { name: "PPHI Sindh", logo: "/pphi_logo.png" },
  { name: "Pak Suzuki", logo: "/pak_suzuki_logo.png" },
  { name: "NADRA", logo: "/nadra_logo.png" },
  { name: "UBL", logo: "/ubl_logo.png" },
  { name: "Government of Sindh", logo: "/gov_sindh_logo.png" },
  { name: "Pakistan Navy", logo: "/pakistan_navy_logo.png" },
  { name: "Bank Alfalah", logo: "/bank_alfalah_logo.png" },
];

const heroSlides = [
  {
    //image: "https://i.pinimg.com/564x/29/6d/95/296d959787c450e5b75f28e4781ed64d.jpg",
    image: "Building.jpg",
    category: "Construction · Renovation",
    title: "Building Pakistan's Corporate Future",
    description: "Trusted by National Bank, Pakistan Navy, NADRA, and 50+ major corporations. We deliver excellence in construction, renovation, and supply chain services."
  },
  {
    // image: "https://i.pinimg.com/564x/29/6d/95/296d959787c450e5b75f28e4781ed64d.jpg",
    image: "workspace.jpg",
    category: "Corporate Renovations",
    title: "Transforming Workspaces",
    description: "Modern, efficient, and inspiring office environments tailored to your corporate identity and operational needs."
  },
  {
    image: "material.jpg",
    //image: "https://images.unsplash.com/photo-1580674684081-77625272a731?auto=format&fit=crop&w=1920&q=80",
    category: "Supply Chain Solutions",
    title: "Reliable Material Supply",
    description: "Ensuring timely delivery of premium construction materials and equipment across Pakistan for uninterrupted progress."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    category: "Architectural Excellence",
    title: "Designing the Future",
    description: "Innovative architectural designs that combine aesthetics with functionality for sustainable corporate infrastructure."
  }
];

const servicesData = [
  {
    id: "construction",
    title: "Corporate Construction",
    description: "End-to-end commercial construction with a focus on modern corporate standards. We manage everything from foundation to finishing, ensuring structural integrity and architectural brilliance.",
    features: ["Commercial Buildings", "Industrial Facilities", "Corporate Offices", "Infrastructure Projects"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    icon: Building2
  },
  {
    id: "renovation",
    title: "Premium Renovation",
    description: "Transforming existing spaces into state-of-the-art corporate environments. We specialize in bank branches, corporate headquarters, and high-end commercial spaces.",
    features: ["Bank Branches", "Office Interiors", "Facade Upgrades", "Turnkey Solutions"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: Wrench
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics",
    description: "Reliable and efficient supply of premium construction materials, mechanical equipment, and logistical support for mega-projects across Pakistan.",
    features: ["Construction Materials", "Heavy Machinery", "Logistics Planning", "Project Supply Management"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    icon: Truck
  }
];

const featuredProjects = [
  {
    title: "National Bank of Pakistan",
    category: "Renovation",
    description: "Complete interior and structural renovation of multiple flagship branches across the region.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pakistan Navy Facility",
    category: "Construction",
    description: "Development of advanced training and residential infrastructure adhering to strict military standards.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pak Suzuki Assembly Unit",
    category: "Supply Chain & Infrastructure",
    description: "Material supply and logistical support for the expansion of manufacturing facilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "NADRA Regional Center",
    category: "Turnkey Renovation",
    description: "Fast-track execution of public-facing operational centers designed for high footfall efficiency.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  }
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Corporate Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

const whyUs = [
  { icon: Shield, title: "Trusted by Government", desc: "Proven track record with government and military institutions." },
  { icon: Users, title: "Corporate Expertise", desc: "Specialized in corporate and institutional projects across Pakistan." },
  { icon: Award, title: "Quality Assurance", desc: "Highest standards of quality in materials and workmanship." },
  { icon: CheckCircle, title: "On-Time Delivery", desc: "Reliable project timelines with efficient execution." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn3D = {
  hidden: { opacity: 0, y: 50, rotateX: 12, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((t, delta) => {
    // Speed: 0.002% per ms is ~ 25s for 50%.
    // Slows down to 0.0005% per ms on hover.
    const speed = isCarouselHovered ? 0.0005 : 0.002;
    let moveBy = speed * delta;
    let newX = baseX.get() - moveBy;
    // We duplicate the list twice, so 1 set is 50% of the total width.
    if (newX <= -50) {
      newX += 50;
    }
    baseX.set(newX);
  });

  return (
    <main>
      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center gradient-hero overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Dark overlay ensuring text readability */}
            <div className="absolute inset-0 bg-[#0F172A]/70 z-10" />
          </motion.div>
        </AnimatePresence>

        {/* 3D floating background shapes */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-5 pointer-events-none"
          style={{ background: "hsl(8 67% 62%)" }}
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5 pointer-events-none"
          style={{ background: "hsl(8 67% 62%)" }}
          animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="relative container mx-auto px-4 py-32 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block font-semibold text-sm tracking-widest uppercase mb-4"
              >
                <span className="text-accent">{heroSlides[currentSlide].category.split('·')[0]}</span>
                {heroSlides[currentSlide].category.includes('·') && (
                  <>
                    <span className="text-white"> · </span>
                    <span className="text-accent">{heroSlides[currentSlide].category.split('·')[1]}</span>
                  </>
                )}
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 font-body">
                {heroSlides[currentSlide].description}
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a href="tel:+923012088090">
                  <Button size="lg" className="gap-2 text-base bg-accent hover:bg-accent/90 text-accent-foreground btn-quote">
                    <Phone className="w-5 h-5" /> Call Now
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="gap-2 text-base btn-quote btn-quote-outline">
                    Request Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats
      <section className="bg-accent py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-foreground">{s.value}</div>
                <div className="text-sm text-accent-foreground/70 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Clients Carousel */}
      <section className="py-20 bg-card overflow-hidden">
        <div className="container mx-auto px-4 mb-10">
          <SectionHeading label="Our Clients" title="Trusted by Pakistan's Leading Organizations" />
        </div>

        <div
          className="relative w-full flex overflow-hidden group cursor-default"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 px-4"
            style={{ x }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="w-[240px] flex-shrink-0 border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm bg-white group/card"
              >
                <div className="w-full h-16 flex items-center justify-center relative">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover/card:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400">
                      Logo
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium text-muted-foreground text-center leading-snug">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise & Services (Portfolio Style) */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-3 block">Expertise & Services</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Comprehensive Solutions for Corporate Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don&apos;t just build structures; we craft corporate identities. Our end-to-end services are designed to meet the rigorous standards of Pakistan&apos;s leading organizations.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {servicesData.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-elevated">
                  <div className="aspect-[4/3] w-full relative">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  </div>
                  <div className="absolute bottom-6 left-6 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <svc.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4">{svc.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {svc.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {svc.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services#${svc.id}`}>
                    <Button variant="outline" className="gap-2 group">
                      Explore Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Portfolio */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <SectionHeading
                label="Our Portfolio"
                title="Featured Past Work"
                description="Explore a selection of our successful projects delivered for government departments, banks, and major corporations."
              />
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="text-accent hover:text-accent/80 gap-2 font-medium hidden md:flex">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[16/10] w-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-3 backdrop-blur-md">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/projects">
              <Button variant="outline" className="gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-accent">About Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                Karachi&apos;s Trusted Corporate Contractor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 15 years of experience, IAA Enterprises has established itself as a leading construction, renovation, and supply chain company in Pakistan. We specialize in serving corporate companies, banks, government departments, and military institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From the National Bank of Pakistan to Pak Suzuki, from PPHI Sindh to Pakistan Navy — our portfolio reflects the trust that Pakistan&apos;s biggest organizations place in us.
              </p>
              <Link href="/about">
                <Button size="lg" className="gap-2 btn-quote bg-accent hover:bg-accent/90 text-accent-foreground">
                  Learn More About Us <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn3D}
                  className="bg-secondary rounded-xl p-6 card-3d"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Get in touch with our team for a free consultation and project estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+923012088090">
                <Button size="lg" className="gap-2 text-base bg-accent hover:bg-accent/90 text-accent-foreground btn-quote">
                  <Phone className="w-5 h-5" /> Call +92 301 2088090
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="gap-2 text-base btn-quote btn-quote-outline">
                  Request a Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              label="Get In Touch"
              title="Request a Project Quote"
              description="Fill out the form below and our team will get back to you within 24 hours."
            />
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
