"use client"

import React, { useState, useEffect } from "react"
import { motion } from "motion/react"
import { 
  Palette, 
  Zap, 
  Code, 
  Settings, 
  Smartphone, 
  MonitorSmartphone,
  ArrowRight
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Elegant Design",
    description:
      "Beautiful shader effects that enhance your content without overwhelming it. Perfect for modern web experiences.",
    icon: <Palette className="w-12 h-12 text-white" />,
  },
  {
    title: "High Performance",
    description: "Optimized WebGL shaders that run smoothly on all devices while maintaining stunning visual quality.",
    icon: <Zap className="w-12 h-12 text-white" />,
  },
  {
    title: "Easy Integration",
    description: "Simple React components that can be dropped into any project with minimal configuration required.",
    icon: <Code className="w-12 h-12 text-white" />,
  },
  {
    title: "Customizable",
    description: "Extensive customization options to match your brand colors, animations, and visual style perfectly.",
    icon: <Settings className="w-12 h-12 text-white" />,
  },
  {
    title: "Responsive",
    description: "Fully responsive design that looks great on desktop, tablet, and mobile devices of all sizes.",
    icon: <Smartphone className="w-12 h-12 text-white" />,
  },
  {
    title: "Modern Tech",
    description: "Built with the latest web technologies including WebGL, React, and TypeScript for reliability.",
    icon: <MonitorSmartphone className="w-12 h-12 text-white" />,
  },
]

export default function FeaturesCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getGradientConfig = (index: number) => {
    const configs = [
      "from-[hsl(280,100%,30%)] to-[hsl(320,100%,60%)]",
      "from-[hsl(200,100%,25%)] to-[hsl(180,100%,65%)]",
      "from-[hsl(120,100%,25%)] to-[hsl(140,100%,60%)]",
      "from-[hsl(30,100%,35%)] to-[hsl(50,100%,65%)]",
      "from-[hsl(250,100%,30%)] to-[hsl(270,100%,65%)]",
      "from-[hsl(330,100%,30%)] to-[hsl(350,100%,60%)]",
    ]
    return configs[index % configs.length]
  }

  return (
    <section id="services" className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Text Area - Top Left (Outside Grid) */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 max-w-3xl"
        >
          <motion.div 
            variants={fadeIn}
            className="text-primary font-black tracking-widest uppercase mb-4 text-xs"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6"
          >
            <span className="text-primary italic-emphasis">Digital</span> experiences that defy expectations.
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl"
          >
            We combine cutting-edge design with high-performance code to deliver outstanding digital results.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const gradientClass = getGradientConfig(index)
            return (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="relative h-[360px] group will-change-transform"
              >
                <div className={`absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br ${gradientClass} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}>
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/85 border border-white/10 group-hover:border-primary/50 group-hover:bg-black/70 transition-all duration-500 glass-hover">
                  <div className="mb-6 filter drop-shadow-[0_0_15px_rgba(252,67,42,0.3)] group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>

                  <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>

                  <p className="leading-relaxed flex-grow text-neutral-300 font-medium text-sm">{feature.description}</p>

                  <div className="mt-6 flex items-center text-[10px] font-black text-white group-hover:text-primary transition-colors">
                    <span className="mr-2 uppercase tracking-[0.2em]">Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
