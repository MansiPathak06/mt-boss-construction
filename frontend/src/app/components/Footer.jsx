"use client";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Want to be an Agent?", href: "#" },
  ];

  const serviceLinks = [
    { label: "Commercial Buildings", href: "#" },
    { label: "Hotel & Hospitality", href: "#" },
    { label: "Residential Projects", href: "#" },
    { label: "Industrial & Warehousing", href: "#" },
    { label: "Infrastructure & Roads", href: "#" },
    { label: "EPC Contracting", href: "#" },
    { label: "Real Estate Development", href: "#" },
    { label: "Interior & Fit-Out Works", href: "#" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#daeeff]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + Description + Social */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="MT BOSS Logo" className="h-12 w-auto object-contain" />
            </a>
            <p className="text-sm text-[#1a5a9e] leading-relaxed mb-5">
              MT BOSS Construction is a technology-led engineering, procurement, and construction company committed to delivering sustainable infrastructure across India.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0d6ebd]/15 text-[#0d6ebd] hover:bg-[#0d6ebd] hover:text-white transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black text-[#0a3d6e] uppercase tracking-widest mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Quick Links
            </h3>
            <div className="w-8 h-0.5 bg-[#0d6ebd] mb-4 rounded" />
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-2 text-sm text-[#1a5a9e] hover:text-[#0d6ebd] transition-colors duration-200 group">
                    <svg className="w-3 h-3 text-[#0d6ebd] transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-black text-[#0a3d6e] uppercase tracking-widest mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Our Services
            </h3>
            <div className="w-8 h-0.5 bg-[#0d6ebd] mb-4 rounded" />
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-2 text-sm text-[#1a5a9e] hover:text-[#0d6ebd] transition-colors duration-200 group">
                    <svg className="w-3 h-3 text-[#0d6ebd] transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-black text-[#0a3d6e] uppercase tracking-widest mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Contact Us
            </h3>
            <div className="w-8 h-0.5 bg-[#0d6ebd] mb-4 rounded" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 bg-[#0d6ebd]/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#0d6ebd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-[#1a5a9e] leading-relaxed">
                  MT BOSS HQ, Sector 18,<br />Noida, Uttar Pradesh, India
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#0d6ebd]/15 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#0d6ebd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+911234567890" className="text-sm text-[#1a5a9e] hover:text-[#0d6ebd] transition-colors duration-200">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#0d6ebd]/15 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#0d6ebd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@mtboss.in" className="text-sm text-[#1a5a9e] hover:text-[#0d6ebd] transition-colors duration-200">
                  info@mtboss.in
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#0d6ebd]/20 bg-[#0d6ebd]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/80 tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
            © {new Date().getFullYear()} MT BOSS Construction. All rights reserved.
          </p>
          <p className="text-xs text-white/60 tracking-wide">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}