export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-paper border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate text-sm">
          © {currentYear} HashDog — Premium AI Advisory.
          <span className="ml-2 inline-block w-1 h-1 bg-ion rounded-full shadow-glow animate-pulse"></span>
        </p>
      </div>
    </footer>
  );
}
