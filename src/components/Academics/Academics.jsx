import Image from "next/image";
import styles from "@/components/Academics/Academics.module.css";

export default function Academics() {
  return (
    <section className={styles.education} id="academics">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Academics</p>
          <h2>Academic foundation.</h2>
          <p>
            My academic journey in Computer Science, with the institutions that
            shaped my technical foundation.
          </p>
        </div>

        <div className={styles.timeline}>
          {/* BHARATHIAR */}
          <div className={`${styles.tlItem} reveal`}>
            <span className={styles.tlDot} />
            <div className={styles.tlYear}>OCT 2021 — SEP 2023</div>

            <div className={styles.academicInfo}>
              <div className={styles.academicLogo}>
                <Image
                  src="https://b-u.ac.in/sites/b-u.ac.in/files/inline-images/bu_logo_icon.png"
                  alt="Bharathiar University Logo"
                  width={52}
                  height={52}
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className={styles.companyDetails}>
                <h3>MASTER IN COMPUTER SCIENCE</h3>
                <div className={styles.tlOrg}>
                  <strong>BHARATHIAR UNIVERSITY</strong>
                </div>
                <div className={styles.companyLocation}>
                  <span className={styles.locationIcon}>📍</span>
                  <span>Coimbatore</span>
                </div>
              </div>
            </div>

            <span className={styles.tlHighlight}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Postgraduate Education
            </span>
          </div>

          {/* PSG */}
          <div className={`${styles.tlItem} reveal`}>
            <span className={styles.tlDot} />
            <div className={styles.tlYear}>JUN 2018 — MAY 2021</div>

            <div className={styles.academicInfo}>
              <div className={styles.academicLogo}>
                <Image
                  src="/profile_img/psgcas-logo.jpg"
                  alt="PSG College of Arts and Science Logo"
                  width={52}
                  height={52}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className={styles.companyDetails}>
                <h3>BACHELOR IN COMPUTER SCIENCE</h3>
                <div className={styles.tlOrg}>
                  <strong>PSG COLLEGE OF ARTS AND SCIENCE</strong>
                </div>
                <div className={styles.companyLocation}>
                  <span className={styles.locationIcon}>📍</span>
                  <span>Coimbatore</span>
                </div>
              </div>
            </div>

            <span className={styles.tlHighlight}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Undergraduate Education
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}