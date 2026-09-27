"use client";

import { useState } from "react";
import styles from "@/components/Connect/Connect.module.css";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const RECEIVER_EMAIL = "karthiak52@gmail.com";
  // Replace with your actual WhatsApp number (Country code + Phone number, e.g., 919876543210)
  const WHATSAPP_PHONE = "916383597661";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      nextErrors.email = true;
    if (!formData.subject.trim()) nextErrors.subject = true;
    if (formData.message.trim().length < 10) nextErrors.message = true;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatusMsg("Please fix the highlighted fields.");
      setIsSuccess(false);
      return;
    }

    const mailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(mailBody)}`;

    setStatusMsg(
      `Opening your email client... If nothing opens, reach me directly at ${RECEIVER_EMAIL}`
    );
    setIsSuccess(true);
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className={styles.connect} id="connect">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Connect</p>
          <h2>Let&apos;s talk about data.</h2>
          <p>
            Open to Data Analyst roles, freelance analytics work, and
            conversations about interesting problems.
          </p>
        </div>

        <div className={styles.connectGrid}>
          <div className={`${styles.connectInfoCard} reveal`}>
            <a className={styles.connectEmail} href={`mailto:${RECEIVER_EMAIL}`}>
              CLICK TO DROP MAIL
            </a>
            <p>
              The fastest way to reach me is by email — or grab a copy of my
              resume below.
            </p>

            <a
              className={`btn btn-ghost-inverse ${styles.resumeDownload}`}
              href="/resume/Karthikeyan_Data_Analyst.pdf"
              download="Karthikeyan_V_Data_Analyst_Resume.pdf"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v3a1 1 0 001 1h14a1 1 0 001-1v-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Resume
            </a>

            <div className={styles.socialList}>
              {/* 1. LinkedIn */}
              <a
                href="https://www.linkedin.com/in/karthikeyan-v-05022001kk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.ic}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </span>
                LinkedIn
              </a>

              {/* 2. WhatsApp (Click-to-chat) */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hi Karthikeyan, I visited your portfolio and would like to connect."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.ic}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.07c-.24.67-1.4 1.29-1.95 1.37-.51.08-1.18.11-3.41-.81-2.85-1.18-4.69-4.08-4.83-4.27-.14-.19-1.16-1.55-1.16-2.95 0-1.41.73-2.1 1-2.39.26-.29.58-.36.78-.36.2 0 .4 0 .57.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.07.16.12.35.02.55-.1.2-.15.33-.3.51-.15.17-.32.39-.45.52-.15.15-.31.32-.13.62.18.3.79 1.3 1.7 2.11 1.17 1.04 2.15 1.36 2.45 1.51.3.15.48.13.66-.08.18-.21.78-.91.99-1.22.2-.32.41-.26.69-.16.28.1 1.77.83 2.07.98.3.15.5.23.58.35.08.13.08.75-.16 1.42z" />
                  </svg>
                </span>
                WhatsApp
              </a>

              {/* 3. Email */}
              <a href={`mailto:${RECEIVER_EMAIL}`}>
                <span className={styles.ic}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4V4zm0 0l8 9 8-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Email
              </a>
            </div>
          </div>

          <form className={`${styles.contactForm} reveal`} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={`${styles.field} ${errors.name ? styles.hasError : ""}`}>
                <label htmlFor="cf-name">Name</label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span className={styles.errMsg}>Please enter your name.</span>
              </div>

              <div className={`${styles.field} ${errors.email ? styles.hasError : ""}`}>
                <label htmlFor="cf-email">Email</label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className={styles.errMsg}>Please enter a valid email address.</span>
              </div>
            </div>

            <div className={`${styles.field} ${errors.subject ? styles.hasError : ""}`}>
              <label htmlFor="cf-subject">Subject</label>
              <input
                type="text"
                id="cf-subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
              />
              <span className={styles.errMsg}>Please add a subject.</span>
            </div>

            <div className={`${styles.field} ${errors.message ? styles.hasError : ""}`}>
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="Tell me a bit about the opportunity or project..."
                value={formData.message}
                onChange={handleChange}
              />
              <span className={styles.errMsg}>
                Please enter a message (min. 10 characters).
              </span>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.btnPrimarySubmit}`}>
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {statusMsg && (
              <div className={`${styles.formStatus} ${isSuccess ? styles.success : styles.isError}`}>
                {statusMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}