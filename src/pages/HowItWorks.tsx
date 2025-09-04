export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-paper pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-ink mb-8">
          How We Implement AI
        </h1>

        <div className="prose prose-lg text-slate">
          <p className="text-xl mb-8">
            Our comprehensive process integrates artificial intelligence across
            your entire organization, transforming operations and driving
            innovation.
          </p>

          <div className="space-y-8">
            <div className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary">
              <h2 className="text-2xl font-semibold text-ink mb-4">
                1. Strategic Assessment
              </h2>
              <p>
                We conduct a thorough analysis of your business processes, data
                infrastructure, and organizational readiness to identify the
                most impactful AI opportunities.
              </p>
            </div>

            <div className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary">
              <h2 className="text-2xl font-semibold text-ink mb-4">
                2. AI Solution Design
              </h2>
              <p>
                Our experts design tailored AI solutions that address your
                specific business challenges, from predictive analytics to
                intelligent automation and decision support systems.
              </p>
            </div>

            <div className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary">
              <h2 className="text-2xl font-semibold text-ink mb-4">
                3. Enterprise Integration
              </h2>
              <p>
                We seamlessly integrate AI capabilities across your
                organization, ensuring compatibility with existing systems and
                minimal disruption to operations.
              </p>
            </div>

            <div className="bg-porcelain p-6 rounded-xl shadow-soft border border-brand-primary">
              <h2 className="text-2xl font-semibold text-ink mb-4">
                4. Continuous Optimization
              </h2>
              <p>
                Ongoing monitoring, model refinement, and performance
                optimization ensure your AI systems evolve with your business
                needs and deliver sustained value.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/consultation"
              className="bg-ink text-white px-6 py-3 rounded-full text-base font-medium shadow-soft hover:shadow-glow transition-all duration-300 inline-block"
            >
              Start Your AI Transformation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
