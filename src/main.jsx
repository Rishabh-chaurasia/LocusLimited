import React from "react";
import { createRoot } from "react-dom/client";
import { Clock3, Mail, Phone, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import locusLogo from "./assets/locus-logo-clean.png";
import "./styles.css";

const updates = [
  "Faster browsing experience",
  "Cleaner product discovery",
  "Sharper support workflows",
  "Stronger security foundations",
];

const contact = {
  email: "info@locuslimited.com",
  mobile: "+91 99990 34569",
  office: "+91 124 4846908",
};

function App() {
  return (
    <main className="page-shell">
      <div className="mesh" aria-hidden="true" />
      <section className="upgrade-stage">
        <nav className="brand-bar" aria-label="Site status">
          <a className="brand" href="/">
            <span className="brand-mark">
              <img src={locusLogo} alt="Locus Fire & Security" />
            </span>
          </a>
          <span className="status-pill">
            <span className="pulse" />
            Upgrade in progress
          </span>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <img className="hero-logo" src={locusLogo} alt="Locus Fire & Security" />
            <span className="eyebrow">
              <Sparkles size={16} />
              Something better is loading
            </span>
            <h1>We are upgrading our website.</h1>
            <p>
              Our team is polishing the experience behind the scenes. We will
              be back soon with a faster, cleaner, and more capable website.
            </p>

            <div className="actions">
              <a className="primary-action" href={`mailto:${contact.email}`}>
                Contact us
                <Mail size={18} />
              </a>
              <a className="secondary-action" href={`tel:${contact.mobile.replaceAll(" ", "")}`}>
                Call now
                <Phone size={18} />
              </a>
            </div>

            <div className="contact-row" aria-label="Locus contact details">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>{contact.mobile}</span>
              <span>{contact.office}</span>
            </div>
          </div>

          <div className="orbit-panel" aria-label="Website upgrade animation">
            <div className="rings">
              <span className="ring ring-one" />
              <span className="ring ring-two" />
              <span className="ring ring-three" />
              <span className="core">
                <Wrench size={44} />
              </span>
              <span className="node node-one" />
              <span className="node node-two" />
              <span className="node node-three" />
            </div>
          </div>
        </div>

        <div className="info-strip" id="updates">
          <article>
            <Clock3 size={22} />
            <div>
              <h2>Returning shortly</h2>
              <p>Thanks for your patience while we refresh the site.</p>
            </div>
          </article>
          <article>
            <ShieldCheck size={22} />
            <div>
              <h2>Services remain active</h2>
              <p>
                For urgent queries, reach us at {contact.email} or {contact.mobile}.
              </p>
            </div>
          </article>
        </div>

        <div className="update-list" aria-label="Planned improvements">
          {updates.map((item, index) => (
            <span key={item} style={{ "--delay": `${index * 120}ms` }}>
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
