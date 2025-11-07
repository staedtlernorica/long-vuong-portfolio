export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Real-world solutions showcasing technical expertise</p>
        </div>
        <div className="projects-grid">
          <div
            className="project-card"
            // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
          >
            <div className="project-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>GTM Automation Pipeline</h3>
            <p>
              Automated website monitoring system using Google Cloud Platform,
              Pub/Sub, and Slack integration for daily GTM ID verification
              across multiple domains.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">GCP</span>
              <span className="tech-tag">Slack API</span>
            </div>
            <a href="case-study-1.html" className="project-link">
              View Case Study <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div
            className="project-card"
            // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
          >
            <div className="project-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Advanced GA4 Analytics</h3>
            <p>
              Complex BigQuery SQL analysis of Google Analytics 4 custom events,
              providing domain-level insights and user engagement metrics.
            </p>
            <div className="project-tech">
              <span className="tech-tag">BigQuery</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">GA4</span>
            </div>
            <a href="case-study-2.html" className="project-link">
              View Case Study <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div
            className="project-card"
            // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
          >
            <div className="project-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Geospatial Data Analysis</h3>
            <p>
              Location-based competitor analysis using OpenStreetMap data and
              Overpass API to identify business opportunities within geographic
              regions.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Overpass API</span>
              <span className="tech-tag">Geospatial</span>
            </div>
            <a href="case-study-3.html" className="project-link">
              View Case Study <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div
            className="project-card"
            // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
          >
            <div className="project-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>PII Detection Framework</h3>
            <p>
              Automated system for identifying personally identifiable
              information in URL parameters across web analytics platforms to
              ensure GDPR compliance.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">GDPR</span>
              <span className="tech-tag">Data Privacy</span>
            </div>
            <a href="case-study-4.html" className="project-link">
              View Case Study <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div
            className="project-card"
            // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
          >
            <div className="project-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Microsoft Clarity API Integration</h3>
            <p>
              Automated data extraction and transformation pipeline for
              Microsoft Clarity analytics, converting complex JSON responses
              into actionable Excel reports.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">API Integration</span>
              <span className="tech-tag">Data Pipeline</span>
            </div>
            <a href="case-study-5.html" className="project-link">
              View Case Study <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div
            className="project-card"
            // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
          >
            <div className="project-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>n8n Website Content Analyzer</h3>
            <p>
              Intelligent workflow automation for lead enrichment and
              competitive analysis using web scraping, AI summarization, and
              structured data output.
            </p>
            <div className="project-tech">
              <span className="tech-tag">n8n</span>
              <span className="tech-tag">Web Scraping</span>
              <span className="tech-tag">AI/LLM</span>
            </div>
            <a href="case-study-6.html" className="project-link">
              View Case Study <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
