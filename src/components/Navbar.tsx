import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logotype from "../assets/logotype.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "How it's done", href: "/how" },
    { label: "Platform", href: "/platform" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-porcelain/80 backdrop-blur shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
          <img src={Logotype} alt="HashDog" className="h-8 w-auto" />
          <span className="text-ink font-semibold tracking-tight text-lg">
            HashDog
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-slate hover:text-ink text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            to="/consultation"
            className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft hover:shadow-glow transition-all duration-300 relative overflow-hidden group ml-4"
          >
            Book Now
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-ion rounded-full shadow-glow animate-pulse"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-ink transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-paper border-t border-gray-100 px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate hover:text-ink text-sm font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <Link
              to="/consultation"
              className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft hover:shadow-glow transition-all duration-300 relative overflow-hidden group mt-4 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-ion rounded-full shadow-glow animate-pulse"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
