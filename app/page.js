import Image from "next/image";
import Link from "next/link";
import { profile, projects } from "./portfolio";

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <span className="art-corner top-left" />
      <span className="art-corner top-right" />
      <span className="art-corner bottom-left" />
      <span className="art-corner bottom-right" />
      <div className="orbital">
        {Array.from({ length: 12 }, (_, index) => (
          <span className="orbit" key={index} style={{ "--angle": `${index * 15}deg` }} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main id="main-content" className="shell">
      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="accent-line" />{profile.role}</p>
          <h1 id="intro-title">Allysseus Durban<br /><em>the goat</em></h1>
          <p className="hero-description">Hi, I’m {profile.name}. {profile.intro}</p>
          <div className="hero-links">
            <a className="button primary" href="#work">
              View my work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#about">
              About me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <HeroArtwork />
      </section>

      <section className="work section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <h2 id="work-title">Selected work<span className="accent">.</span></h2>
          <p>Sample projects</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.slug}>
              <Link className="project-link" href={`/work/${project.slug}`}>
                <div className={`project-image project-image-${project.slug}`}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 660px) 100vw, (max-width: 1270px) 50vw, 590px"
                  />
                </div>
                <div className="project-details">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <h2 id="about-title">About me<span className="accent">.</span></h2>
        <div className="about-copy">
          <p>{profile.bio}</p>
          <ul className="tags" aria-label="Skills">
            {profile.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Let’s talk<span className="accent">.</span></h2>
        {profile.email ? (
          <a className="button primary" href={`mailto:${profile.email}`}>
            Email me <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <p>Contact details coming soon.</p>
        )}
      </section>
    </main>
  );
}
