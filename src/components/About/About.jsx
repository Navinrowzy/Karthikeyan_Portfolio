"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/components/About/About.module.css";

export default function About() {
  const [expYears, setExpYears] = useState("5+ years");

  useEffect(() => {
    const startDate = new Date(2021, 7, 23);
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const anniversary = new Date(
      today.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );
    if (today < anniversary) {
      years--;
    }
    setExpYears(`${Math.max(0, years)}+ years`);
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.aboutGrid}`}>
        <div className={`${styles.aboutVisual} reveal`}>
          <div className={styles.aboutFrame}>
            <Image
              src="/profile_img/about_me.jpeg"
              alt="Karthikeyan V — Data Analyst"
              width={380}
              height={475}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={styles.aboutBadge}>
            <div className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <strong>{expYears}</strong>
              <span>In data & analytics</span>
            </div>
          </div>
        </div>

        <div className={`${styles.aboutCopy} reveal`}>
          <p className="eyebrow">About Me</p>
          <h2>Turning raw numbers into decisions people can act on.</h2>
          <p>
            I&apos;m Karthikeyan V, a Data Analyst focused on helping teams make
            faster, evidence-based decisions instead of relying on gut feel. My
            work sits at the intersection of data, business context, and clear
            communication — I enjoy taking a scattered set of numbers and shaping
            it into something a manager can actually use on Monday morning.
          </p>
          <p>
            My approach starts with the question a stakeholder is actually
            trying to answer, then works backward through clean data, rigorous
            analysis, and a dashboard or report built for the person who has to
            use it — not just the one who requested it. I care most about
            accuracy and clarity over complexity: a simple chart that gets read
            beats a complex one that gets ignored.
          </p>
          <p>
            I&apos;m especially drawn to the moment a messy, unstructured
            dataset turns into a trend someone can plan around, and I&apos;m
            always sharpening my SQL, Python, and Power BI toolkit to get there
            faster.
          </p>

          <div className={styles.aboutHighlights}>
            <span className={styles.pill}><span className="dot" />Data Analysis</span>
            <span className={styles.pill}><span className="dot" />Business Intelligence</span>
            <span className={styles.pill}><span className="dot" />SQL</span>
            <span className={styles.pill}><span className="dot" />Python</span>
            <span className={styles.pill}><span className="dot" />Power BI</span>
            <span className={styles.pill}><span className="dot" />Data Visualization</span>
          </div>
        </div>
      </div>
    </section>
  );
}