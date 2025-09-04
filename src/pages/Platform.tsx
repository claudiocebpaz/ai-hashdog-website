export default function Platform() {
  return (
    <div className="min-h-screen bg-paper pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ink mb-6">
            The Platform that thinks with you.
          </h1>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            More than storing contacts: our Platform uses Artificial
            Intelligence to identify opportunities, automate conversations, and
            help you close deals faster.
          </p>
          <a
            href="/consultation"
            className="bg-ink text-white px-6 py-3 rounded-full text-base font-medium shadow-soft hover:shadow-glow transition-all duration-300 inline-block relative overflow-hidden group"
          >
            Activate with AI
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-ion rounded-full shadow-glow animate-pulse"></span>
          </a>
        </div>

        {/* Smart Contacts Section */}
        <div className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary">
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
        </div>

        {/* AI Lead Scoring Section */}
        <div className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary">
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
        </div>

        {/* Automated Conversations Section */}
        <div className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary">
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
        </div>

        {/* Real-Time Insights Section */}
        <div className="bg-porcelain p-8 rounded-xl2 shadow-soft mb-12 border border-brand-primary">
          <h2 className="text-2xl font-semibold text-ink mb-4">
            Real-Time Insights
          </h2>
          <ul className="text-slate space-y-2 mb-4">
            <li>• Clear dashboards: conversions, response times, ROI.</li>
            <li>• AI detects patterns and suggests improvements.</li>
            <li>• Decisions driven by data, not guesswork.</li>
          </ul>
          <p className="text-ink font-medium">AI turns data into action.</p>
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            Let your Platform work on its own, while you focus on growth.
          </p>
          <a
            href="/consultation"
            className="bg-ink text-white px-6 py-3 rounded-full text-base font-medium shadow-soft hover:shadow-glow transition-all duration-300 inline-block relative overflow-hidden group"
          >
            Try the AI Platform
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-ion rounded-full shadow-glow animate-pulse"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
