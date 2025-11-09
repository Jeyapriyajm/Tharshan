// src/pages/Index.jsx
import { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import profileColor from "../assets/profile-bw-1.png";
import "../index.css";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedFilter, setSelectedFilter] = useState("All");

  /* -------------------------------------------------
     Scroll-spy – highlight the current nav item
  ------------------------------------------------- */
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "education",
      "certifications",
      "languages",
      "projects",
      "leadership",
      "contact",
    ];

    const onScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for fixed header
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------------------------
     IntersectionObserver – reveal animation
  ------------------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------
     Projects data
  ------------------------------------------------- */
  const projects = [
    {
      title: "PrintHub — Smart Campus Printing App",
      description:
        "Mobile app UI designed to simplify student printing in hostels with no nearby photocopy facilities. Features document upload flows, auto-calculated cost & time estimates, print status tracking, and online payment interfaces. Prototype testing showed faster access and reduced printing wait times.",
      tags: [
        "Mobile",
        "Figma",
        "UI/UX Design",
        "Prototyping",
        "Automation Integration",
      ],
      figma:
        "https://www.figma.com/design/yyBvX5zKgTKuk0Vt69eKbw/Printhub?node-id=0-1&t=EROB5V7XrHKEChhH-1",
      type: "Mobile",
    },
    {
      title: "UniBuzz — Student Networking & Events",
      description:
        "Mobile app solving event discovery issues. Mobile-first flows with calendar, RSVP, club discovery, and notifications increased participation based on prototype tests.",
      tags: ["Mobile", "Figma", "Prototyping", "UX Research"],
      demo: "https://drive.google.com/file/d/1Y61qmOTDlPAtJ1SdgWP9MaAmd4vy0b9f/view?usp=sharing",
      type: "Mobile",
    },
    {
      title: "Fresh Fruits — E-commerce UI",
      description:
        "Mobile app reducing cart abandonment with clean cards and one-page checkout. Simplified purchase flow from 6 to 3 steps with clear CTAs and stock states.",
      tags: ["Mobile", "E-commerce", "Responsive", "IA"],
      figma:
        "https://www.figma.com/design/XxAAS3AIujlGkxASkZ2KQg/John-Fresh-Fruits?node-id=0-1",
      type: "Mobile",
    },
    {
      title: "NRS Repair — Service Booking & Tracking",
      description:
        "Mobile app with guided booking and live status tracking. Improved visibility reduced support calls and shortened booking time in scenario tests.",
      tags: ["Mobile", "Dashboard", "UX Writing"],
      figma:
        "https://www.figma.com/design/arY7yZ7nJceIMN11zVCl8J/NRS-Repair?node-id=0-1",
      type: "Mobile",
    },
    {
      title: "Account Manager — Personal Finance UI",
      description:
        "Mobile app for financial tracking with category tagging, filters, and monthly insights. Usability tests showed faster retrieval and better budgeting decisions.",
      tags: ["Mobile", "Data Viz", "Fintech", "Accessibility"],
      figma:
        "https://www.figma.com/design/cLc34AQJc0Nk98Izdcn2Ve/Account-Manager?node-id=0-1",
      type: "Mobile",
    },
  ];

  const filters = ["All", "Mobile"];
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.type === selectedFilter);

  /* -------------------------------------------------
     Smooth scroll helper
  ------------------------------------------------- */
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* -------------------------------------------------
     Render
  ------------------------------------------------- */
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ----- Fixed Nav ----- */}
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: "#151517", // card color
          borderBottom: "1px solid #2a2a30", // border color
          backdropFilter: "blur(10px)",
        }}
      >
        <nav
          className="mx-auto"
          style={{ maxWidth: "1100px", padding: "1rem" }}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollTo("hero")}
              className="text-xl font-bold"
              style={{ color: "#ffd138" }} // yellow accent
            >
              Portfolio
            </button>

            <div className="hidden md:flex gap-6">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  style={{
                    color:
                      activeSection === item.toLowerCase()
                        ? "#ffd138"
                        : "#e7e7ea",
                    transition: "all 0.3s",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main style={{ paddingTop: "4rem", backgroundColor: "#0d0d0e" }}>
        {/* ----- Hero ----- */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal space-y-6">
                <div
                  className="inline-block px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: "#101012", // chip bg
                    color: "#ffd138", // yellow accent
                    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                  }}
                >
                  UI/UX Designer
                </div>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  style={{ color: "#e7e7ea" }} // main text
                >
                  Tharshan
                  <br />
                  <span style={{ color: "#ffd138" }}>Mahalingam</span>
                </h1>
                <p style={{ color: "#9a9aa3", maxWidth: "40rem" }}>
                  Creative, detail-oriented designer crafting user-centered,
                  accessible experiences. Building clean interfaces with Figma
                  and passion.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollTo("projects")}
                    className="px-8 py-3 rounded-full font-medium"
                    style={{
                      backgroundColor: "#ffd138",
                      color: "#101012",
                      boxShadow:
                        "0 0 25px rgba(255,209,56,.35), 0 0 60px rgba(255,209,56,.15)",
                    }}
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="px-8 py-3 rounded-full font-medium"
                    style={{
                      backgroundColor: "#151517",
                      border: "1px solid #ffd138",
                      color: "#ffd138",
                    }}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

              <div className="reveal relative flex justify-center">
                <div className="relative">
                  {/* Rotating glow ring */}
                  <div
                    className="absolute inset-0 -m-4 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,209,56,0.35) 0%, transparent 70%)",
                      filter: "blur(40px)",
                      animation: "rotate 20s linear infinite",
                    }}
                  />
                  <div
                    className="relative w-80 h-80 rounded-full overflow-hidden border-4"
                    style={{
                      borderColor: "#2a2a30",
                    }}
                  >
                    <img
                      src={profileColor}
                      alt="Tharshan Mahalingam - UI/UX Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----- About ----- */}
        <section
          id="about"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }} // page bg
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal space-y-6">
                <h2
                  className="text-4xl sm:text-5xl font-bold"
                  style={{ color: "#e7e7ea" }}
                >
                  About <span style={{ color: "#ffd138" }}>Me</span>
                </h2>
                <p style={{ color: "#9a9aa3", lineHeight: "1.8" }}>
                  I'm a 3rd-year ICT undergraduate at the University of Colombo,
                  Faculty of Technology, with a strong grasp of user-centered
                  design, wireframing, prototyping, and responsive interfaces.
                </p>
                <p style={{ color: "#9a9aa3", lineHeight: "1.8" }}>
                  Skilled in Figma and passionate about building clean,
                  accessible, intuitive experiences. Currently seeking an
                  internship to collaborate, learn, and contribute to real
                  products that make a difference.
                </p>
              </div>

              <div className="reveal flex justify-center md:justify-end">
                <div
                  className="w-72 h-72 rounded-full overflow-hidden p-2"
                  style={{
                    backgroundColor: "#151517", // card bg
                    border: "4px solid #2a2a30", // deeper card border
                  }}
                >
                  <img
                    src={profileColor}
                    alt="Tharshan Mahalingam"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----- Skills ----- */}
        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <h2
              className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center"
              style={{ color: "#e7e7ea" }}
            >
              Skills & <span style={{ color: "#ffd138" }}>Expertise</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Core UI/UX */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <h3 className="text-2xl font-bold" style={{ color: "#ffd138" }}>
                  Core UI/UX
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UI Design",
                    "UX Research",
                    "Wireframing",
                    "Prototyping",
                    "Responsive Design",
                    "Mobile-first Design",
                    "Accessibility Design",
                    "Visual Storytelling",
                    "Design Thinking",
                    "Color Theory",
                    "Typography",
                    "Visual Hierarchy",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Methods */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <h3 className="text-2xl font-bold" style={{ color: "#ffd138" }}>
                  Tools & Methods
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "Adobe XD",
                    "FigJam",
                    "Usability Testing",
                    "Heuristic Evaluation",
                    "Design Systems",
                    "Component Libraries",
                    "User Flows",
                    "Information Architecture",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <h3 className="text-2xl font-bold" style={{ color: "#ffd138" }}>
                  Professional
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Content Creation",
                    "Event Coordination",
                    "Time Management",
                    "Leadership",
                    "Project Management",
                    "Communication",
                    "Team Collaboration",
                    "Independent Thinking",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----- Education ----- */}
        <section
          id="education"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <h2
              className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center"
              style={{ color: "#e7e7ea" }}
            >
              <span style={{ color: "#ffd138" }}>Education</span>
            </h2>

            <div className="space-y-6">
              {/* B.ICT */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      B.ICT (Hons)
                    </h3>
                    <p style={{ color: "#e7e7ea" }}>
                      University of Colombo, Faculty of Technology
                    </p>
                  </div>
                  <span style={{ color: "#9a9aa3" }}>
                    2023 – Reading (3rd Year)
                  </span>
                </div>
                <p style={{ color: "#9a9aa3" }}>
                  The Faculty of Technology at University of Colombo is Sri
                  Lanka's premier institution for applied technology education,
                  known for its industry-aligned curriculum and strong emphasis
                  on practical skills in software development, networking, and
                  emerging technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "Networking",
                    "Databases",
                    "UI/UX Design",
                  ].map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* A/L */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      GCE A/L (Bio-Systems Technology)
                    </h3>
                    <p style={{ color: "#e7e7ea" }}>Z-Score: 1.952</p>
                  </div>
                  <span style={{ color: "#9a9aa3" }}>2019 – 2021</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["BST — A", "SFT — A", "ICT — B"].map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                      }}
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Diploma */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      Diploma in English
                    </h3>
                    <p style={{ color: "#e7e7ea" }}>ESOFT Metro Campus</p>
                  </div>
                  <span style={{ color: "#9a9aa3" }}>2022</span>
                </div>
                <p style={{ color: "#9a9aa3" }}>
                  Gained fluency in English communication, advanced grammar, and
                  spoken language skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ----- Certifications ----- */}
        <section
          id="certifications"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <h2
              className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center"
              style={{ color: "#e7e7ea" }}
            >
              <span style={{ color: "#ffd138" }}>Certifications</span>
            </h2>

            <div className="space-y-6">
              {/* Python */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      Python for Beginners
                    </h3>
                    <p style={{ color: "#e7e7ea" }}>University of Moratuwa</p>
                  </div>
                </div>
                <p style={{ color: "#9a9aa3" }}>
                  Gained a solid foundation in Python programming, covering
                  syntax, logic building, and problem-solving for real-world
                  applications.
                </p>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#9a9aa3", fontSize: "0.875rem" }}>
                    Code: IvKFd53WYq
                  </span>
                  <a
                    href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#ffd138",
                      fontSize: "0.875rem",
                      textDecoration: "underline",
                    }}
                    className="inline-flex items-center gap-2"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Figma */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      User Interface Design with Figma
                    </h3>
                    <p style={{ color: "#e7e7ea" }}>Alison</p>
                  </div>
                </div>
                <p style={{ color: "#9a9aa3" }}>
                  Learned to design intuitive and visually appealing interfaces
                  using Figma, focusing on layout, prototyping, and user
                  experience principles.
                </p>
                <a
                  href="https://alison.com/certification/check/cf29e131fd"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffd138",
                    fontSize: "0.875rem",
                    textDecoration: "underline",
                  }}
                  className="inline-flex items-center gap-2"
                >
                  Verify Credential <ExternalLink size={14} />
                </a>
              </div>

              {/* SEO */}
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      The Ultimate SEO Blueprint
                    </h3>
                    <p style={{ color: "#e7e7ea" }}>Alison</p>
                  </div>
                </div>
                <p style={{ color: "#9a9aa3" }}>
                  Mastered search engine optimization strategies, including
                  keyword research, on-page optimization, and analytics to
                  improve website visibility and rankings.
                </p>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#9a9aa3", fontSize: "0.875rem" }}>
                    Code: 4146-47127065
                  </span>
                  <a
                    href="https://alison.com/certification/check/a60a055cd6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#ffd138",
                      fontSize: "0.875rem",
                      textDecoration: "underline",
                    }}
                    className="inline-flex items-center gap-2"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----- Languages ----- */}
        <section
          id="languages"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <h2
              className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center"
              style={{ color: "#e7e7ea" }}
            >
              <span style={{ color: "#ffd138" }}>Languages</span>
            </h2>

            <div className="space-y-6">
              {[
                { name: "Tamil", level: "Native", percent: "100%" },
                { name: "English", level: "Intermediate", percent: "70%" },
                { name: "Sinhala", level: "Limited", percent: "40%" },
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="reveal p-6 rounded-lg"
                  style={{
                    backgroundColor: "#151517",
                    border: "1px solid #2a2a30",
                    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                  }}
                >
                  <div
                    className="flex justify-between mb-2"
                    style={{ color: "#e7e7ea" }}
                  >
                    <span>{lang.name}</span>
                    <span style={{ color: "#ffd138" }}>{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-[#9a9aa3]/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ffd138]"
                      style={{ width: lang.percent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----- Projects ----- */}
        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <h2
              className="reveal text-4xl sm:text-5xl font-bold mb-8 text-center"
              style={{ color: "#e7e7ea" }}
            >
              Featured <span style={{ color: "#ffd138" }}>Projects</span>
            </h2>

            {/* Filter */}
            <div className="reveal flex justify-center gap-3 mb-12 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className="px-6 py-2 rounded-full font-medium transition-all active:scale-[0.98]"
                  style={
                    selectedFilter === f
                      ? {
                          backgroundColor: "#ffd138",
                          color: "#101012",
                          boxShadow:
                            "0 0 25px rgba(255,209,56,.35), 0 0 60px rgba(255,209,56,.15)",
                        }
                      : {
                          backgroundColor: "#151517",
                          color: "#e7e7ea",
                          border: "1px solid #2a2a30",
                        }
                  }
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((p, i) => (
                <div
                  key={i}
                  className="reveal p-8 space-y-4 rounded-lg"
                  style={{
                    backgroundColor: "#151517",
                    border: "1px solid #2a2a30",
                    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                  }}
                >
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#ffd138" }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: "#9a9aa3" }}>{p.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: "#101012",
                          border: "1px solid #2a2a30",
                          color: "#e7e7ea",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all"
                        style={{
                          backgroundColor: "#ffd138",
                          color: "#101012",
                          boxShadow:
                            "0 0 25px rgba(255,209,56,.35), 0 0 60px rgba(255,209,56,.15)",
                        }}
                      >
                        Demo <ExternalLink size={16} />
                      </a>
                    )}
                    {p.figma && (
                      <a
                        href={p.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all"
                        style={{
                          backgroundColor: "#151517",
                          color: "#e7e7ea",
                          border: "1px solid #2a2a30",
                        }}
                      >
                        Figma <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ----- Leadership ----- */}
        <section
          id="leadership"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="container mx-auto">
            <h2
              className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center"
              style={{ color: "#e7e7ea" }}
            >
              Leadership & <span style={{ color: "#ffd138" }}>Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      President
                    </h3>
                    <p style={{ color: "#e7e7ea", fontSize: "1rem" }}>
                      Hindu Society
                    </p>
                  </div>
                  <span style={{ color: "#9a9aa3", fontSize: "0.875rem" }}>
                    2025 – Present
                  </span>
                </div>
                <p style={{ color: "#9a9aa3" }}>
                  Leading fundraising and sponsorship initiatives, planning
                  cultural events, and fostering collaboration across university
                  societies. Overseeing executive team and managing society
                  operations.
                </p>
              </div>

              <div
                className="reveal p-8 space-y-4 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#ffd138" }}
                    >
                      Committee Member
                    </h3>
                    <p style={{ color: "#e7e7ea", fontSize: "1rem" }}>
                      Student Union
                    </p>
                  </div>
                  <span style={{ color: "#9a9aa3", fontSize: "0.875rem" }}>
                    2025 – Present
                  </span>
                </div>
                <p style={{ color: "#9a9aa3" }}>
                  Representing student interests, resolving issues, and
                  contributing to faculty decision-making processes. Active
                  participation in improving student experience and campus life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----- Contact ----- */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0d0d0e" }}
        >
          <div className="container mx-auto max-w-4xl">
            <h2
              className="reveal text-4xl sm:text-5xl font-bold mb-12 text-center"
              style={{ color: "#e7e7ea" }}
            >
              Get in <span style={{ color: "#ffd138" }}>Touch</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Info */}
              <div className="reveal space-y-6">
                <div
                  className="p-6 space-y-4 rounded-lg"
                  style={{
                    backgroundColor: "#151517",
                    border: "1px solid #2a2a30",
                    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                  }}
                >
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "#ffd138" }}
                  >
                    Contact Information
                  </h3>

                  <a
                    href="mailto:tharsh0728@gmail.com"
                    className="flex items-center gap-3"
                    style={{ color: "#9a9aa3" }}
                  >
                    <Mail className="text-[#ffd138]" size={20} />{" "}
                    tharsh0728@gmail.com
                  </a>

                  <a
                    href="tel:+94759985580"
                    className="flex items-center gap-3"
                    style={{ color: "#9a9aa3" }}
                  >
                    <Phone className="text-[#ffd138]" size={20} /> +94 75 998
                    5580
                  </a>

                  <a
                    href="https://linkedin.com/in/tharshan0728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                    style={{ color: "#9a9aa3" }}
                  >
                    <Linkedin className="text-[#ffd138]" size={20} />{" "}
                    linkedin.com/in/tharshan0728
                  </a>

                  <a
                    href="https://www.behance.net/tharshan1/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                    style={{ color: "#9a9aa3" }}
                  >
                    <svg
                      className="w-5 h-5 text-[#ffd138]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.5 15h-2v-6h2v6zm-1-7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 7.5h-2v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17h-2v-6h2v.83c.58-.9 1.62-1.33 2.67-1.33 1.93 0 3.33 1.38 3.33 3.5V17z" />
                    </svg>
                    behance.net/tharshan1
                  </a>
                </div>
              </div>

              {/* Form */}
              <div
                className="reveal p-8 rounded-lg"
                style={{
                  backgroundColor: "#151517",
                  border: "1px solid #2a2a30",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                }}
              >
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#e7e7ea" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                        focusBorderColor: "#ffd138",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#e7e7ea" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="msg"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#e7e7ea" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="msg"
                      required
                      rows={4}
                      placeholder="Your message..."
                      className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{
                        backgroundColor: "#101012",
                        border: "1px solid #2a2a30",
                        color: "#e7e7ea",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-full font-medium hover:shadow-glow transition-all active:scale-[0.98]"
                    style={{
                      backgroundColor: "#ffd138",
                      color: "#101012",
                      boxShadow:
                        "0 0 25px rgba(255,209,56,.35),0 0 60px rgba(255,209,56,.15)",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ----- Footer ----- */}
        <footer
          className="py-8 px-4 sm:px-6 lg:px-8 border-t"
          style={{ borderColor: "#2a2a30", backgroundColor: "#0d0d0e" }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p style={{ color: "#9a9aa3", fontSize: "0.875rem" }}>
                © {new Date().getFullYear()} Tharshan Mahalingam. All rights
                reserved.
              </p>

              <div className="flex gap-6">
                {["About", "Projects", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(link.toLowerCase())}
                    style={{ color: "#9a9aa3", fontSize: "0.875rem" }}
                    className="hover:text-[#ffd138] transition-colors active:scale-95"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
