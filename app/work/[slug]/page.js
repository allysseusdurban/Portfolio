import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="shell case-study">
      <Link className="text-link" href="/#work"><span aria-hidden="true">←</span> All work</Link>
      <header className="case-heading">
        <p className="eyebrow"><span className="accent-line" />Sample project · {project.category}</p>
        <h1>{project.title}<span className="accent">.</span></h1>
        <p>{project.summary}</p>
      </header>
      <div className={`project-image case-image project-image-${project.slug}`}>
        {/* <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1270px) 100vw, 1200px" preload /> */}
      </div>
      <div className="case-body">
        <section>
          <h2>The brief</h2>
          <p>{project.brief}</p>
        </section>
        <section>
          <h2>The approach</h2>
          <p>{project.approach}</p>
        </section>
        <ul className="tags" aria-label="Project focus">
          {project.focus.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </main>
  );
}
