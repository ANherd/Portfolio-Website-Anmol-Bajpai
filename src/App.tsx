import { useEffect, useState } from "react";

const A = "/assets/";

type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  detailLeft: string;
  detailRight: string;
  hero: string;
  images: { src: string; className?: string; alt: string }[];
  topFooter?: boolean;
};

const projects: Project[] = [
  {
    slug: "jinendra-peda",
    number: "01",
    title: "Jinendra Peda",
    subtitle: "Packaging Design",
    intro:
      "This project was a redesign of the existing sweet packaging for Jinendra Peda. The owner felt that the old packaging was becoming outdated and wanted a fresh, festive look, especially with Diwali approaching. I explored different visual elements and chose a simple rangoli-inspired border to reflect the festive context. As someone familiar with these cultural traditions, I wanted the design to feel festive for Diwali while still working for regular sweets throughout the year. The triangular elements along the edges resemble lanterns, and I also created a logo representing petha boiling in a container, with its shape inspired by the dough of peda.",
    detailLeft:
      "I chose rangoli-inspired elements because the owner emphasized Diwali and other festivals. Being familiar with these traditions, I also looked into how rangoli is used during festivals and pooja. I wanted to keep the design simple so that the rangoli-inspired border could work for Diwali while still feeling appropriate for regular sweets and other festivities throughout the year.",
    detailRight:
      "The project included visual inspiration, explorations of different design elements, the final packaging design, and packaging mockups. The visuals show how the festive elements and logo came together in the final packaging.",
    hero: "537ad.png",
    images: [
      { src: "f84e2.png", alt: "Jinendra Peda box packaging mockup" },
      {
        src: "1cf1c.png",
        className: "project-image half",
        alt: "Early package sketches and dieline",
      },
      {
        src: "d33a5.png",
        className: "project-image half",
        alt: "Final Jinendra Peda package artwork",
      },
      { src: "537ad.png", alt: "Jinendra Peda campaign presentation" },
    ],
  },
  {
    slug: "gaurav-pandey",
    number: "02",
    title: "Gaurav Pandey",
    subtitle: "Logo and Business Card Design",
    intro:
      "This project involved designing a professional logo and business card identity for Advocate Gaurav K. Pandey, based in Jabalpur, Madhya Pradesh. The aim was to create a visual identity that reflects professionalism, fairness, and neutrality—qualities essential to legal practice. The design focused on a minimalist monogram and balanced typography to communicate trust and authority.",
    detailLeft:
      "I explored different logo concepts and monogram ideas through sketches. I then developed the selected direction into a visual identity, focusing on a minimal design and balanced typography. The final identity was applied to the business card to create a consistent and professional visual presentation.",
    detailRight:
      "The project included early logo sketches, monogram explorations, the selected logo, and business card applications. These visuals show how the identity developed from initial ideas into a final professional design.",
    hero: "613a5.png",
    images: [
      { src: "a049e.png", alt: "Gaurav Pandey logo exploration sketches" },
      { src: "e0d63.png", alt: "Gaurav Pandey business card mockup" },
    ],
  },
  {
    slug: "screen-printing",
    number: "03",
    title: "Screen Printing",
    subtitle: "Merch Design",
    intro:
      "This project explores the creation of surface patterns and illustrations inspired by desert landscapes and movement. I translated visual elements such as dunes, wind flow, and travel into repeatable patterns suitable for textiles. The project focused on combining illustration and pattern design to create visually dynamic and cohesive compositions.",
    detailLeft:
      "I explored visual elements inspired by desert landscapes, including dunes, wind flow, and movement. I developed these elements into illustrations and repeatable patterns, exploring how they could work together across different compositions and merch applications.",
    detailRight:
      "The project included pattern explorations, illustrations, and merch applications. The visuals show how the patterns could be translated onto different products while maintaining a cohesive visual language.",
    hero: "eacd4.png",
    images: [
      { src: "2cf89.png", alt: "Carry Art Carry Stories tote bag campaign" },
      { src: "28910.png", alt: "Art You Can Wear hoodie campaign" },
      { src: "1f515.png", alt: "Illustrated hoodie back detail" },
    ],
  },
  {
    slug: "bloom",
    number: "04",
    title: "Bloom",
    subtitle: "Digital Experience",
    intro:
      "Bloom is a project that explores how design can support communication and connection within families. The project looks at creating a space where people can express themselves and feel supported. The app explores how digital experiences can create safer spaces for emotional expression, especially in households where conversations around mental health can be difficult due to generational and cultural barriers.",
    detailLeft:
      "My work focused on the app's user experience and interaction design. The project explored ways for people to communicate, reflect, and access support through the app. The design exploration included ideas such as journaling, a safe space, and ways to encourage communication. These features were intended to make personal interactions feel more approachable and comfortable.",
    detailRight:
      "The project included research, ideation, wireframes, and interface explorations. The visuals show how ideas around emotional expression and family communication were translated into a digital experience.",
    hero: "5951d.png",
    topFooter: true,
    images: [
      { src: "1d96e.png", className: "project-image split-wide", alt: "Bloom research board" },
      { src: "96c5d.png", className: "project-image split-narrow", alt: "Bloom problem statement" },
      { src: "85c3a.png", alt: "Bloom medium fidelity wireframes" },
      { src: "b6216.png", alt: "Bloom application screen collection" },
      { src: "94240.png", alt: "Bloom final mobile application screens" },
    ],
  },
  {
    slug: "ayur",
    number: "05",
    title: "Āyur",
    subtitle: "Herbal Knowledge and Community",
    intro:
      "Āyur is a community-driven mobile application designed to preserve and share traditional herbal knowledge and remedies that are gradually being lost due to generational gaps in India. The platform combines herbal learning, community interaction, and AI-assisted development to create an accessible digital space where users can discover remedies, document experiences, and learn from verified contributors. The project explores how technology can support the preservation of culturally rooted knowledge systems while making them accessible to younger generations.",
    detailLeft:
      "The project explored how traditional herbal knowledge could be shared through a digital platform. I developed the app interface around herbal learning, community interaction, and documenting knowledge. The visual explorations show how the platform could make traditional remedies and information more accessible to users.",
    detailRight:
      "The project included app interface explorations, mobile screens, and visual presentations of the platform. These visuals show how the app could support the discovery, sharing, and preservation of traditional herbal knowledge.",
    hero: "51ff8.png",
    images: [
      { src: "e6dc1.png", alt: "Āyur research mind map" },
      { src: "a18cb.png", alt: "Āyur mobile application screens" },
      { src: "2302c.png", alt: "Āyur final onboarding and home screens" },
    ],
  },
];

