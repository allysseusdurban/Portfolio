import Link from "next/link";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader/wght-italic.css";
import { profile } from "./portfolio";
import "./globals.css";

export const metadata = {
  title: {
    default: `${profile.name} | Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: profile.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header" id="top">
          <div className="shell header-inner">
            <Link className="wordmark" href="/">
              <span className="brand-mark" aria-hidden="true"><i /></span>
              {profile.name}
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/#work">Work</Link>
              <Link href="/#about">About</Link>
              <Link className="nav-contact" href="/#contact">
                Contact <span aria-hidden="true">↗</span>
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-inner">
            <span>{profile.name} <span className="footer-dot">·</span> Portfolio</span>
            <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </footer>
      </body>
    </html>
  );
}
