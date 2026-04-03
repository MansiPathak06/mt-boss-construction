"use client";
import { useState, useEffect, useRef } from "react";

const quickServices = [
  { id: 1,  icon: "🔧", label: "Plumbing" },
  { id: 2,  icon: "⚡", label: "Electrician" },
  { id: 3,  icon: "🎨", label: "Painting" },
  { id: 4,  icon: "❄️", label: "AC Service" },
  { id: 5,  icon: "🪟", label: "Carpentry" },
  { id: 6,  icon: "🧹", label: "Deep Cleaning" },
  { id: 7,  icon: "🔒", label: "Locksmith" },
  { id: 8,  icon: "🏠", label: "Waterproofing" },
  { id: 9,  icon: "🪣", label: "Tank Cleaning" },
  { id: 10, icon: "🔥", label: "Gas Pipeline" },
  { id: 11, icon: "📡", label: "CCTV Install" },
  { id: 12, icon: "🚿", label: "Bathroom Fit" },
  { id: 13, icon: "🪞", label: "Glass & Mirrors" },
  { id: 14, icon: "🏗️", label: "False Ceiling" },
  { id: 15, icon: "🧱", label: "Tiling & Flooring" },
  { id: 16, icon: "🔨", label: "Wall Repairs" },
  { id: 17, icon: "💡", label: "Home Automation" },
  { id: 18, icon: "🪜", label: "Staircase Work" },
  { id: 19, icon: "🌿", label: "Garden & Lawn" },
  { id: 20, icon: "🏠", label: "Pest Control" },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

export default function QuickServices() {
  const [headerRef, headerVisible] = useInView(0.1);
  const [gridRef, gridVisible] = useInView(0.05);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes float-up {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .qs-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #b3d9f7;
          background: #f0f7ff;
          transition: background 0.3s ease, transform 0.25s ease, z-index 0s;
        }
        .qs-card:hover {
          background: #0d6ebd;
          transform: scale(1.07);
          z-index: 10;
          box-shadow: 0 8px 32px rgba(13,110,189,0.35);
        }
        .qs-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .qs-card:hover::before {
          opacity: 1;
          animation: shimmer 0.7s ease forwards;
        }
        .qs-icon {
          font-size: 1.5rem;
          display: block;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .qs-card:hover .qs-icon {
          transform: scale(1.25) rotate(-6deg);
        }
        .qs-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #0a3d6e;
          transition: color 0.3s;
          text-align: center;
          line-height: 1.2;
        }
        .qs-card:hover .qs-label {
          color: #ffffff;
        }
        .qs-grid-item {
          animation: float-up 0.5s ease both;
        }
        .view-all-btn {
          position: relative;
          overflow: hidden;
        }
        .view-all-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.45s ease;
        }
        .view-all-btn:hover::after {
          transform: translateX(100%);
        }
      `}</style>

      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-8"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-[#0d6ebd] mb-1">At Your Doorstep</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a3d6e] tracking-wide mb-2">
              Quick Home Services
            </h2>
            <div className="w-8 h-0.5 bg-[#0d6ebd] mx-auto mb-3 rounded" />
            <p className="text-xs sm:text-sm text-[#1a5a9e] max-w-md mx-auto leading-relaxed">
              Everything your home needs — one call away. Book trusted professionals instantly.
            </p>
          </div>

          {/* Services Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-5 sm:grid-cols-10"
            style={{ border: "1px solid #b3d9f7" }}
          >
            {quickServices.map((service, i) => (
              <div
                key={service.id}
                className="qs-card qs-grid-item flex flex-col items-center justify-center gap-1.5 py-4 px-2"
                style={{
                  animationDelay: gridVisible ? `${i * 0.04}s` : "none",
                  animationPlayState: gridVisible ? "running" : "paused",
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span className="qs-icon">{service.icon}</span>
                <span className="qs-label">{service.label}</span>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div
            className="text-center mt-8"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            <a href="/services" className="view-all-btn inline-flex items-center gap-2 px-7 py-3 bg-[#0d6ebd] hover:bg-[#0a5a9e] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors duration-300 shadow-md hover:shadow-lg">
              View All Services
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}