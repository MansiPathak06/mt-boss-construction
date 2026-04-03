"use client";
import { useEffect, useRef, useState } from "react";

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
];

export default function AboutSection({
  subtitle = "About Us",
  title = "MT BOSS CONSTRUCTION",
  hashtags = ["#StrongFoundationForStrongNation", "#BuildingNation", "#TransformingLives"],
  years = 20,
  images = DEFAULT_IMAGES,
  bgImage = "https://i.pinimg.com/736x/df/95/db/df95db051ac7c4228bcbaecdc24deb9b.jpg",
  paragraph = "MT BOSS Construction is a technology-led engineering, procurement, and construction company committed to delivering sustainable infrastructure across India. From bridges and highways to industrial complexes and urban developments, we bring precision, integrity, and innovation to every project we undertake — on time and within budget.",
  aboutLink = "/About-us",
}) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setImgIndex((i) => (i + 1) % images.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 px-6 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d6ebd]/20" />

      <div
        className={`relative z-10 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Subtitle */}
        <p className="text-xs uppercase tracking-widest text-[#0d6ebd] mb-1">{subtitle}</p>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-wide mb-2"
    style={{ color: '#0d6ebd', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          {title}
        </h2>

        {/* Hashtags */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-6">
          {hashtags.map((tag) => (
            <span key={tag} className="text-xs font-semibold text-[#0d6ebd]">
              {tag}
            </span>
          ))}
        </div>

        {/* Number with image clipped inside */}
        <div className="inline-block mb-1">
          <span
            className={`block font-black leading-none select-none transition-opacity duration-400 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
            style={{
              fontSize: "clamp(140px, 22vw, 240px)",
              backgroundImage: `url(${images[imgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {years}
          </span>
        </div>

        {/* Years label */}
        <p className="text-base sm:text-lg font-bold uppercase tracking-widest  mb-3">
          Years Of Experience
        </p>

        {/* Image dots */}
        <div className="flex justify-center gap-1.5 mb-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFading(true);
                setTimeout(() => { setImgIndex(i); setFading(false); }, 400);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === imgIndex ? "w-5 bg-[#0d6ebd]" : "w-1.5 bg-[#0d6ebd]/40"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>

        {/* Divider */}
        {/* <div className="w-10 h-0.5 bg-[#2d4a27] mx-auto mb-4 rounded" /> */}

        {/* Paragraph */}
        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#0d6ebd] leading-relaxed mb-6">
          {paragraph}
        </p>

        {/* CTA */}
        <a
          href={aboutLink}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0d6ebd] hover:bg-[#0a5a9e] text-white text-xs font-semibold uppercase tracking-widest rounded transition-all duration-200"
        >
          Discover More
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

      </div>
    </section>
  );
}