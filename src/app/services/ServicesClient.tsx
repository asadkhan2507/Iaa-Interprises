"use client";

import { Building2, Wrench, Paintbrush, Landmark, Factory, Truck, Settings, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

import Image from "next/image";

const services = [
  {
    icon: Building2,
    title: "Construction Services",
    desc: "Complete commercial and industrial construction from foundation to finish for corporate and government clients.",
    benefits: ["Turnkey project delivery", "Certified engineering team", "Quality materials sourcing", "Regulatory compliance"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    accent: "#232A49",
  },
  {
    icon: Wrench,
    title: "Renovation Services",
    desc: "Transform existing spaces with modern renovation solutions — specializing in banks, offices, and government buildings.",
    benefits: ["Minimal operational disruption", "Modern design integration", "Cost-effective solutions", "Timeline adherence"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    accent: "#4C4E64",
  },
  {
    icon: Paintbrush,
    title: "Interior Fitout",
    desc: "Professional interior fitout services for corporate offices, retail spaces, and institutional buildings.",
    benefits: ["Custom design solutions", "Premium finishes", "Ergonomic planning", "Brand-aligned interiors"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    accent: "#DF6D5C",
  },
  {
    icon: Landmark,
    title: "Office Renovation",
    desc: "Specialized office renovation for banks, corporate HQs, and commercial offices across Pakistan.",
    benefits: ["Space optimization", "IT infrastructure integration", "Modern aesthetics", "Safety compliance"],
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    accent: "#232A49",
  },
  {
    icon: Factory,
    title: "Commercial Construction",
    desc: "Large-scale commercial construction for retail chains, industrial facilities, and mixed-use developments.",
    benefits: ["Scalable solutions", "Industrial expertise", "Project management", "Budget optimization"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    accent: "#4C4E64",
  },
  {
    icon: Truck,
    title: "Supply Chain Services",
    desc: "Reliable supply chain management for construction materials, equipment, and specialized resources.",
    benefits: ["Bulk procurement", "Quality assurance", "Timely delivery", "Cost-effective sourcing"],
    image: "https://images.unsplash.com/photo-1580674684081-77625272a731?auto=format&fit=crop&w=1200&q=80",
    accent: "#DF6D5C",
  },
  {
    icon: Settings,
    title: "Maintenance Services",
    desc: "Ongoing maintenance contracts for corporate buildings, banks, and government facilities.",
    benefits: ["Preventive maintenance", "24/7 emergency support", "Annual contracts", "Dedicated teams"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    accent: "#7F8087",
  },
];

const pastProjects = [
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

const processSteps = [
  { num: "01", title: "Consultation", desc: "We meet to understand your project requirements and vision." },
  { num: "02", title: "Planning", desc: "Detailed scope, timeline, and cost estimation prepared." },
  { num: "03", title: "Execution", desc: "Expert teams deliver with precision and quality control." },
  { num: "04", title: "Handover", desc: "Final inspection, documentation, and smooth project handover." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 12, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="pt-20">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Hero */}
      <section className="gradient-hero py-32 relative overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" 
            alt="Corporate Infrastructure Services" 
            fill
            className="w-full h-full object-cover opacity-[0.15] mix-blend-overlay" 
            priority 
            unoptimized
          />
        </div>
        
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: "hsl(8 67% 62%)" }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              End-to-end construction, renovation, and supply chain services for Pakistan&apos;s leading organizations.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground btn-quote text-base animate-pulse-glow"
                >
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+923012088090">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 btn-quote btn-quote-outline"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Portfolio Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="What We Offer"
            title="Our Expertise & Services"
            description="Explore our comprehensive range of corporate services, engineered for excellence and delivered with precision."
          />
          
          <div className="flex flex-col gap-20 mt-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
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
                  <div 
                    className="absolute bottom-6 left-6 w-16 h-16 rounded-2xl backdrop-blur-md flex items-center justify-center shadow-lg"
                    style={{ background: `${svc.accent}40`, border: `1px solid ${svc.accent}80` }}
                  >
                    <svc.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: svc.accent, backgroundColor: `${svc.accent}15` }}>
                    Service 0{i + 1}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">{svc.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {svc.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {svc.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground font-medium bg-card px-4 py-3 rounded-lg border border-border shadow-sm">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: svc.accent }} />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button size="lg" className="gap-2 group shadow-md" style={{ backgroundColor: svc.accent, color: '#fff' }}>
                      Request Consultation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
          <SectionHeading
            label="Previous Work"
            title="Past Projects & Examples"
            description="A showcase of our completed projects demonstrating our commitment to quality, scale, and modern corporate design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {pastProjects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <div className="aspect-[16/10] w-full relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-3 shadow-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading label="How We Work" title="Our Simple 4-Step Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="relative bg-secondary rounded-2xl p-6 card-3d"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-border translate-x-full -translate-y-px z-10" />
                )}
                <div className="text-4xl font-display font-black text-accent/20 mb-3">{step.num}</div>
                <h4 className="font-display font-bold text-foreground text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{ background: "radial-gradient(circle at 50% 50%, hsl(8 67% 62%), transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Contact us today and let&apos;s build something exceptional together.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="tel:+923012088090">
                <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground btn-quote animate-pulse-glow">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="gap-2 btn-quote btn-quote-outline">
                  Request Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
