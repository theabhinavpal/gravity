import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';
import { 
  ArrowRight, Star, Menu, X, 
  ChevronRight, Quote, Check, Globe, Zap, 
  Smartphone, Palette, Code, Layout as WorkSection, LineChart, MonitorSmartphone,
  Home, Briefcase, Info, Send, ChevronUp
} from 'lucide-react';
import { SplineSceneBasic } from './components/ui/spline-scene-basic';
import { Testimonials as TwitterTestimonials } from './components/ui/twitter-testimonial-cards';
import AnimatedCardStack from './components/ui/animate-card-animation';
import { InteractiveMenu } from './components/ui/modern-mobile-menu';
import FeaturesCards from './components/ui/feature-shader-cards';
import HoverFooter from './components/ui/hover-footer-demo';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  className: "will-change-transform"
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuItems = [
    { label: 'Home', icon: Home, href: '#home' },
    { label: 'Services', icon: Briefcase, href: '#services' },
    { label: 'Work', icon: WorkSection, href: '#work' },
    { label: 'About', icon: Info, href: '#about' },
    { label: 'Contact', icon: Send, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 pointer-events-none ${isScrolled ? 'bg-dark/80 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl shadow-black/50' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer pointer-events-auto">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-primary/20">
            <Zap size={20} className="text-white fill-white" />
          </div>
          <div className="text-2xl font-black tracking-tighter text-white uppercase">
            Gravity<span className="text-primary">.</span>
          </div>
        </a>

        {/* Navigation Menu */}
        <div className="pointer-events-auto">
          <InteractiveMenu items={menuItems} accentColor="#fc432a" />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-dark min-h-screen flex items-center">
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <SplineSceneBasic />
        </motion.div>
      </div>
    </section>
  );
}

function Brands() {
  const brands = ["ACME CORP", "GLOBALTECH", "NEXUS", "PULSE", "VERTEX"];
  return (
    <section className="py-16 bg-dark border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          {...fadeIn}
          className="text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-8"
        >
          Recent clients & partners
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative flex overflow-hidden"
        >
          <div className="flex items-center gap-20 animate-marquee whitespace-nowrap opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            {[...Array(8)].map((_, i) => (
              <React.Fragment key={i}>
                {brands.map((brand, j) => (
                  <div key={`${i}-${j}`} className="text-2xl font-black tracking-tighter text-white hover:text-primary transition-colors duration-500 cursor-default">
                    {brand.includes('TECH') ? (
                      <>GLOBAL<span className="font-light">TECH</span></>
                    ) : brand}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <motion.div
              variants={fadeIn}
              className="text-primary font-black tracking-widest uppercase mb-4 text-xs"
            >
              Our Story
            </motion.div>
            <motion.h2 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.95] mb-6"
            >
              We are a team of <span className="text-primary italic-emphasis">visionaries</span>.
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-400 font-light max-w-lg mb-10 leading-relaxed"
            >
              Founded on the principle of "Gravity Shift," we help brands pull their audience in through exceptional design and cutting-edge technology. We push digital boundaries to create lasting impact.
            </motion.p>
            
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-white tracking-tighter">150+</span>
                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mt-2">Projects Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-black text-white tracking-tighter">12</span>
                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mt-2">Industry Awards</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative aspect-square will-change-transform"
          >
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-[40px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                loading="lazy"
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-white font-black uppercase tracking-widest text-[10px] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  The Gravity Studio
                </div>
                <div className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
                  Our creative hub in Bangalore, where design meets technology to shift digital gravity.
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 bg-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <motion.div
              variants={fadeIn}
              className="text-primary font-black tracking-widest uppercase mb-4 text-xs"
            >
              Selected Work
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.95] mb-6"
            >
              Crafting <span className="text-primary italic-emphasis">Digital</span> <br /> Masterpieces.
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-400 font-light max-w-lg mb-10 leading-relaxed"
            >
              We push the boundaries of what's possible on the web. Each project is a unique blend of high-end design and cutting-edge technology.
            </motion.p>
            <motion.a 
              href="#"
              variants={fadeIn}
              whileHover={{ x: 10 }}
              className="text-white font-black uppercase tracking-widest flex items-center gap-4 group text-xs"
            >
              Explore Portfolio <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative will-change-transform"
          >
            <AnimatedCardStack />
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={fadeIn}
              className="text-primary font-black tracking-widest uppercase mb-4 text-xs"
            >
              Testimonials
            </motion.div>
            <motion.h2 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.95] mb-6"
            >
              What our <span className="text-primary italic-emphasis">partners</span> say.
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-400 leading-relaxed font-light max-w-lg mb-10"
            >
              We don't just build websites; we build growth engines. Our clients' success is our ultimate metric. See how we've helped businesses across India and beyond shift their digital gravity.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex gap-12"
            >
              <div className="flex flex-col">
                <span className="text-5xl font-black text-white tracking-tighter">98%</span>
                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mt-2">Client Retention</span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-5xl font-black text-white tracking-tighter">50+</span>
                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mt-2">Projects Delivered</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative h-[500px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative z-10 lg:mr-20">
              <TwitterTestimonials />
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <motion.div
              variants={fadeIn}
              className="text-primary font-black tracking-widest uppercase mb-4 text-xs"
            >
              Let's Collaborate
            </motion.div>
            <motion.h2 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.95] mb-6"
            >
              Ready to <span className="text-primary italic-emphasis">Gravity</span> shift?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-400 font-light max-w-lg mb-10 leading-relaxed"
            >
              We're currently accepting new projects. Let's build something extraordinary together. Our team is ready to help you push digital boundaries.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Send className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email us</div>
                  <div className="text-white font-bold">hello@projectgravity.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Globe className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Location</div>
                  <div className="text-white font-bold">Bangalore, India</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-xl relative"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white text-sm resize-none"></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > 500);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-dark min-h-screen selection:bg-primary selection:text-white scroll-smooth">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[55] w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-transform"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Brands />
        <FeaturesCards />
        <Work />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <HoverFooter />
    </div>
  );
}
