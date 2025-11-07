export default function About() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Long Vuong</h1>
          <h2 className="gradient-text">
            Implementation Engineer &amp; Data Specialist
          </h2>
          <p className="hero-description">
            Transforming complex data into actionable business insights through
            advanced analytics, automation, and digital transformation
            strategies.
          </p>
          {/* <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Markets Supported</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Data-Driven</span>
            </div>
          </div> */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a
              href="mailto:long.t.vuong@gmail.com"
              className="btn btn-secondary"
            >
              <i className="fas fa-envelope"></i> Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
