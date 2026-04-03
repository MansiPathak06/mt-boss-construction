"use client"
import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Commercial Buildings",
    description:
      "From corporate offices to retail complexes, we design and construct world-class commercial spaces built to last — combining structural integrity with modern aesthetics.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "Hotel & Hospitality",
    description:
      "We deliver premium hotel and resort construction with meticulous attention to interiors, MEP systems, and guest experience — on schedule and budget.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Residential Projects",
    description:
      "Affordable housing to luxury villas — MT BOSS builds residential spaces that marry comfort, safety, and enduring quality for every lifestyle.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Industrial & Warehousing",
    description:
      "We construct robust industrial plants, factories, and large-scale warehouses engineered for operational efficiency and long-term durability.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "Infrastructure & Roads",
    description:
      "Our infrastructure division handles highways, bridges, flyovers, and urban road networks — delivering precision-engineered public works that connect communities.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    link: "#",
  },
  {
    id: 6,
    title: "EPC Contracting",
    description:
      "End-to-end Engineering, Procurement & Construction services — we handle design, sourcing, and execution under one roof for seamless project delivery.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
    link: "#",
  },
  {
    id: 7,
    title: "Real Estate Development",
    description:
      "From land acquisition to possession, MT BOSS manages full-cycle real estate development — residential townships, mixed-use projects, and commercial hubs.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    link: "#",
  },
  {
    id: 8,
    title: "Interior & Fit-Out Works",
    description:
      "We offer turnkey interior fit-out solutions for offices, hotels, and retail spaces — blending function with refined aesthetics tailored to your brand.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    link: "#",
  },
  {
    id: 9,
    title: "Project Management",
    description:
      "Our expert consultants provide end-to-end project management — planning, scheduling, cost control, and quality assurance across all construction phases.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    link: "#",
  },
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl cursor-pointer"
      style={{
        height: "280px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, box-shadow 0.3s ease`,
      }}
    >
      {/* Background Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Default state — always visible dark bottom gradient + title */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d6ebd]/90 via-[#0d6ebd]/20 to-transparent transition-opacity duration-400 group-hover:opacity-0" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
        <div className="w-6 h-0.5 bg-[#cce8ff] mb-2 rounded" />
        <h3 className="text-base font-bold text-white tracking-wide">{service.title}</h3>
      </div>

      {/* Hover state — full green overlay with title + description */}
      <div className=" bg-[#0d6ebd]/92 absolute inset-0 flex flex-col items-center justify-center text-center p-6
        opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-400 ease-out">
        <div className="w-8 h-0.5 bg-[#cce8ff] mb-3 rounded" />
        <h3 className="text-base font-bold text-white tracking-wide mb-3">{service.title}</h3>
        <p className="text-sm text-[#cce8ff] leading-relaxed">{service.description}</p>
        <a
          href={service.link}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#cce8ff] hover:text-white transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          Read More
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#daeeff] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-widest text-[#0d6ebd] mb-1">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a3d6e] tracking-wide mb-3">
            Our Services
          </h2>
          <div className="w-10 h-0.5 bg-[#0d6ebd]  mx-auto mb-4 rounded" />
          <p className="max-w-xl mx-auto text-sm text-[#1a5a9e] leading-relaxed">
            MT BOSS Construction delivers end-to-end construction and infrastructure solutions across India — built on precision, trust, and decades of expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}