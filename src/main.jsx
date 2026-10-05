import React from "react";
import { createRoot } from "react-dom/client";
import {
  Camera,
  Clock3,
  Flame,
  Mail,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import locusLogo from "./assets/locus-logo-clean.png";
import "./styles.css";

const updates = [
  "Faster browsing experience",
  "Cleaner product discovery",
  "Sharper support workflows",
  "Stronger security foundations",
];

const services = [
  { label: "Fire & life safety", icon: Flame },
  { label: "CCTV & surveillance", icon: Camera },
  { label: "Networking & ELV", icon: Network },
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
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
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
            <span className="eyebrow">
              <Sparkles size={16} />
              Fire, security and systems integration
            </span>
            <h1>We are building a sharper digital experience.</h1>
            <p>
              Locus Fire & Security is refreshing its digital experience. Our
              field teams and support channels remain active while the new site
              is prepared for launch.
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
            <div className="launch-card">
              <div className="scan-frame">
                <span className="scan-line" />
                <span className="corner corner-one" />
                <span className="corner corner-two" />
                <span className="corner corner-three" />
                <span className="corner corner-four" />
                <div className="shield-orbit">
                  <span className="orbit orbit-one" />
                  <span className="orbit orbit-two" />
                  <span className="orbit orbit-three" />
                  <span className="core">
                    <Wrench size={42} />
                  </span>
                  <span className="node node-one" />
                  <span className="node node-two" />
                  <span className="node node-three" />
                </div>
              </div>
              <div className="mini-metrics">
                <span>Secure</span>
                <span>Fast</span>
                <span>Responsive</span>
              </div>
            </div>
            <div className="signal-board" aria-label="Website launch progress">
              <div className="signal-head">
                <span>Launch readiness</span>
                <strong>82%</strong>
              </div>
              <div className="progress-track">
                <span />
              </div>
              <div className="signal-lines">
                <span>Design refresh</span>
                <span>Content migration</span>
                <span>Final testing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="service-grid" aria-label="Locus service areas">
          {services.map(({ label, icon: Icon }) => (
            <article key={label}>
              <Icon size={22} />
              <span>{label}</span>
            </article>
          ))}
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
