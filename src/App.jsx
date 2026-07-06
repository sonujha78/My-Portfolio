import React, { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Send, Menu, X } from "lucide-react";

/*
  ================= EDIT YOUR DETAILS HERE =================
  Update the 5 variables below with your real information.
  The entire page will update automatically.
  ============================================================
*/

const PROFILE = {
  name: "Sonu Kumar Jha",
  role: "DevOps Engineer",
  tagline:
    "Hands-on experience in Linux administration, cloud infrastructure automation, and CI/CD pipelines — building scalable systems with AWS, Docker, Kubernetes, Terraform, and Ansible.",
  location: "Gurugram, India",
  email: "2jha78@gmail.com",
  phone: "+91 7982770094 | 7827443401",
  github: "https://github.com/sonujha78",
  linkedin: "https://www.linkedin.com/in/sonu-kumar-jha-570197384",
  photo: "/profile.jpeg", // your photo file
  resume: "/resume.pdf", // your resume file
};

const ABOUT =
  "I am a DevOps Engineer with a strong foundation in Linux administration and cloud infrastructure automation. I work with AWS, Terraform, and Ansible for scalable provisioning, and build CI/CD pipelines using Git, GitHub, and Jenkins. I have hands-on lab experience with Docker containerization and Kubernetes orchestration. With a quick learning mindset, I'm passionate about automation, reliability, and building high-performance systems.";

const SKILLS = [
  { name: "Linux (RHEL, Ubuntu)", level: 90 },
  { name: "AWS (EC2, S3, IAM, VPC)", level: 80 },
  { name: "Docker", level: 85 },
  { name: "Kubernetes", level: 80 },
  { name: "Terraform", level: 75 },
  { name: "Ansible", level: 75 },
  { name: "Jenkins (CI/CD)", level: 80 },
  { name: "Git & GitHub", level: 85 },
  { name: "Python / Bash Scripting", level: 70 },
  { name: "Nginx / Apache", level: 70 },
  { name: "Prometheus & Grafana", level: 60 },
  { name: "PostgreSQL", level: 65 },
];

const EDUCATION = [
  {
    year: "09/2025",
    degree: "DevOps Master Program",
    school: "Networknuts Institute, New Delhi",
    detail: "Hands-on training in AWS, Docker, Kubernetes, Terraform, Ansible & Jenkins",
  },
  {
    year: "01/2025",
    degree: "Mathematics with Application in Computer Science (MSc MACS)",
    school: "Indira Gandhi National Open University (IGNOU), New Delhi",
    detail: "",
  },
  {
    year: "06/2020 — 12/2024",
    degree: "Competitive Exam Preparation — UPSC",
    school: "New Delhi",
    detail: "Developed strong analytical thinking, discipline & structured problem-solving skills",
  },
  {
    year: "07/2016 — 08/2019",
    degree: "Bachelor of Science (B.Sc) — Mathematics",
    school: "Babasaheb Bhimrao Ambedkar Bihar University, Bihar",
    detail: "",
  },
];

