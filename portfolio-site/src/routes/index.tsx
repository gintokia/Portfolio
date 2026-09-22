import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, FileText, ArrowUpRight, Github } from "lucide-react";

import portrait from "@/assets/saaketh.jpg";

const TITLE = "Saaketh Chenna — Project & Program Operations Analyst";
const DESCRIPTION =
  "Portfolio of Saaketh Chenna, a Toronto-based project & program operations and business development analyst with a computer science background.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "saaketh101@gmail.com";
const PHONE = "647-571-6165";
const LINKEDIN = "https://www.linkedin.com/in/saakethchenna/";
const GITHUB = "https://github.com/gintokia";

type Job = {
  period: string;
  company: string;
  role: string;
  location: string;
  blurb: string;
  points: string[];
  tags: string[];
};

const jobs: Job[] = [
  {
    period: "Jun 2026 — Aug 2026",
    company: "Cardio Study",
    role: "Business Development Analyst",
    location: "Toronto, ON",
    blurb: "Digital healthcare company focused on cardiac diagnostics and medical device solutions.",
    points: [
      "Evaluated wearable medical devices and identified private label import opportunities through market and supplier research.",
      "Assessed products, competitors, and suppliers to support sourcing and commercialization decisions.",
      "Supported product launches through website development, marketing materials, and product messaging.",
      "Researched new business opportunities and presented strategic recommendations for growth.",
      "Explored AI automation using Zapier and generative AI to streamline social media content creation.",
    ],
    tags: ["Market Research", "Supplier Sourcing", "Competitive Analysis", "Zapier", "Generative AI", "Go-to-Market"],
  },
  {
    period: "Jan 2026 — May 2026",
    company: "AiMS Institute",
    role: "Strategy & Operations Consultant",
    location: "London, ON",
    blurb: "Business consulting firm focused on leadership, operations, and business growth.",
    points: [
      "Analyzed ambiguous business problems through market research and competitive analysis.",
      "Defined an Ideal Customer Profile (ICP) by identifying scaling SMBs and key leadership challenges.",
      "Evaluated competitors, AI platforms, and leadership frameworks to refine AiMS positioning.",
      "Analyzed SMB spending across AI, SaaS, coaching, and consulting to identify market opportunities.",
      "Collaborated with client leadership to translate research into focused go-to-market recommendations.",
    ],
    tags: ["ICP Definition", "Positioning", "Market Sizing", "Client Advisory", "Strategy"],
  },
  {
    period: "May 2023 — Aug 2024",
    company: "Celestica Inc.",
    role: "Project Management, Production Planner",
    location: "Newmarket, ON",
    blurb: "Global electronics manufacturing and supply chain solutions provider.",
    points: [
      "Led coordination of a $2M portfolio, aligning cross-functional teams and improving execution through clearer reporting and prioritization.",
      "Cleaned, validated, and structured datasets to ensure accuracy and consistency across reporting systems.",
      "Built reporting tools and dashboards that improved visibility into key metrics and enabled faster decision-making.",
      "Collaborated with engineering, project management, and operations teams to ensure accurate data tracking.",
      "Transformed complex data into actionable insights by identifying patterns that improved team alignment and speed.",
    ],
    tags: ["SAP", "Oracle ERP", "Power BI", "Excel", "ServiceNow", "Dashboards", "Production Planning"],
  },
  {
    period: "Oct 2022 — Apr 2023",
    company: "Western CS Undergraduate Society",
    role: "Project Developer",
    location: "London, ON",
    blurb: "Delivering technical projects and software solutions.",
    points: [
      "Designed and implemented software applications by translating business and user requirements into scalable solutions.",
      "Collaborated with stakeholders to deliver end-to-end projects from planning through deployment.",
      "Optimized application performance and resolved technical issues to improve reliability and user experience.",
    ],
    tags: ["JavaScript", "React", "Node.js", "SQL", "Requirements Gathering"],
  },
  {
    period: "Jan 2016 — Apr 2022",
    company: "Living Art Centre",
    role: "Activity Facilitator",
    location: "Mississauga, ON",
    blurb: "Community arts organization providing educational programs and events.",
    points: [
      "Delivered structured, customer-facing experiences while managing group activities and ensuring a positive participant experience.",
      "Applied communication and problem-solving skills to resolve conflicts, adapt to participant needs, and support program delivery.",
    ],
    tags: ["Facilitation", "Stakeholder Communication", "Program Delivery"],
  },
  {
    period: "Apr 2019 — Aug 2019",
    company: "Walmart",
    role: "Customer Experience Associate",
    location: "Mississauga, ON",
    blurb: "Global retail company offering everyday products and services through stores and online platforms.",
    points: [
      "Assisted customers with product questions, purchases, and in-store inquiries, providing efficient and friendly service while resolving concerns.",
      "Supported daily store operations by restocking merchandise, maintaining organized displays, and working with team members to keep customer areas running smoothly.",
    ],
    tags: ["Customer Service", "Store Operations", "Merchandising", "Teamwork"],
  },
  {
    period: "Jan 2017 — Aug 2017",
    company: "UCMAS Canada",
    role: "Instructor",
    location: "Mississauga, ON",
    blurb: "Educational program focused on mental math and cognitive development.",
    points: [
      "Guided students through mental math exercises, adapting explanations to different learning styles and helping them build confidence and problem-solving skills.",
      "Managed classroom activities and maintained an engaging learning environment while communicating progress and feedback to students and parents.",
    ],
    tags: ["Teaching", "Mental Math", "Classroom Management", "Communication"],
  },
];

