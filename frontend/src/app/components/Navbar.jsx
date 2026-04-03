"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/About-us" },
    { label: "Services", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Want to be an Agent?", href: "#" },
  ];

  return (
    <nav className="bg-[#0d6ebd] shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

         {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="MT BOSS Logo"
                className="h-10 w-auto object-contain  mix-blend-multiply"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  relative px-4 py-2 text-white ] text-xs uppercase tracking-widest font-medium
                  transition-colors duration-200 hover:text-white
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                  after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300
                  hover:after:w-4/5
                  ${link.label === "Agent"
                    ? "bg-[#4e6b46] text-white rounded px-5 py-2 hover:bg-[#3d5537] after:hidden ml-2"
                    : ""}
                `}
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {link.label}
              </a>
            ))}

            {/* Sign In Button */}
            <a
              href="#"
              className="ml-3 flex items-center gap-1.5 px-5 py-2 border border-[#f5f0eb] text-white] text-xs uppercase tracking-widest font-medium rounded hover:bg-[#f5f0eb] hover:text-[#0d6ebd] transition-all duration-200"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Sign In
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-white] hover:text-white hover:bg-[#1a7fd4] focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                /* X icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1a7fd4] px-4 pt-2 pb-4 space-y-1 border-t border-[#0d6ebd]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                block px-4 py-2.5 text-white] text-xs uppercase tracking-widest font-medium rounded
                transition-colors duration-200 hover:bg-[#0d6ebd] hover:text-white
                ${link.label === "Agent" ? "bg-[#4e6b46] text-white mt-2" : ""}
              `}
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {link.label}
            </a>
          ))}

          {/* Sign In — Mobile */}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 mt-2 px-4 py-2.5 border border-[#f5f0eb] text-white] text-xs uppercase tracking-widest font-medium rounded hover:bg-[#f5f0eb] hover:text-[#0d6ebd] transition-all duration-200"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}