import Tags from './Tags';

export default function ProjectCard({ id, title, description, tags, link }) {
  return (
    <article className="project-card" id={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Tags items={tags} className="tags-small" label="Technologies used" />
      <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">
        View on GitHub <span className="sr-only">(opens in a new tab)</span>
      </a>
    </article>
  );
}