type Project = {
  title: string;
  meta: string;
  body: string;
  links?: { label: string; href: string; icon: typeof Linkedin }[];
};

const projects: Project[] = [
  {
    title: "Strategic Planning Consulting Project",
    meta: "Project Management & Strategy · 2026",
    body: "Developed a 2026–2031 strategic plan for a client organization by translating stakeholder priorities into actionable initiatives. Produced a Project Charter, WBS, Budget, and Risk Register to support execution and governance.",
  },
  {
    title: "48-Hour Ogilvy Case Competition",
    meta: "Healthcare Strategy Challenge · 2025 – 2026",
    body: "Developed a data-driven market strategy for a pharmaceutical client by conducting rapid research and translating insights into actionable recommendations inside a 48-hour window.",
  },
  {
    title: "IEEE Conference Paper",
    meta: "Research & Analysis · 2025 – 2026",
    body: "Analyzed and researched generative AI's impact on digital content platforms, focusing on algorithmic and business implications.",
    links: [{ label: "Request the paper", href: `mailto:${EMAIL}`, icon: FileText }],
  },
  {
    title: "MMASc Student Association",
    meta: "Leadership · 2026 – Present",
    body: "Active member of the MMASc Student Association, supporting cohort programming and student representation at Western University.",
  },
  {
    title: "Portfolio Website",
    meta: "Personal Technical Platform · 2026 – Present",
    body: "Designed and developed a responsive portfolio to showcase technical projects, skills, and experience, the site you're reading now.",
    links: [{ label: "LinkedIn", href: LINKEDIN, icon: Linkedin }],
  },
  {
    title: "Western AI & Rock-Climbing Club",
    meta: "Associations · 2022 – 2024",
    body: "Member of Western AI (2022–2023) and the Western Rock-Climbing Club (2023–2024), staying close to applied AI work and an active campus community.",
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "C++", "JavaScript"] },
  { label: "Technical", items: ["React", "Node.js", "OpenCV", "SQL"] },
  { label: "Business Systems", items: ["SAP", "Oracle ERP", "Power BI", "Excel", "ServiceNow"] },
  { label: "AI Tools", items: ["ChatGPT", "Claude", "Gemini", "Copilot"] },
];

const certifications = [
  "Six Sigma White Belt — The Council for Six Sigma Certification",
  "IBM Z Xplore — Concepts",
  "IBM Z Xplore — Advanced",
];

type Repo = {
  name: string;
  title: string;
  stack: string;
  body: string;
};

