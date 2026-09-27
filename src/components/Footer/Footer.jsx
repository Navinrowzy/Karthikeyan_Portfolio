import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerInner}`}>
        <span>© 2026 Karthikeyan V. All rights reserved.</span>
      </div>
    </footer>
  );
}