import Tags from './Tags';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <section className="section section-tint" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title">Skills</h2>
        <div className="skill-grid">
          {skills.map((s) => (
            <article className="skill-card" id={s.id} key={s.id}>
              <h3>{s.title}</h3>
              <Tags items={s.items} className={s.soft ? 'tags-soft' : ''} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
