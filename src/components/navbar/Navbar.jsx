"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/components/navbar/navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("kv-theme", nextTheme);
  };

  // Flawless section navigation without hash and without layout collision
  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    // requestAnimationFrame ensures the mobile menu state is handled before the scroll executes
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Career", id: "career" },
    { label: "Skills", id: "skills" },
    { label: "Academics", id: "academics" },
    { label: "Connect", id: "connect" },
  ];

  return (
    <header className={`${styles.siteNav} ${scrolled ? styles.isScrolled : ""}`} id="siteNav">
      <div
        className={styles.navProgressBar}
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className={`container ${styles.navInner}`}>
        <div
          className={styles.brand}
          role="button"
          tabIndex={0}
          onClick={() => scrollToSection("home")}
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("home")}
        >
          <span className={styles.brandMark}>
            <Image
              src="/profile_img/logo.png"
              alt="KARTHIKEYAN V Logo"
              width={42}
              height={42}
              priority
              style={{ objectFit: "cover" }}
            />
          </span>
          <span className={styles.brandNameLine}>
            KARTHIKEYAN V
            <small>DATA ANALYST</small>
          </span>
        </div>

        <nav className={styles.primaryLinks}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              role="button"
              tabIndex={0}
              onClick={() => scrollToSection(link.id)}
              onKeyDown={(e) => e.key === "Enter" && scrollToSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            id="themeToggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title="Switch theme"
          >
            <svg
              className={styles.iconSun}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className={styles.iconMoon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.isActive : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.isOpen : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection(link.id)}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection(link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}