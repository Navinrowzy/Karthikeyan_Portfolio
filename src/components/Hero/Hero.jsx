"use client";

import Image from "next/image";
import styles from "@/components/Hero/Hero.module.css";

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section className={styles.hero} id="home">
      <div
        className={styles.heroMedia}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src="/profile_img/Home_Page.jpg"
          alt="Data Analyst Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <h1>KARTHIKEYAN V</h1>
          <div className={styles.heroRole}>
            <span className={styles.dot} />
            Certified Power BI Data Analyst
          </div>
          <p className={styles.lead}>
            <span>Transforming data into meaningful insights,</span>
            <span>actionable decisions,</span>
            <span>and measurable business impact.</span>
          </p>
          <div className={styles.heroCta}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollTo("about")}
            >
              Know About Me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className={`btn btn-ghost-inverse ${styles.btnGhostInverse}`}
              onClick={() => scrollTo("connect")}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}