import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Bridging Data Insights and Business Strategy</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Digital Analyst with 7+ years of experience specializing in
              marketing analytics, data visualization, and digital
              transformation. I excel at turning complex data into clear,
              actionable insights that drive measurable business outcomes.
            </p>
            <p>
              Currently working as a Business Analyst at Sii Poland, I've had
              the privilege of supporting digital transformation initiatives
              across European markets, from PepsiCo to Cineworld Cinemas, always
              focusing on automation and efficiency.
            </p>
            <div className="skills-grid">
              <div
                className="skill-category"
                // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
              >
                <h4>
                  {/* <i className="fas fa-chart-bar"></i>  */}
                  Analytics
                </h4>
                <ul>
                  <li>Google Analytics 4 (GA4)</li>
                  <li>Google Tag Manager</li>
                  <li>Marketing Analytics</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
              <div
                className="skill-category"
                // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
              >
                <h4>
                  {/* <i className="fas fa-database"></i>  */}
                  Data Tools
                </h4>
                <ul>
                  <li>BigQuery &amp; SQL</li>
                  <li>Power BI</li>
                  <li>Looker Studio</li>
                  <li>Python</li>
                </ul>
              </div>
              <div
                className="skill-category"
                // style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
              >
                <h4>
                  {/* <i className="fas fa-cogs"></i>  */}
                  Automation
                </h4>
                <ul>
                  <li>Google Cloud Platform</li>
                  <li>AI Agents &amp; n8n</li>
                  <li>API Integration</li>
                  <li>Workflow Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
