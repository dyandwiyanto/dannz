import { Reveal } from "@/components/reveal";

const solutions = [
  {
    id: "01",
    title: "Private Server",
    description:
      "Isolated compute environments for secure workloads, internal tools, and client-facing applications that need consistency.",
  },
  {
    id: "02",
    title: "Managed VPS",
    description:
      "Flexible server instances with operational guidance, monitoring support, and clean scaling pathways as demand grows.",
  },
  {
    id: "03",
    title: "Custom Infra Setup",
    description:
      "Tailored provisioning for agencies, teams, and advanced users needing specific server specs, routing, and access models.",
  },
];

const proofCards = [
  {
    eyebrow: "Trust Layer",
    title: "Clear value proposition",
    description:
      "Positioned for customers who buy infra based on reliability, not gimmicks.",
  },
  {
    eyebrow: "Operational Fit",
    title: "Serious infrastructure tone",
    description:
      "Refined UI, credible messaging, and structured sections that feel enterprise-ready.",
  },
  {
    eyebrow: "International",
    title: "Global service framing",
    description:
      "English copy and globally legible layout for broader market positioning.",
  },
];

const stackCards = [
  {
    label: "Security",
    text: "Private-by-default infrastructure posture",
  },
  {
    label: "Performance",
    text: "Clean architecture for reliable server delivery",
  },
  {
    label: "Support",
    text: "Human communication with faster operational response",
  },
];

const marqueeItems = [
  "Private Servers",
  "Dedicated Environments",
  "Secure Provisioning",
  "Operational Reliability",
  "International Deployment",
  "Private Servers",
  "Dedicated Environments",
  "Secure Provisioning",
];

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#hero" className="brand" aria-label="Dannz Cloud home">
          <span className="brand-mark">DC</span>
          <span className="brand-text">
            <strong>Dannz Cloud</strong>
            <small>Private Infrastructure</small>
          </span>
        </a>

        <nav className="nav">
          <a href="#solutions">Solutions</a>
          <a href="#why-us">Why Us</a>
          <a href="#proof">Trust</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="button button-ghost">
          Start Securely
        </a>
      </header>

      <main>
        <section className="hero section" id="hero">
          <Reveal className="hero-copy">
            <div className="eyebrow">
              Built for modern operators, teams, and serious workloads
            </div>
            <h1>Cloud servers that look premium because the infrastructure is.</h1>
            <p className="hero-text">
              Dannz Cloud provides high-trust private server solutions for
              businesses, developers, agencies, and digital operators who need
              performance, control, and support without the noise.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Deploy With Confidence
              </a>
              <a href="#solutions" className="button button-secondary">
                Explore Server Options
              </a>
            </div>

            <div className="hero-trust">
              <div>
                <strong>99.9%</strong>
                <span>Target uptime commitment</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Operational support coverage</span>
              </div>
              <div>
                <strong>Fast</strong>
                <span>Provisioning for private workloads</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <div className="status-card glass">
              <div className="status-row">
                <span className="dot" />
                <p>Infrastructure Status</p>
                <strong>Stable</strong>
              </div>
              <div className="status-grid">
                <div>
                  <span>Server Type</span>
                  <strong>Private Cloud Node</strong>
                </div>
                <div>
                  <span>Provisioning</span>
                  <strong>Automated</strong>
                </div>
                <div>
                  <span>Security Layer</span>
                  <strong>Managed</strong>
                </div>
                <div>
                  <span>Coverage</span>
                  <strong>International Ready</strong>
                </div>
              </div>
            </div>

            <div className="floating-panel glass panel-a">
              <span>Routing</span>
              <strong>Low-latency network paths</strong>
            </div>

            <div className="floating-panel glass panel-b">
              <span>Protection</span>
              <strong>Private-first deployment model</strong>
            </div>
          </Reveal>
        </section>

        <Reveal as="section" className="section marquee">
          <p>Trusted positioning for high-value digital operations</p>
          <div className="marquee-row">
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </Reveal>

        <section className="section solutions" id="solutions">
          <Reveal className="section-heading">
            <div className="eyebrow">Solutions</div>
            <h2>
              Server products designed to feel credible before the first sales
              call.
            </h2>
            <p>
              A focused product stack for clients who want fast deployment,
              stronger control, and clean service positioning.
            </p>
          </Reveal>

          <div className="card-grid">
            {solutions.map((solution) => (
              <Reveal as="article" className="info-card" key={solution.id}>
                <div className="card-icon">{solution.id}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section why-us" id="why-us">
          <Reveal className="section-heading">
            <div className="eyebrow">Why Dannz Cloud</div>
            <h2>
              Modern visual identity backed by signals that reduce buyer
              hesitation.
            </h2>
          </Reveal>

          <div className="feature-layout">
            <Reveal className="feature-main glass">
              <h3>Built to communicate trust at first glance</h3>
              <p>
                The platform story is clear: strong infrastructure, direct
                service model, clean support experience, and dependable
                execution for serious operators.
              </p>
              <ul className="feature-list">
                <li>
                  Professional cloud-first branding with enterprise visual
                  language
                </li>
                <li>
                  Mobile and desktop layouts tuned for readability and
                  conversion
                </li>
                <li>
                  Motion design used to reinforce hierarchy, not distract from
                  it
                </li>
              </ul>
            </Reveal>

            <div className="feature-stack">
              {stackCards.map((card) => (
                <Reveal as="article" className="mini-card" key={card.label}>
                  <span>{card.label}</span>
                  <strong>{card.text}</strong>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section proof" id="proof">
          <div className="proof-grid">
            {proofCards.map((card) => (
              <Reveal as="article" className="proof-card" key={card.title}>
                <div className="eyebrow">{card.eyebrow}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="testimonial glass">
            <p>
              &ldquo;Dannz Cloud gives the impression of a provider that
              understands infrastructure discipline. The presentation is clean,
              credible, and conversion-ready for premium server buyers.&rdquo;
            </p>
            <strong>Positioning Direction</strong>
          </Reveal>
        </section>

        <section className="section cta" id="contact">
          <Reveal className="cta-panel">
            <div>
              <div className="eyebrow">Launch Dannz Cloud</div>
              <h2>
                Ready to present your server business like a premium
                infrastructure brand?
              </h2>
              <p>
                Use this landing page as the front door for private server
                sales, consultations, and direct customer onboarding.
              </p>
            </div>
            <div className="cta-actions">
              <a
                href="mailto:hello@dannzcloud.com"
                className="button button-primary"
              >
                Contact Sales
              </a>
              <a href="#hero" className="button button-secondary">
                Back to Top
              </a>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
