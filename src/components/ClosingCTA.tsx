import { motion } from "motion/react";

export default function ClosingCTA() {
  return (
    <section className="py-24 px-6 bg-porcelain">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-ink mb-6"
        >
          Decide with confidence.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-slate mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          AI, applied with clarity and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <a
            href="/consultation"
            className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-soft hover:shadow-glow transition-all duration-300 relative overflow-hidden group inline-block"
          >
            Book Your Private Consultation
            <span className="absolute top-2 right-2 w-2 h-2 bg-ion rounded-full shadow-glow animate-pulse"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
