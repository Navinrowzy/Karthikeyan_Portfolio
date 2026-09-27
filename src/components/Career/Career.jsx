import Image from "next/image";
import styles from "@/components/Career/Career.module.css";

export default function Career() {
  return (
    <section className={styles.summary} id="career">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Career</p>
          <h2>Where I&apos;ve put data to work.</h2>
          <p>
            Companies and roles where I&apos;ve applied SQL, Python, and BI to
            real business problems.
          </p>
        </div>

        <div className={styles.timeline}>
          {/* SHAI */}
          <div className={`${styles.tlItem} reveal`}>
            <span className={styles.tlDot} />

            <div className={styles.tlYear}>
              SEP 2024 — Present
              <span className={styles.tlCurrent}>
                <span
                  className="dot"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22C55E",
                    display: "inline-block",
                  }}
                />
                Currently working here
              </span>
            </div>

            <div className={styles.companyInfo}>
              <div className={styles.companyLogo}>
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4D0BAQH_pYTi5YQEXg/company-logo_200_200/B4DZbyajSBG8AI-/0/1747823769632/shai_health_logo?e=2147483647&v=beta&t=rrTTxGDGo6X1o8NBw1u5kCGQqAmNmyILgZvA7tYUzWI"
                  alt="SHAI Health Logo"
                  width={52}
                  height={52}
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className={styles.companyDetails}>
                <h3>DATA ANALYST</h3>
                <div className={styles.tlOrg}>
                  <strong>SHAI</strong>
                </div>
                <div className={styles.companyLocation}>
                  <span className={styles.locationIcon}>📍</span>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            <ul className={styles.tlBullets}>
              <li>
                Built and maintained Power BI dashboards tracking regional business KPIs for leadership review.
              </li>
              <li>
                Automated recurring reporting workflows using Python and SQL, cutting manual report time significantly.
              </li>
              <li>
                Worked with stakeholders to define metrics, data validation rules, and single sources of truth across teams.
              </li>
            </ul>

            <span className={styles.tlHighlight}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Awarded Support Supernova for outstanding performance in Q4 2024, my first quarter with the company
            </span>
          </div>

          {/* VIRTUSA */}
          <div className={`${styles.tlItem} reveal`}>
            <span className={styles.tlDot} />

            <div className={styles.tlYear}>AUG 2021 — SEP 2024</div>

            <div className={styles.companyInfo}>
              <div className={styles.companyLogo}>
                <Image
                  src="https://cdn.brandfetch.io/domain/virtusa.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed"
                  alt="Virtusa Consulting Services Logo"
                  width={52}
                  height={52}
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className={styles.companyDetails}>
                <h3>ASSOCIATE ENGINEER</h3>
                <div className={styles.tlOrg}>
                  <strong>VIRTUSA CONSULTING SERVICES</strong>
                </div>
                <div className={styles.companyLocation}>
                  <span className={styles.locationIcon}>📍</span>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            <ul className={styles.tlBullets}>
              <li>
                Wrote and optimized SQL queries and stored procedures to support reporting across client projects.
              </li>
              <li>
                Assisted in building ETL pipelines to move and clean data from multiple source systems.
              </li>
            </ul>

            <span className={styles.tlHighlight}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Promoted into data analytics work after consistently strong delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}