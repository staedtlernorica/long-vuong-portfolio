import { Container } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
import ProjectCard from "../../components/ProjectCard";
import PaymentsIcon from "@mui/icons-material/Payments";

export default function Portfolio() {
  return (
    <Container>
      <h1 className="my-15 text-center">Featured Projects</h1>

      <div className="max-w-[1200px] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
        <ProjectCard
          name="Meetup Archival"
          description="Automated the archival of events and metadata for Meetup groups using Python, Selenium and PostgreSQL."
          icon={<ArchiveIcon />}
          tags={["Python", "Selenium", "Web Scraping", "PostgreSQL"]}
          link="/projects/meetup-archival"
          linkText="View Project"
        />

        <ProjectCard
          name="Google Analytics 4 Tags Migration"
          description="Integrated Google Analytics 4 tags into Google Tag Manager, ensuring continuity of tracking and privacy compliance with minimal disruption for enteprise clients."
          icon={<SystemUpdateAltRoundedIcon />}
          tags={["GA4", "GTM", "Privacy Compliance"]}
          link="/projects/ga4-migration"
          linkText="View Case Study"
        />

        <ProjectCard
          name="Price Comparison Visualizer"
          description="Data visualization tool to help users compare electricity prices based on their daily usage data."
          icon={<PaymentsIcon />}
          tags={["Python", "Plotly", "Pandas", "Data Viz", "SQL", "ETL"]}
          link="/projects/energy-analysis"
          linkText="View Case Study"
        />

        <ProjectCard
          name="Price Comparison Visualizer"
          description="Data visualization tool to help users compare electricity prices based on their daily usage data."
          icon={<PaymentsIcon />}
          tags={["Python", "Plotly", "Pandas", "Data Viz", "SQL", "ETL"]}
          link="/projects/energy-analysis"
          linkText="View Case Study"
        />
      </div>
    </Container>
  );
}
