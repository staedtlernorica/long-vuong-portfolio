import ArchiveIcon from '@mui/icons-material/Archive';
import SystemUpdateAltRoundedIcon from '@mui/icons-material/SystemUpdateAltRounded';
import ProjectCard from '../../components/projects/ProjectCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Typography, Box, Container } from '@mui/material';

export default function Portfolio() {
  return (
    <Container className="mt-8 md:mt-15 mb-10 md:mb-20 flex flex-col items-center px-4 md:px-8">
      <Typography variant="h4" className="my-8 md:my-15 text-center">
        Featured Projects
      </Typography>

      <Box className="mt-5 w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <ProjectCard
          name="Automated Meetup Archiver"
          description="Automated data harvester built with Selenium and BS4 that archive all past events from a Meetup group, and extracts structured details (e.g. date, attendees, location) into SQL tables."
          icon={<ArchiveIcon />}
          tags={['ETL', 'Python', 'Selenium', 'Web Scraping', 'PostgreSQL', 'BeautifulSoup4 (BS4)']}
          link="/projects/meetup-archival"
          linkText="View Project"
        />

        {/* <ProjectCard
          name="Google Analytics 4 Tags Migration"
          description="Integrated Google Analytics 4 tags into Google Tag Manager, ensuring continuity of tracking and privacy compliance with minimal disruption for enteprise clients."
          icon={<SystemUpdateAltRoundedIcon />}
          tags={["GA4", "GTM", "Privacy Compliance"]}
          link="/projects/ga4-migration"
          linkText="View Case Study"
        /> */}

        <ProjectCard
          name="Energy Price Visualizer"
          description="Data visualization tool to help users compare electricity prices based on their daily usage data."
          icon={<PaymentsIcon />}
          tags={['Python', 'Plotly', 'Pandas', 'Data Viz', 'SQL', 'ETL']}
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
      </Box>
    </Container>
  );
}