function navigate(path: string, anchor?: string) {
  window.location.hash = path;
  window.setTimeout(() => {
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, 0);
}

function Cover() {
  const go = (anchor: string) => navigate("home", anchor);
  return (
    <main className="cover">
      <nav className="cover-nav" aria-label="Portfolio navigation">
        <button onClick={() => go("about")}>About Me</button>
        <button onClick={() => go("work")}>My Work</button>
        <button onClick={() => go("education")}>Education</button>
        <button onClick={() => go("contact")}>Contact</button>
      </nav>
      <div className="cover-word" aria-label="Portfolio">
        <span className="po">PO</span>
        <span className="rt">RT</span>
        <span className="fo">FO</span>
        <span className="lio">LIO</span>
      </div>
      <img className="cover-dot dot-one" src={`${A}fa6d0.svg`} alt="" />
      <img className="cover-dot dot-two" src={`${A}a4cdf.svg`} alt="" />
      <p className="cover-caption">
        2024 – 2026
        <br />
        Human-centered designer
      </p>
      <button className="cover-enter" onClick={() => navigate("home")}>
        Enter portfolio →
      </button>
    </main>
  );
}

function Header() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <header className="site-header">
      <button className="brand" onClick={() => scroll("about")}>
        Anmol Bajpai
      </button>
      <nav>
        <button onClick={() => scroll("about")}>About Me</button>
        <button onClick={() => scroll("work")}>My Work</button>
        <button onClick={() => scroll("education")}>Education</button>
        <button onClick={() => scroll("contact")}>Contact</button>
      </nav>
    </header>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <button className="project-card" onClick={() => navigate(project.slug)}>
      <span className="folder-tab">
        <img src={`${A}179ca.svg`} alt="" />
        Project {project.number}
      </span>
      <span className="folder-body">
        <span className="card-image">
          <img src={`${A}${project.hero}`} alt="" />
        </span>
        <strong>{project.title}</strong>
        <small>{project.subtitle}</small>
        <span className="open">Open →</span>
      </span>
    </button>
  );
}

