import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ home }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`text-white border-b border-[#252525] relative ${!home && " !absolute w-full top-0 left-0" }`}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 py-8 flex ${
          home ? "justify-between" : "justify-center "
        } items-center`}
      >
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-semibold tracking-tight">
          <Link to="/" className="flex items-center relative pb-1">
            <span>XGENUI<span className="text-purple-500">.</span></span> <span className="bg-purple px-1 text-xs ">beta</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        {home && (
          <>
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#features" className="hover:text-purple-400">
                Features
              </a>
              <a href="#pricing" className="hover:text-purple-400">
                Pricing
              </a>
              <a href="#testimonials" className="hover:text-purple-400">
                Testimonials
              </a>
            </nav>

            {/* only desktop */}
            <div className=" hidden md:block">
              <Link
                to="/studio"
                className="px-6 shadow-[0_0_20px_#8c56f89c] py-3  bg-gradient-to-r from-[#a75bff] to-[#0038db] rounded-xl text-sm  transition "
              >
                Try Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#1a1a1a] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Mobile Nav Menu */}
      {home && mobileMenuOpen && (
        <div className="md:hidden px-6 py-8 bg-[#121212]  border-[#252525]">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            <a
              href="#features"
              className="hover:text-purple-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-purple-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
