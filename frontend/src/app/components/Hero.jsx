"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80", // placeholder – replace with your image
    title: "Sustainable Technology Led",
    subtitle: "Engineering, Procurement & Construction",
    description:
      "We provide simple and innovative solutions to deliver complex projects on time.",
    cta: "Explore Projects",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    title: "Building Tomorrow's",
    subtitle: "Infrastructure Today",
    description:
      "Delivering world-class infrastructure across energy, transport, and urban development.",
    cta: "Our Services",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80",
    title: "Precision Engineering",
    subtitle: "At Every Scale",
    description:
      "From concept to commissioning — trusted by industry leaders across India and beyond.",
    cta: "View Portfolio",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80",
    title: "Innovation Driven",
    subtitle: "Construction Excellence",
    description:
      "Leveraging cutting-edge technology to redefine what's possible in modern construction.",
    cta: "Learn More",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const goTo = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setCurrent(index);
    resetProgress();
    setTimeout(() => setAnimating(false), 800);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  const resetProgress = () => {
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      resetProgress();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timerRef.current);
  }, [current]);

  // Progress bar animation
  useEffect(() => {
    startTimeRef.current = performance.now();
    const animate = (now) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100);
      setProgress(pct);
      if (pct < 100) progressRef.current = requestAnimationFrame(animate);
    };
    progressRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(progressRef.current);
  }, [current]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "480px", maxHeight: "900px" }}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              transform: i === current ? "scale(1.04)" : "scale(1)",
              transition: "transform 6s ease-out",
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(122, 156, 185, 0.85) 0%, rgba(87, 140, 184, 0.58) 50%,  rgba(83, 76, 76, 0.1) 100%)",
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
              <div
                className="max-w-2xl"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
                }}
              >
                {/* Label */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="block h-px w-10 bg-[#1e2e15]"
                    style={{ minWidth: "40px" }}
                  />
                  <span
                    className="text-[#1e2e15] text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Engineering Excellence
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="text-white font-bold leading-tight mb-2"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)",
                    textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.title}
                </h1>
                <h2
                  className="font-bold leading-tight mb-5"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
                    color: "#1e2e15",
                    textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.subtitle}
                </h2>

                {/* Description */}
                <p
                  className="text-gray-200 mb-8 leading-relaxed"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
                    maxWidth: "480px",
                  }}
                >
                  {slide.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d6ebd] hover:bg-[#0a5a9e] text-white text-sm uppercase tracking-widest font-semibold rounded transition-all duration-300 group"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {slide.cta}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-[#a8c5a0]/50 bg-[#4e6b46]/40 hover:bg-[#4e6b46]/70 text-[#f5f0eb] backdrop-blur-sm transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-[#a8c5a0]/50 bg-[#4e6b46]/40 hover:bg-[#4e6b46]/70 text-[#f5f0eb] backdrop-blur-sm transition-all duration-200"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center gap-5">
          {/* Dot indicators with progress */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative flex items-center justify-center"
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === current ? (
                  <span className="relative block w-10 h-1.5 rounded-full bg-[#a8c5a0]/40 overflow-hidden">
                    <span
                      className="absolute left-0 top-0 h-full bg-[#f5f0eb] rounded-full transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  </span>
                ) : (
                  <span className="block w-5 h-1.5 rounded-full bg-[#a8c5a0]/50 hover:bg-[#f5f0eb]/70 transition-colors duration-200" />
                )}
              </button>
            ))}
          </div>

          {/* Slide counter */}
          <span
            className="text-[#c8dfc4]/70 text-xs tracking-widest ml-auto"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <span className="text-[#f5f0eb] font-semibold">{String(current + 1).padStart(2, "0")}</span>
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}