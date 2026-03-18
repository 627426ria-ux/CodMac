import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight, Calendar, Tag, Zap, Award, TrendingUp } from 'lucide-react';
import ParticleField from '@/components/cinematic/ParticleField';
import Navigation from '@/components/layout/Navigation';

const projects = [
  {
    id: 1,
    title: "Emirco DXB",
    category: "Document Clearance Services — UAE",
    longDescription: "Custom-coded WordPress website built from scratch for a UAE document clearance company. Features an animated services menu with 6 categories, interactive FAQ accordion, testimonials from clients across Dubai, London and Riyadh, and a bento-style stats grid. Fully optimised for speed and Google ranking.",
    image: "/Screenshot 2026-02-20 at 7.06.26 PM.png",
    technologies: ["WordPress", "Custom PHP", "Tailwind CSS", "JavaScript", "SEO"],
    metrics: [
      { label: "Performance", value: "94+", icon: Zap },
      { label: "SEO Score", value: "97", icon: TrendingUp },
      { label: "Accessibility", value: "100", icon: Award }
    ],
    features: [
      "Animated services menu with 6 interactive categories",
      "Bento grid stats — 08+ years, 360° services, 100% compliant",
      "International testimonials — Dubai, London, Riyadh",
      "Custom FAQ accordion with smooth transitions",
      "Fully mobile optimised and SEO ready"
    ],
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "hsl(200 80% 55% / 0.4)",
    link: "https://www.emircodxb.com",
    date: "2025",
    status: "Live Production"
  },
  {
    id: 2,
    title: "Mavex Mentr",
    category: "Business Mentorship Platform",
    longDescription: "Built with Next.js and Sanity CMS for a business mentorship brand. Features server-side rendering for lightning-fast page loads, a dynamic blog powered by Sanity's headless CMS, animated hero sections, and a clean professional design system. Content managers can update every page without touching code.",
    image: "/Screenshot 2026-02-20 at 6.58.54 PM.png",
    technologies: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Performance", value: "98+", icon: Zap },
      { label: "SEO Score", value: "99", icon: TrendingUp },
      { label: "Accessibility", value: "100", icon: Award }
    ],
    features: [
      "Next.js SSR for sub-second page loads",
      "Sanity CMS — full content control without code",
      "Dynamic blog and resource library",
      "Animated hero and feature sections",
      "TypeScript for bulletproof reliability"
    ],
    gradient: "from-violet-500 to-purple-600",
    glowColor: "hsl(270 80% 55% / 0.4)",
    link: "https://www.mavexmentr.com",
    date: "2025",
    status: "Live Production"
  },
  {
    id: 3,
    title: "Loom Abayas",
    category: "Modest Fashion — Shopify",
    longDescription: "Fully custom coded Shopify theme for a modest fashion brand. Built from scratch with a luxury editorial aesthetic, custom product filtering, size guide integration, and a seamless checkout experience. Optimised for international customers with multi-currency support and fast loading on mobile.",
    image: "/Screenshot 2026-02-08 at 3.07.11 AM.png",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Klaviyo"],
    metrics: [
      { label: "Performance", value: "93+", icon: Zap },
      { label: "Conversion", value: "High", icon: TrendingUp },
      { label: "Mobile", value: "100", icon: Award }
    ],
    features: [
      "Fully custom Shopify Liquid theme",
      "Advanced product filtering by size, colour, style",
      "Luxury editorial product page design",
      "Multi-currency for international buyers",
      "Mobile-first — 80% of traffic is mobile"
    ],
    gradient: "from-rose-400 to-pink-600",
    glowColor: "hsl(340 80% 55% / 0.4)",
    link: "https://www.loomabayas.com",
    date: "2025",
    status: "Live Production"
  },
  {
    id: 4,
    title: "Spoon Creations",
    category: "Food & Catering Brand",
    longDescription: "Clean and warm website for a catering and food brand. Designed to showcase menus, build trust with photography, and convert visitors into enquiries. Features a prominent booking CTA, menu showcase, and social media integration. Built for speed and simplicity so the food takes centre stage.",
    image: "/Screenshot 2026-02-20 at 7.06.55 PM.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    metrics: [
      { label: "Performance", value: "96+", icon: Zap },
      { label: "SEO Score", value: "95", icon: TrendingUp },
      { label: "Accessibility", value: "98", icon: Award }
    ],
    features: [
      "Warm editorial design — food takes centre stage",
      "Menu showcase with category filtering",
      "Booking and enquiry CTA throughout",
      "Instagram feed integration",
      "Fully responsive across all devices"
    ],
    gradient: "from-orange-400 to-amber-500",
    glowColor: "hsl(30 80% 55% / 0.4)",
    link: "https://www.spooncreations.com",
    date: "2025",
    status: "Live Production"
  },
  {
    id: 5,
    title: "Golden Spark Cafe",
    category: "Cafe & Restaurant",
    longDescription: "Elegant website for Golden Spark Cafe built to turn online visitors into walk-in customers. Features an interactive menu, table reservation system, Google Maps integration, and a warm premium aesthetic. Fully optimised for local SEO so customers nearby can find them on Google.",
    image: "/Screenshot 2026-02-20 at 7.10.25 PM.png",
    technologies: ["WordPress", "Custom CSS", "JavaScript", "Local SEO"],
    metrics: [
      { label: "Performance", value: "92+", icon: Zap },
      { label: "Local SEO", value: "Top 3", icon: TrendingUp },
      { label: "Mobile", value: "100", icon: Award }
    ],
    features: [
      "Interactive digital menu with categories",
      "Table reservation system",
      "Google Maps and directions integration",
      "Local SEO optimised — ranks for nearby searches",
      "Fast loading on all mobile networks"
    ],
    gradient: "from-yellow-400 to-orange-500",
    glowColor: "hsl(45 80% 55% / 0.4)",
    link: "https://www.goldensparkcafe.com",
    date: "2025",
    status: "Live Production"
  },
  {
    id: 6,
    title: "Shells & Scales Exports",
    category: "Seafood Export Business",
    longDescription: "Built with modern web technologies for optimal performance and stunning visual experiences. Features real-time inventory management, automated email notifications, and a fully responsive design. Designed to build trust with international buyers from the first visit.",
    image: "/logo-512.jpeg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Performance", value: "95+", icon: Zap },
      { label: "SEO Score", value: "98", icon: TrendingUp },
      { label: "Accessibility", value: "100", icon: Award }
    ],
    features: [
      "Product catalog with advanced filtering",
      "Real-time inventory management",
      "Automated email notifications",
      "International buyer trust signals",
      "Fully responsive across all devices"
    ],
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "hsl(180 80% 55% / 0.4)",
    link: "https://www.shellsandscalesexports.in",
    date: "2025",
    status: "Live Production"
  }
];