const repos: Repo[] = [
  {
    name: "LLM-Decision-Tool",
    title: "Document Q&A with Citations",
    stack: "Python · Streamlit · Claude API · TF-IDF",
    body:
      "Automates the read-N-documents-and-answer-one-question step of competitor benchmarking. Retrieves the most relevant passages, then generates a sourced answer that cites each file it drew from.",
  },
  {
    name: "BI-Pipeline",
    title: "Supply Chain Risk Dashboard",
    stack: "Python · pandas · Data cleaning",
    body:
      "Mirrors the production-planning reporting work from my Celestica role: generates messy operational order data, standardizes inconsistent supplier records, computes days late, and flags at-risk programs before a manual status report would.",
  },
  {
    name: "IEEE-Style-Conference-Paper",
    title: "IEEE-Style Conference Paper",
    stack: "Research · Generative AI",
    body:
      "Research on generative AI's impact on digital content platforms, examining both the algorithmic and business implications, written for conference submission.",
  },
  {
    name: "Weather-Application",
    title: "Weather Application",
    stack: "React · Express.js · JavaScript",
    body:
      "Full-stack weather guide that surfaces current, past, and forecast conditions with maps and warnings, built to show a React front end and an Express API working together.",
  },
  {
    name: "Crypto-Trading-Strategies",
    title: "Crypto Trading Strategies",
    stack: "Java",
    body:
      "Implementation and back-testing of rule-based crypto trading strategies, comparing how each ruleset performs across market conditions.",
  },
  {
    name: "Client-Server-Game-Application",
    title: "Client–Server Game with Discovery Service",
    stack: "Python · UDP Sockets · Distributed Systems",
    body:
      "Networked multi-room game where a UDP discovery service maps room names to server addresses, handling register, deregister, and lookup so room servers and player clients find each other at runtime.",
  },
  {
    name: "Shift-Handoff-Notes",
    title: "Shift Handoff Notes",
    stack: "Python · Streamlit · SQLite",
    body:
      "Structured shift-handoff tool for workplaces where work continues across a change: hospitals, warehouses, retail, manufacturing. Logs what was completed, what's pending, and issues, flags urgent items separately, and requires the incoming shift to acknowledge with a name and timestamp instead of just opening the page.",
  },
  {
    name: "gintokia",
    title: "Portfolio Website",
    stack: "React · TanStack Start · Tailwind CSS",
    body:
      "Designed and developed this responsive portfolio to showcase technical projects, skills, and experience, the site you're reading now.",
  },
];