const PROJECTS = [
  {
    title: "Containerized Application Deployment",
    desc: "Built and deployed Docker containers for application environments, managing image lifecycle and container orchestration.",
    tech: ["Docker"],
    link: "#",
    code: PROFILE.github,
  },
  {
    title: "Kubernetes Deployment & Management",
    desc: "Deployed applications using Kubernetes Deployments and Services, configuring scaling, rolling updates, and service exposure.",
    tech: ["Kubernetes"],
    link: "#",
    code: PROFILE.github,
  },
  {
    title: "3-Tier Web Architecture Deployment",
    desc: "Designed and deployed a secure 3-tier architecture, configuring Nginx as a reverse proxy and integrating PostgreSQL for persistent storage.",
    tech: ["Nginx", "Flask", "PostgreSQL", "Linux"],
    link: "#",
    code: PROFILE.github,
  },
  {
    title: "CI/CD Pipeline using Jenkins & Ansible",
    desc: "Built a CI/CD pipeline using Jenkins and Ansible, automating application deployment via playbooks and ensuring consistent server setup.",
    tech: ["Jenkins", "Ansible"],
    link: "#",
    code: PROFILE.github,
  },
  {
    title: "Infrastructure Automation using Jenkins & Terraform",
    desc: "Integrated Jenkins with Terraform to automate infrastructure provisioning using version-controlled IaC scripts.",
    tech: ["Jenkins", "Terraform"],
    link: "#",
    code: PROFILE.github,
  },
  {
    title: "Containerized CI/CD Pipeline using Jenkins & Docker",
    desc: "Built a pipeline using Jenkins and Docker, automating image build and push, and deploying applications through containers.",
    tech: ["Jenkins", "Docker"],
    link: "#",
    code: PROFILE.github,
  },
  {
    title: "CI/CD Deployment on Kubernetes using Jenkins",
    desc: "Integrated Jenkins with a Kubernetes cluster to automate zero-downtime deployment through rolling updates.",
    tech: ["Jenkins", "Kubernetes"],
    link: "#",
    code: PROFILE.github,
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];

export default function App() {
  const [active, setActive] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xbdvwbpl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
    setSending(false);
  };

  return (
    <div
      style={{
        background: "#0B0C10",
        color: "#F5F3EE",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .display-font { font-family: 'Space Grotesk', sans-serif; }
        ::selection { background: #E3B23C; color: #0B0C10; }
      `}</style>

      {/* ---------- NAVBAR ---------- */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(10px)",
          background: "rgba(11,12,16,0.85)",
          borderBottom: "1px solid #1F2229",
        }}
      >
        <div
          className="navbar-inner"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="display-font"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              lineHeight: 1,
              cursor: "pointer",
            }}
            onClick={() => scrollTo("home")}
          >
            <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: -1 }}>
              S<span style={{ color: "#E3B23C" }}>J</span>
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 8,
                letterSpacing: 2,
                color: "#8B8F98",
                marginTop: -2,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Sonu Kumar Jha
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="nav-links" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: active === item.id ? "2px solid #E3B23C" : "2px solid transparent",
                  cursor: "pointer",
                  color: active === item.id ? "#E3B23C" : "#B7BAC3",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 12px",
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                marginLeft: 12,
                background: "#F5F3EE",
                color: "#0B0C10",
                border: "none",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
              }}
            >
              💬 Contact Me
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#E3B23C",
              cursor: "pointer",
              padding: 6,
            }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className="mobile-menu"
            style={{
              display: "none",
              flexDirection: "column",
              background: "#0B0C10",
              borderTop: "1px solid #1F2229",
              padding: "10px 24px 20px",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  color: active === item.id ? "#E3B23C" : "#F5F3EE",
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid #1F2229",
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                marginTop: 16,
                background: "#F5F3EE",
                color: "#0B0C10",
                border: "none",
                padding: "12px 20px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              💬 Contact Me
            </button>
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section
        id="home"
        className="hero-section"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "90px 24px 70px",
          scrollMarginTop: 80,
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* ---- LEFT: TEXT ---- */}
          <div>
            <p style={{ color: "#B7BAC3", fontSize: 18, marginBottom: 10 }}>Hello,</p>
            <h1 className="display-font" style={{ fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.15, margin: 0, fontWeight: 700 }}>
              I'm <span style={{ color: "#E3B23C" }}>{PROFILE.name}</span>
            </h1>
            <h2 className="display-font" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", lineHeight: 1.15, margin: "6px 0 0", fontWeight: 700 }}>
              {PROFILE.role}
            </h2>
            <p style={{ maxWidth: 480, color: "#B7BAC3", fontSize: 16, lineHeight: 1.7, marginTop: 20 }}>
              {PROFILE.tagline}
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
              <a
                href={PROFILE.resume}
                download
                style={{
                  background: "#F5F3EE",
                  color: "#0B0C10",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: 999,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: 15,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
              >
                ⬇ Download CV
              </a>
              <button
                onClick={() => scrollTo("projects")}
                style={{
                  background: "transparent",
                  color: "#F5F3EE",
                  border: "1px solid #2A2D35",
                  padding: "12px 24px",
                  borderRadius: 999,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: 15,
                }}
              >
                View My Work
              </button>
            </div>
            <div style={{ display: "flex", gap: 18, marginTop: 34, color: "#8B8F98" }}>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "#8B8F98" }}>
                <Github size={20} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: "#8B8F98" }}>
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PROFILE.email}`} style={{ color: "#8B8F98" }}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* ---- RIGHT: PHOTO ---- */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="display-font"
              style={{
                width: "min(360px, 80vw)",
                height: "min(360px, 80vw)",
                borderRadius: "50%",
                background: PROFILE.photo ? `url(${PROFILE.photo}) center/cover no-repeat` : "#1C1F26",
                border: "3px solid #E3B23C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 64,
                fontWeight: 700,
                color: "#E3B23C",
              }}
            >
              {!PROFILE.photo &&
                PROFILE.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <Section id="about" title="About Me" eyebrow="01">
        <p style={{ color: "#B7BAC3", fontSize: 16, lineHeight: 1.8, maxWidth: 700 }}>{ABOUT}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18, color: "#8B8F98", fontSize: 14 }}>
          <MapPin size={16} /> {PROFILE.location}
        </div>
      </Section>

      {/* ---------- SKILLS ---------- */}
      <Section id="skills" title="Skills" eyebrow="02">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {SKILLS.map((s) => (
            <div key={s.name}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6 }}>
                <span>{s.name}</span>
                <span style={{ color: "#8B8F98" }}>{s.level}%</span>
              </div>
              <div style={{ height: 6, background: "#1C1F26", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: `${s.level}%`, height: "100%", background: "#E3B23C", borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- EDUCATION ---------- */}
      <Section id="education" title="Education" eyebrow="03">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {EDUCATION.map((ed, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 24,
                padding: "20px 0",
                borderBottom: i !== EDUCATION.length - 1 ? "1px solid #1F2229" : "none",
              }}
            >
              <span style={{ color: "#E3B23C", fontSize: 14, minWidth: 110, fontWeight: 600 }}>{ed.year}</span>
              <div>
                <h3 className="display-font" style={{ margin: 0, fontSize: 18 }}>{ed.degree}</h3>
                <p style={{ margin: "4px 0", color: "#B7BAC3", fontSize: 15 }}>{ed.school}</p>
                {ed.detail && <p style={{ margin: 0, color: "#8B8F98", fontSize: 14 }}>{ed.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- PROJECTS ---------- */}
      <Section id="projects" title="Projects" eyebrow="04">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#14161B",
                border: "1px solid #1F2229",
                borderRadius: 14,
                padding: 22,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <h3 className="display-font" style={{ margin: 0, fontSize: 19 }}>{p.title}</h3>
              <p style={{ margin: 0, color: "#B7BAC3", fontSize: 14.5, lineHeight: 1.6, flexGrow: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ fontSize: 12, background: "#1C1F26", color: "#E3B23C", padding: "4px 10px", borderRadius: 20 }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 6 }}>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "#F5F3EE", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  <ExternalLink size={15} /> Live
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" style={{ color: "#8B8F98", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  <Github size={15} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- CONTACT ---------- */}
      <Section id="contact" title="Contact Me" eyebrow="05">
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <p style={{ color: "#B7BAC3", fontSize: 15.5, lineHeight: 1.7, maxWidth: 380 }}>
              Have a project, job opportunity, or just want to say hello? Fill out the form below or email me directly.
            </p>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5, color: "#B7BAC3" }}>
              <span>📧 {PROFILE.email}</span>
              <span>📞 {PROFILE.phone}</span>
              <span>📍 {PROFILE.location}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={inputStyle} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" required style={inputStyle} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" required rows={4} style={{ ...inputStyle, resize: "vertical" }} />
            <button
              type="submit"
              disabled={sending}
              style={{
                background: "#E3B23C",
                color: "#0B0C10",
                border: "none",
                padding: "12px 20px",
                borderRadius: 10,
                fontWeight: 600,
                cursor: sending ? "not-allowed" : "pointer",
                opacity: sending ? 0.7 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: 15,
              }}
            >
              <Send size={16} /> {sending ? "Sending..." : "Send Message"}
            </button>
            {sent && (
              <p style={{ color: "#7CD992", fontSize: 14, margin: 0 }}>
                ✅ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {error && (
              <p style={{ color: "#E76A6A", fontSize: 14, margin: 0 }}>
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}

            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 10 }}>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#0A66C2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#F5F3EE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B0C10",
                }}
              >
                <Github size={20} />
              </a>
            </div>
          </form>
        </div>
      </Section>

      {/* ---------- FOOTER ---------- */}
      <footer style={{ borderTop: "1px solid #1F2229", padding: "26px 24px", textAlign: "center", color: "#6B6F78", fontSize: 13.5 }}>
        © {new Date().getFullYear()} {PROFILE.name}. Made with React.
      </footer>
    </div>
  );
}

function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="page-section" style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px", scrollMarginTop: 80 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 28 }}>
        <span style={{ color: "#E3B23C", fontFamily: "'Space Grotesk', sans-serif", fontSize: 14 }}>{eyebrow}</span>
        <h2 className="display-font" style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>{title}</h2>
        <div style={{ flexGrow: 1, height: 1, background: "#1F2229" }} />
      </div>
      {children}
    </section>
  );
}

const inputStyle = {
  background: "#14161B",
  border: "1px solid #2A2D35",
  color: "#F5F3EE",
  padding: "12px 14px",
  borderRadius: 10,
  fontSize: 14.5,
  outline: "none",
  fontFamily: "inherit",
};