function Home() {
  return (
    <main className="home">
      <Header />
      <section className="about" id="about">
        <div className="about-copy">
          <h1>Anmol Bajpai</h1>
          <p className="lead">HCD Student · Human-Centred Design</p>
          <p>
            I’m an HCD student.
            <br />
            <br />
            I’m Anmol Bajpai, an art and design student majoring in Human-Centered Design at Srishti
            Manipal Institute, Bangalore. I believe in exploring creativity through curiosity,
            storytelling, and personal experience. My work often blends imagination with real-world
            observation—whether it’s creating lifeforms from nature or designing systems that make
            people think. I enjoy working across mediums and like to express complex ideas in
            simple, visual ways. I’m driven by a desire to understand people, environments, and how
            design can quietly shape both.
          </p>
        </div>
        <div className="portrait">
          <img src={`${A}8a174.png`} alt="Anmol Bajpai" />
        </div>
      </section>
      <section className="work" id="work">
        <h2>My Work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="info" id="education">
        <div className="info-row">
          <h2>Education</h2>
          <div>
            <h3>Human-Centered Design (HCD)</h3>
            <p>
              Bachelor of Design
              <br />
              Srishti Manipal Institute, Bengaluru
            </p>
            <p>2024–2028</p>
          </div>
        </div>
        <div className="info-row" id="contact">
          <h2>Contact</h2>
          <div>
            <h3>Anmol Bajpai</h3>
            <a href="mailto:anmolbajpai263@gmail.com">Email: anmolbajpai263@gmail.com</a>
            <a href="https://www.linkedin.com/in/bajpai-anmol" target="_blank" rel="noreferrer">
              LinkedIn: linkedin.com/in/bajpai-anmol
            </a>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <button onClick={() => navigate("cover")}>← Back to Home page</button>
      </footer>
    </main>
  );
}

function Footer() {
  return <footer className="case-footer">Anmol Bajpai</footer>;
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <main className="case-page">
      {project.topFooter && <Footer />}
      <article className="case-content">
        <button className="back" onClick={() => navigate("home", "work")}>
          ← Back to My Work
        </button>
        <section className="case-hero">
          <div className="case-overview">
            <span className="case-number">{project.number}</span>
            <div className="case-title">
              <h1>{project.title}</h1>
              <p>{project.subtitle}</p>
            </div>
            <p className="case-intro">{project.intro}</p>
          </div>
          <figure className="hero-image">
            <img src={`${A}${project.hero}`} alt={`${project.title} project cover`} />
          </figure>
        </section>
        <section className="case-details">
          <div className="detail-copy">
            <div>
              <h2>Project details</h2>
              <p>{project.detailLeft}</p>
            </div>
            <p>{project.detailRight}</p>
          </div>
          <div className={`visuals visuals-${project.slug}`}>
            {project.images.map((image, index) => (
              <figure className={image.className || "project-image"} key={image.src + index}>
                <img src={`${A}${image.src}`} alt={image.alt} />
              </figure>
            ))}
          </div>
        </section>
        <div className="return-nav">
          <button className="back" onClick={() => navigate("home", "work")}>
            ← Back to My Work
          </button>
        </div>
      </article>
      {!project.topFooter && <Footer />}
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "cover");
  useEffect(() => {
    const update = () => setRoute(window.location.hash.slice(1) || "cover");
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  if (route === "cover") return <Cover />;
  if (route === "home") return <Home />;
  return <CaseStudy project={projects.find((project) => project.slug === route) || projects[0]} />;
}
