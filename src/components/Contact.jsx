import { EMAIL, GITHUB } from '../data/content';

export default function Contact() {
  return (
    <section className="section section-tint contact" id="contact" aria-labelledby="contact-title">
      <div className="container narrow center">
        <h2 id="contact-title">Let's build something.</h2>
        <p>Have an idea, a question, or an opportunity? I'd love to hear from you.</p>
        <div className="btn-row btn-row-center">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>Email me</a>
          <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
