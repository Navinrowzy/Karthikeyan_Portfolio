import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "@/app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "KARTHIKEYAN V | Data Analyst",
  description:
    "KARTHIKEYAN V is a Data Analyst specializing in SQL, Python, and Power BI — turning raw data into decisions that move the business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('kv-theme');
                  document.documentElement.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}