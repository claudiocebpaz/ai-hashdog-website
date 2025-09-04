import { motion } from "motion/react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-paper pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-ink mb-8"
        >
          How We Implement AI
        </motion.h1>

        <div className="prose prose-lg text-slate">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8"
          >
            Our comprehensive process integrates artificial intelligence across
            your entire organization, transforming operations and driving
            innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary"
            >
              <h2 className="text-2xl font-semibold text-ink mb-4">
                1. Strategic Assessment
              </h2>
              <p>
                We conduct a thorough analysis of your business processes, data
                infrastructure, and organizational readiness to identify the
                most impactful AI opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary"
            >
              <h2 className="text-2xl font-semibold text-ink mb-4">
                2. AI Solution Design
              </h2>
              <p>
                Our experts design tailored AI solutions that address your
                specific business challenges, from predictive analytics to
                intelligent automation and decision support systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary"
            >
              <h2 className="text-2xl font-semibold text-ink mb-4">
                3. Enterprise Integration
              </h2>
              <p>
                We seamlessly integrate AI capabilities across your
                organization, ensuring compatibility with existing systems and
                minimal disruption to operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary"
            >
              <h2 className="text-2xl font-semibold text-ink mb-4">
                4. Continuous Optimization
              </h2>
              <p>
                Ongoing monitoring, model refinement, and performance
                optimization ensure your AI systems evolve with your business
                needs and deliver sustained value.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="/consultation"
              className="bg-ink text-white px-6 py-3 rounded-full text-base font-medium shadow-soft hover:shadow-glow transition-all duration-300 inline-block relative overflow-hidden group"
            >
              Start Your AI Transformation
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-ion rounded-full shadow-glow animate-pulse"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
