import { motion } from "motion/react";

export default function Platform() {
  return (
    <div className="min-h-screen bg-paper pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-ink mb-6"
          >
            The Platform that thinks with you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate mb-8 max-w-2xl mx-auto"
          >
            More than storing contacts: our Platform uses Artificial
            Intelligence to identify opportunities, automate conversations, and
            help you close deals faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <a
              href="/consultation"
              className="bg-ink text-white px-6 py-3 rounded-full text-base font-medium shadow-soft hover:shadow-glow transition-all duration-300 inline-block relative overflow-hidden group"
            >
              Activate with AI
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-ion rounded-full shadow-glow animate-pulse"></span>
            </a>
          </motion.div>
        </motion.div>

        {/* Smart Contacts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary"
        >
          <h2 className="text-2xl font-semibold text-ink mb-4">
            Smart Contacts
          </h2>
          <ul className="text-slate space-y-2 mb-4">
            <li>• All your leads and customers in one place.</li>
            <li>
              • AI enriches each profile with context and relevant insights.
            </li>
            <li>• Full interaction history at your fingertips.</li>
          </ul>
          <p className="text-ink font-medium">
            A Platform that understands your customers.
          </p>
        </motion.div>

        {/* AI Lead Scoring Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary"
        >
          <h2 className="text-2xl font-semibold text-ink mb-4">
            AI Lead Scoring
          </h2>
          <ul className="text-slate space-y-2 mb-4">
            <li>• Predict which leads are most likely to convert.</li>
            <li>• Smart recommendations on who to contact first.</li>
            <li>• Less wasted time, more closed deals.</li>
          </ul>
          <p className="text-ink font-medium">
            AI tells you where the opportunity is.
          </p>
        </motion.div>

        {/* Automated Conversations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary"
        >
          <h2 className="text-2xl font-semibold text-ink mb-4">
            Automated Conversations
          </h2>
          <ul className="text-slate space-y-2 mb-4">
            <li>
              • Voice and text bots that call, reply, and confirm appointments.
            </li>
            <li>• WhatsApp, SMS, email, and calls managed by AI.</li>
            <li>• Human-like conversations that run 24/7.</li>
          </ul>
          <p className="text-ink font-medium">
            Your team, powered by AI around the clock.
          </p>
        </motion.div>

        {/* Real-Time Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary"
        >
          <h2 className="text-2xl font-semibold text-ink mb-4">
            Real-Time Insights
          </h2>
          <ul className="text-slate space-y-2 mb-4">
            <li>• Clear dashboards: conversions, response times, ROI.</li>
            <li>• AI detects patterns and suggests improvements.</li>
            <li>• Decisions driven by data, not guesswork.</li>
          </ul>
          <p className="text-ink font-medium">AI turns data into action.</p>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-xl text-slate mb-8 max-w-2xl mx-auto"
          >
            Let your Platform work on its own, while you focus on growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <a
              href="/consultation"
              className="bg-ink text-white px-6 py-3 rounded-full text-base font-medium shadow-soft hover:shadow-glow transition-all duration-300 inline-block relative overflow-hidden group"
            >
              Try the AI Platform
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-ion rounded-full shadow-glow animate-pulse"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
