import { asset, GITHUB } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-photo">
          <img src={asset('profile.jpg')} alt="Portrait of Florie Mae Magsalay" width="320" height="320" />
        </div>
        <div className="hero-text">
          <p className="hero-role">BSCS Student · Web Developer</p>
          <h1 id="hero-title">Florie Mae Magsalay</h1>
          <p className="hero-desc">
            I build things for the web and I'm still learning how to build them better.
            Right now that means clean front-end code, small side projects, and shipping
            each one all the way to a live site.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
