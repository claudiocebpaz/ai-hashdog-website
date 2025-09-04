import { useEffect } from "react";

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
        <h1 className="text-4xl font-bold text-ink mb-8">
          AI Transformation Consultation
        </h1>

        <div className="prose prose-lg text-slate">
          <p className="text-xl mb-8">
            Ready to integrate AI across your entire enterprise? Let's discuss
            how we can transform your business operations with artificial
            intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-porcelain p-6 rounded-xl shadow-soft">
              <h2 className="text-2xl font-semibold text-ink mb-4">
                What to Expect
              </h2>
              <ul className="space-y-3">
                <li>✓ Comprehensive business assessment</li>
                <li>✓ AI implementation roadmap</li>
                <li>✓ Customized solution design</li>
                <li>✓ No-obligation transformation plan</li>
              </ul>
            </div>

            <div className="bg-porcelain p-6 rounded-xl shadow-soft">
              <h2 className="text-2xl font-semibold text-ink mb-4">
                Our Expertise
              </h2>
              <ul className="space-y-3">
                <li>✓ Enterprise AI integration</li>
                <li>✓ Predictive analytics systems</li>
                <li>✓ Intelligent process automation</li>
                <li>✓ AI-driven decision support</li>
              </ul>
            </div>
          </div>

          <div className="bg-porcelain p-8 rounded-xl shadow-soft">
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
          </div>

          <div className="mt-12 text-center text-sm text-slate">
            <p>
              Have questions? Email us at{" "}
              <a
                href="mailto:hello@yourcompany.com"
                className="text-ink hover:underline"
              >
                hello@yourcompany.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
