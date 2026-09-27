import styles from "@/components/Skills/Skills.module.css";

export default function Skills() {
  const tools = [
    {
      name: "Power BI",
      iconClass: styles.toolIconPbi,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 20V11M12 20V4M19 20v-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "SQL",
      iconClass: styles.toolIconSql,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 9l3 3-3 3M13 15h3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Python",
      iconClass: styles.toolIconPython,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Excel",
      iconClass: styles.toolIconExcel,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M3 14h18M9 4v16M15 4v16" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Power Query",
      iconClass: styles.toolIconPq,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "DAX",
      iconClass: styles.toolIconDax,
      rawText: "ƒx",
    },
    {
      name: "Power Automate",
      iconClass: styles.toolIconFlow,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 2l4 4-4 4M3 11V9a4 4 0 014-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const skillCards = [
    {
      num: "01",
      title: "Data Analysis",
      desc: "Finding patterns, trends and opportunities hidden inside complex business data.",
      tags: ["Analysis", "KPI", "Insights"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18M7 14l3-4 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "ETL & Data Operations",
      desc: "Creating dependable data pipelines with validation, cleansing, loading and tracking.",
      tags: ["ETL", "Validation", "SQL Server"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Data Modeling",
      desc: "Structuring relationships between tables so reports stay fast, accurate and easy to extend.",
      tags: ["Star Schema", "Relationships", "SQL"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Python & Automation",
      desc: "Automating repetitive workflows and transforming raw files into analysis-ready data.",
      tags: ["Python", "Pandas", "Automation"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Business Problem Solving",
      desc: "Connecting technical analysis with business context to deliver practical outcomes.",
      tags: ["Problem Solving", "Reporting", "Decision Support"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.4c.6.6 1 1.4 1 2.3v.3h6v-.3c0-.9.4-1.7 1-2.3A6 6 0 0012 3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Skills</p>
          <h2>Tools & capabilities.</h2>
          <p>
            The tools I use day to day, and the strengths I bring to turning
            data into decisions.
          </p>
        </div>

        <div className={`${styles.skillsShowcase} reveal`}>
          <div className={styles.skillsHeading}>
            <div>
              <h3>How I turn data into impact.</h3>
            </div>
            <span className={styles.skillsKicker}>DATA · INSIGHT · ACTION</span>
          </div>

          <div className={styles.skillsTools}>
            {tools.map((t) => (
              <div className={styles.toolChip} key={t.name}>
                <span className={`${styles.toolIcon} ${t.iconClass}`}>
                  {t.icon || t.rawText}
                </span>
                <span className={styles.toolName}>{t.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.skillsGrid}>
            {skillCards.map((card) => (
              <article className={styles.skillCard} key={card.num}>
                <span className={styles.skillNumber}>{card.num}</span>
                <div className={styles.skillIcon}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <div className={styles.skillTags}>
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}