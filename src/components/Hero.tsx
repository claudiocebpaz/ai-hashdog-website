import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-porcelain flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-ink tracking-tight mb-6"
        >
          Clarity. Confidence. Growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AI that turns uncertainty into clarity—and decisions into results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative inline-block"
        >
          <a
            href="/consultation"
            className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-soft hover:shadow-glow transition-all duration-300 relative overflow-hidden group inline-block"
          >
            Explore Our Platform
            <span className="absolute top-2 right-2 w-2 h-2 bg-ion rounded-full shadow-glow animate-pulse"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
