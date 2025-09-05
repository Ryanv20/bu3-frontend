"use client";
import { useRef } from "react";
import Header from "./components/header";
import About from "./components/about";
import FAQ from "./components/FAQ";
import AccessAIModel from "./components/AccessAIModel";
import Contact from "./components/contact";


export default function MainPage() {
  // Refs for smooth scroll
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = {
    about: aboutRef,
    faq: faqRef,
    access: accessRef,
    contact: contactRef,
  };

  const scrollTo = (key: keyof typeof sections) => {
    sections[key].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Accent wrapper */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-black to-[#BB86FC]/10" />

      {/* Header Section */}
      <Header onNavigate={scrollTo} />

      {/* Other Sections */}
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <div ref={accessRef}>
        <AccessAIModel />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
