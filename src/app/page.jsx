"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import About from "@/components/About/About.jsx";
import Career from "@/components/Career/Career.jsx";
import Skills from "@/components/Skills/Skills.jsx";
import Academics from "@/components/Academics/Academics.jsx";
import Connect from "@/components/Connect/Connect.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop.jsx";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Skills />
      <Academics />
      <Connect />
      <Footer />
      <ScrollToTop />
    </main>
  );
}