const navItems = [
  { id: "work", label: "Work", num: "01" },
  { id: "selected", label: "Selected", num: "02" },
  { id: "code", label: "Code", num: "03" },
  { id: "background", label: "Background", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

function SectionHeading({ num, title, note }: { num: string; title: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/25 pb-4">
      <h2 className="font-display text-4xl leading-none tracking-tight sm:text-5xl">{title}</h2>
      <span className="section-index">
        {num}
        {note ? ` / ${note}` : ""}
      </span>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-5 sm:px-8">
        <a href="#top" className="text-sm font-bold tracking-tight text-primary">
          Saaketh Chenna
        </a>
        <span className="hidden h-5 w-px bg-ink/20 sm:block" aria-hidden="true" />
        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[0.6875rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-[1.15rem]" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-[1.15rem]" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email Saaketh"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-[1.15rem]" />
          </a>
          <a
            href={`tel:+1${PHONE.replace(/-/g, "")}`}
            aria-label="Call Saaketh"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-[1.15rem]" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="paper border-b border-ink/20 px-6 py-16 sm:px-10 lg:py-24">
      <p className="section-index">Portfolio — 2026</p>
       <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Turning messy operational data into decisions teams can act on.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            I'm Saaketh, a project &amp; program operations and business development analyst based in Toronto,
            finishing my Master of Management in Applied Science at Western University. Computer science background,
            operations discipline, and a habit of asking what the numbers are actually saying.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link-chip">
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`} className="link-chip">
              <Mail className="size-4" /> {EMAIL}
            </a>
            <a href={`tel:+1${PHONE.replace(/-/g, "")}`} className="link-chip">
              <Phone className="size-4" /> {PHONE}
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="link-chip">
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </div>
        <div className="relative flex w-full max-w-sm justify-self-start lg:justify-self-end">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border border-primary/80" aria-hidden="true" />
          <img
            src={portrait}
            alt="Portrait of Saaketh Chenna"
            width={640}
            height={640}
            loading="eager"
            className="relative aspect-square w-full rounded-full border border-ink/20 object-cover object-[50%_38%] contrast-105"
          />
        </div>
      </div>
      <dl className="mt-14 grid gap-6 border-t border-ink/20 pt-8 sm:grid-cols-3">
        {[
          { k: "$2M", v: "Program portfolio coordinated at Celestica" },
          { k: "5", v: "Years across operations, strategy, and delivery" },
          { k: "2×", v: "Dean's Honour Roll, Western University" },
        ].map((stat) => (
          <div key={stat.k}>
            <dt className="font-display text-4xl leading-none text-primary">{stat.k}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="border-b border-ink/20 px-6 py-16 sm:px-10">
      <SectionHeading num="01" title="Work" note="Seven roles" />
      <div className="divide-y divide-ink/15">
        {jobs.map((job) => (
          <article key={job.company} className="grid gap-6 py-10 lg:grid-cols-[10rem_1fr]">
            <div>
              <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase tabular-nums">{job.period}</p>
              <p className="mt-2 text-xs text-muted-foreground">{job.location}</p>
            </div>
            <div>
              <h3 className="font-display text-3xl leading-tight">{job.company}</h3>
              <p className="mt-1 text-sm font-medium tracking-wide text-primary uppercase">{job.role}</p>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground italic">{job.blurb}</p>
              <ul className="mt-5 max-w-3xl space-y-2.5 text-sm leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="grid grid-cols-[1.25rem_1fr]">
                    <span className="text-primary">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="selected" className="border-b border-ink/20 px-6 py-16 sm:px-10">
      <SectionHeading num="02" title="Selected work" note="Projects & leadership" />
      <div className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col bg-background p-7 transition-colors hover:bg-surface">
            <p className="text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase">{project.meta}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.body}</p>
            {project.links ? (
              <div className="mt-6 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="link-chip">
                    <link.icon className="size-4" /> {link.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnicalProjects() {
  return (
    <section id="code" className="border-b border-ink/20 px-6 py-16 sm:px-10">
      <SectionHeading num="03" title="Technical projects" note="From GitHub" />
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Code I've written outside of work: analytics pipelines, AI tooling, and systems projects. All of it lives on{" "}
        <a href={GITHUB} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">
          github.com/gintokia
        </a>
        .
      </p>
      <div className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-2">
        {repos.map((repo) => (
          <article key={repo.name} className="flex flex-col bg-background p-7 transition-colors hover:bg-surface">
            <p className="text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase">{repo.stack}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight">{repo.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{repo.body}</p>
            <a
              href={`${GITHUB}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              className="link-chip mt-6 self-start"
            >
              <Github className="size-4" /> {repo.name}
              <ArrowUpRight className="size-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Background() {
  return (
    <section id="background" className="border-b border-ink/20 px-6 py-16 sm:px-10">
      <SectionHeading num="04" title="Background" note="Education, skills, certs" />
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Education</h3>
          <div className="mt-5 space-y-7 text-sm">
            <div>
              <p className="font-display text-2xl leading-tight">Master of Management in Applied Science</p>
              <p className="mt-1 text-muted-foreground">Western University · London, ON · Present</p>
              <p className="text-muted-foreground">Dean's Honour Roll (2026)</p>
            </div>
            <div>
              <p className="font-display text-2xl leading-tight">BSc, Computer Science</p>
              <p className="mt-1 text-muted-foreground">Western University · London, ON · 2025</p>
              <p className="text-muted-foreground">Dean's Honour Roll (2025)</p>
            </div>
          </div>

          <h3 className="mt-12 text-xs tracking-[0.2em] text-muted-foreground uppercase">Certifications</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {certifications.map((cert) => (
              <li key={cert} className="grid grid-cols-[1.25rem_1fr]">
                <span className="text-primary">—</span>
                <span className="text-muted-foreground">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Skills</h3>
          <dl className="mt-5 divide-y divide-ink/15 border-t border-ink/15">
            {skillGroups.map((group) => (
              <div key={group.label} className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr]">
                <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">{group.label}</dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="paper px-6 py-20 sm:px-10">
      <p className="section-index">05 / Contact</p>
      <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
        Open to project, program, and operations roles across Toronto.
      </h2>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
        <a href={`mailto:${EMAIL}`} className="link-chip">
          <Mail className="size-4" /> {EMAIL}
        </a>
        <a href={`tel:+1${PHONE.replace(/-/g, "")}`} className="link-chip">
          <Phone className="size-4" /> {PHONE}
        </a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link-chip">
          <Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-3.5" />
        </a>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="link-chip">
          <Github className="size-4" /> GitHub <ArrowUpRight className="size-3.5" />
        </a>
      </div>
      <p className="mt-16 border-t border-ink/20 pt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
        Saaketh Chenna · Toronto, ON, Canada
      </p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main className="mx-auto min-w-0 max-w-5xl border-x border-ink/15">
        <Hero />
        <Experience />
        <Projects />
        <TechnicalProjects />
        <Background />
        <Contact />
      </main>
    </div>
  );
}
