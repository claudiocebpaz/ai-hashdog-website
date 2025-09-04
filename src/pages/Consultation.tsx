import { useEffect } from "react";
import { motion } from "motion/react";

export default function Consultation() {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.head.removeChild(script);
    };
  }, []);

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
          AI Transformation Consultation
        </motion.h1>

        <div className="prose prose-lg text-slate">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8"
          >
            Ready to integrate AI across your entire enterprise? Let's discuss
            how we can transform your business operations with artificial
            intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-porcelain p-6 rounded-xl shadow-soft"
            >
              <h2 className="text-2xl font-semibold text-ink mb-4">
                What to Expect
              </h2>
              <ul className="space-y-3">
                <li>✓ Comprehensive business assessment</li>
                <li>✓ AI implementation roadmap</li>
                <li>✓ Customized solution design</li>
                <li>✓ No-obligation transformation plan</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-porcelain p-8 rounded-xl shadow-soft"
          >
            <h2 className="text-2xl font-semibold text-ink mb-6 text-center">
              Schedule Your AI Discovery Call
            </h2>

            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hashdog/ai-discovery"
              style={{
                minWidth: "320px",
                height: "1000px",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-sm text-slate"
          >
            <p>
              Have questions? Email us at{" "}
              <a
                href="mailto:hello@yourcompany.com"
                className="text-ink hover:underline"
              >
                hello@yourcompany.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
