import { motion } from "motion/react";

const bentoItems = [
  {
    title: "Clarity & Growth",
    description:
      "Transform uncertainty into clear, actionable insights with AI-powered decision support.",
    image: "/images/clarify.webp",
    link: "/consultation",
  },
  {
    title: "More Human Relationships",
    description:
      "Build deeper connections and more authentic interactions through AI-enhanced communication.",
    image: "/images/relationships.webp",
    link: "/consultation",
  },
  {
    title: "Empowered People",
    description:
      "Equip your team with AI tools that amplify their capabilities and accelerate growth.",
    image: "/images/team.webp",
    link: "/consultation",
  },
  {
    title: "Future-Proof Growth",
    description:
      "Stay ahead of market shifts with predictive analytics and strategic AI guidance.",
    image: "/images/future.webp",
    link: "/consultation",
  },
  {
    title: "Confident AI Adoption",
    description:
      "Adopt AI with clarity and trust — guided, seamless, and always aligned with your business goals.",
    image: "/images/ai-adoption.webp",
    link: "/consultation",
  },
];

export default function Bento() {
  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-base/7 font-semibold text-brand-primary"
        >
          How We Deliver Results
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl"
        >
          Everything you need to deploy AI with impact
        </motion.p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* First item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative lg:col-span-3"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-900" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="h-80 relative overflow-hidden">
                <img
                  src={bentoItems[0].image}
                  alt={bentoItems[0].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback =
                      target.nextElementSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 hidden items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    Image: {bentoItems[0].title}
                  </span>
                </div>
              </div>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-brand-primary">
                  Performance
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-white">
                  {bentoItems[0].title}
                </p>
                <p className="mt-2 max-w-lg text-base/6 text-gray-400">
                  {bentoItems[0].description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15" />
          </motion.div>

          {/* Second item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative lg:col-span-3"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="h-80 relative overflow-hidden">
                <img
                  src={bentoItems[1].image}
                  alt={bentoItems[1].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback =
                      target.nextElementSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 hidden items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    Image: {bentoItems[1].title}
                  </span>
                </div>
              </div>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-brand-primary">
                  Releases
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-white">
                  {bentoItems[1].title}
                </p>
                <p className="mt-2 max-w-lg text-base/6 text-gray-400">
                  {bentoItems[1].description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15" />
          </motion.div>

          {/* Third item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative lg:col-span-2"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="h-80 relative overflow-hidden">
                <img
                  src={bentoItems[2].image}
                  alt={bentoItems[2].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback =
                      target.nextElementSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 hidden items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    Image: {bentoItems[2].title}
                  </span>
                </div>
              </div>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-brand-primary">
                  Speed
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-white">
                  {bentoItems[2].title}
                </p>
                <p className="mt-2 max-w-lg text-base/6 text-gray-400">
                  {bentoItems[2].description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15" />
          </motion.div>

          {/* Fourth item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative lg:col-span-2"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="h-80 relative overflow-hidden">
                <img
                  src={bentoItems[3].image}
                  alt={bentoItems[3].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback =
                      target.nextElementSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 hidden items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    Image: {bentoItems[3].title}
                  </span>
                </div>
              </div>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-brand-primary">
                  Integrations
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-white">
                  {bentoItems[3].title}
                </p>
                <p className="mt-2 max-w-lg text-base/6 text-gray-400">
                  {bentoItems[3].description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15" />
          </motion.div>

          {/* Fifth item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:col-span-2"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="h-80 relative overflow-hidden">
                <img
                  src={bentoItems[4].image}
                  alt={bentoItems[4].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback =
                      target.nextElementSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 hidden items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    Image: {bentoItems[4].title}
                  </span>
                </div>
              </div>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-brand-primary">
                  Confidence
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-white">
                  {bentoItems[4].title}
                </p>
                <p className="mt-2 max-w-lg text-base/6 text-gray-400">
                  {bentoItems[4].description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
