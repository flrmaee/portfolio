import ProjectCard from './ProjectCard';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>
        <div className="project-grid">
          {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  );
}
