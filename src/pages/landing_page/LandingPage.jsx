import { Container } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
import ProjectCard from "../../components/projects/ProjectCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Typography } from "@mui/material";

export default function Portfolio() {
  return (
    <Container className="font-serif mt-15 mb-20 flex flex-col items-center">
      <Typography variant="h4" className="my-15 text-center">
        Featured Projects
      </Typography>

      <div className="mt-5 max-w-[1200px] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 project-grid">
        <ProjectCard
          name="Automated Meetup Archiver"
          description="
          Automated data harvester that archive past events and analyze group trends. 
          This tool indexes all events from a Meetup group, then extracts structured details (e.g. date, attendees, location) and stores these in SQL tables."
          icon={<ArchiveIcon />}
          tags={["Python", "Selenium", "Web Scraping", "PostgreSQL", "ETL"]}
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
          name="Energy Price Visualizer"
          description="Data visualization tool to help users compare electricity prices based on their daily usage data."
          icon={<PaymentsIcon />}
          tags={["Python", "Plotly", "Pandas", "Data Viz", "SQL", "ETL"]}
          link="/projects/energy-analysis"
          linkText="View Case Study"
        />

        {/* <ProjectCard
          name="Extra History Views Analysis"
          description="Data visualization tool to help users compare electricity prices based on their daily usage data."
          icon={<PaymentsIcon />}
          tags={["Python", "Plotly", "Pandas", "Data Viz", "SQL", "ETL"]}
          link="/projects/energy-analysis"
          linkText="View Case Study"
        /> */}
      </div>
    </Container>
  );
}