// Extracted to fix React hooks-in-loop violation
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });
  const cardY = useTransform(cardProgress, [0, 0.5], [60, 0]);
  const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ y: cardY, opacity: cardOpacity }}
      className="mb-20 sm:mb-28 lg:mb-36"
    >
      {/* Header */}
      <div className="mb-6 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-3"
        >
          <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
            {project.status}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gradient glow-text leading-tight"
        >
          {project.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground"
        >
          {project.category}
        </motion.p>
      </div>

      {/* Body — single column on mobile, two columns on desktop */}
      <div className={`
        flex flex-col gap-6
        lg:grid lg:grid-cols-2 lg:gap-10
        ${!isEven ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}
      `}>

        {/* Left — Image + Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {/* Screenshot */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden glass-morphism neon-border group cursor-pointer cinematic-shadow"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${project.glowColor}, transparent)` }}
            />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="glass-morphism neon-border rounded-full p-3 sm:p-4"
              >
                <ExternalLink className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {project.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="glass-morphism neon-border rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-center"
              >
                <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 text-primary" />
                <div className="text-base sm:text-xl font-bold text-gradient leading-none mb-0.5 sm:mb-1">
                  {metric.value}
                </div>
                <div className="text-[9px] sm:text-xs text-muted-foreground leading-tight">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 sm:space-y-5"
        >
          <div className="glass-morphism neon-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-3 text-gradient">Overview</h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-5 text-muted-foreground">
              {project.longDescription}
            </p>

            {/* Tech tags */}
            <div className="mb-4 sm:mb-5">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <h4 className="text-[11px] sm:text-sm font-semibold">Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold glass-morphism neon-border cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-[11px] sm:text-sm font-semibold mb-2">Key Features</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {project.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-[11px] sm:text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-primary" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-gray-900 font-semibold text-sm sm:text-base lg:text-lg group relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Live Site
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.a>
        </motion.div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.96]);

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <ParticleField />

      <div ref={containerRef} className="relative">

        {/* Hero */}
        <motion.section
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="relative pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-morphism neon-border text-[11px] sm:text-sm tracking-wider">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0"
                />
                OUR PORTFOLIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-5 glow-text leading-tight"
            >
              <span className="text-gradient">Crafted</span>
              <br />
              <span className="text-gradient">Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-sm sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto px-2"
            >
              Every pixel, every interaction, every moment designed to inspire and perform
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex items-center justify-center gap-5 sm:gap-10 mt-6 sm:mt-10"
            >
              {[
                { value: "6+", label: "Projects Delivered" },
                { value: "", label: "UAE & Global" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects */}
        <section className="relative py-8 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-gradient glow-text leading-tight">
                Let's Build Something Amazing
              </h2>
              <p className="text-sm sm:text-lg md:text-xl mb-7 sm:mb-10 text-muted-foreground px-2">
                Ready to bring your vision to life with cutting-edge technology?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-gray-900 font-semibold text-sm sm:text-lg group relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Projects;