'use client'

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SplineScene } from "./splite";
import { Card } from "./card"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { staggerChildren: 0.15 }
};
 
export function SplineSceneBasic() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Card className="w-full min-h-[500px] md:h-[700px] bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden border-white/10 shadow-2xl">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!isMobile ? (
          <div className="absolute h-full w-[200%] left-[-60%] md:left-[-40%] lg:left-[-30%]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black/0 opacity-30"></div>
        )}
      </div>

      <div className="relative z-10 flex h-full flex-col md:flex-row pointer-events-none">
        {/* Left content */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex-1 p-8 md:p-12 flex flex-col justify-center -translate-y-6 will-change-transform"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-5xl sm:text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 uppercase tracking-tighter leading-none"
          >
            Digital <span className="text-primary italic-emphasis">Gravity</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="mt-6 md:mt-8 text-neutral-400 max-w-xl text-lg md:text-xl font-light leading-relaxed"
          >
            We build high-performance digital experiences that defy expectations. 
            Our boutique agency crafts the future of the web with precision and passion.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="mt-8 md:mt-10 flex flex-wrap gap-4 pointer-events-auto"
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(252, 67, 42, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300"
            >
              Start Project
            </motion.a>
            <motion.a 
              href="#work" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300"
            >
              View Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right content - empty space for robot tracking */}
        <div className="flex-1 relative hidden md:block min-h-[500px]">
        </div>
      </div>
    </Card>
  )
}
