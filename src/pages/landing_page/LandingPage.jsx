import ArchiveIcon from '@mui/icons-material/Archive';
import ProjectCard from '../../components/projects/ProjectCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import EmailIcon from '@mui/icons-material/Email';
import { Typography, Box, Container, Button } from '@mui/material';
import About from '../../components/About';

export default function Portfolio() {
  const reachOutBtnClicked = () => {
    window.location.href = 'mailto: long.t.vuong@gmail.com';
  };

  const projectsBtnClicked = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container className="mt-8 md:mt-25 mb-10 md:mb-30 flex flex-col px-4 md:px-8">
      <Box>
        <Typography
          variant="h2"
          component="h1"
          className="font-nunito font-medium text-black"
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: -10,
              width: 48,
              height: 3,
              background: 'linear-gradient(90deg,#0369A1,transparent)',
            },
          }}
        >
          Long Vuong
        </Typography>
        <Typography
          variant="h5"
          component="body"
          className="py-8 font-nunito font-light text-gray-700 mt-2 md:mt-4"
        >
          Analytics Engineer | Data Enthusiast | Problem Solver
        </Typography>
        <Typography
          variant="h6"
          component="body"
          className="font-nunito font-light! text-gray-700! mb-8! mt-2 md:mt-4"
        >
          Focused on solving real-world problems through data-driven solutions.
        </Typography>
        <Button
          className="mb-4! mr-4! text-white! transition-all! hover:scale-105!"
          variant="outlined"
          size="large"
          onClick={projectsBtnClicked}
          sx={{
            background: 'linear-gradient(75deg, #0369A1, #06B6D4, #7DD3FC)',
            '&:hover': {
              background: 'linear-gradient(135deg, #075985, #0891B2, #38BDF8)',
              boxShadow: '0 8px 16px rgba(3, 105, 161, 0.3)',
            },
          }}
        >
          Projects
        </Button>
        <Button
          className="mb-4! border-sky-800! text-sky-800! hover:bg-white/8! transition-colors! hover:scale-105!"
          variant="outlined"
          size="large"
          onClick={reachOutBtnClicked}
        >
          <EmailIcon className="mr-2" />
          Reach Out
        </Button>
      </Box>

      <Box className="mt-8 md:mt-15 mb-10 md:mb-20 flex flex-col items-center md:px-0 px-4">
        <Typography
          id="projects"
          variant="h4"
          className="font-nunito font-medium my-8 md:my-15 text-center md:self-start!"
        >
          Featured Projects
        </Typography>

        <Box className="mt-5 w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <ProjectCard
            name="Automated Meetup Archiver"
            description="Automated data harvester built with Selenium and BS4 that archive all past events from a Meetup group, and extracts structured details (e.g. date, attendees, location) into SQL tables."
            icon={<ArchiveIcon />}
            tags={[
              'ETL',
              'Python',
              'Selenium',
              'Web Scraping',
              'PostgreSQL',
              'BeautifulSoup4 (BS4)',
            ]}
            link="/projects/meetup-archival"
            linkText="View Project"
          />

          {/* <ProjectCard
          name="Google Analytics 4 Tags Migration"
          description="Integrated Google Analytics 4 tags into Google Tag Manager, ensuring continuity of tracking and privacy compliance with minimal disruption for enteprise clients."
          icon={<SystemUpdateAltRoundedIcon />}
          tags={["GA4", "GTM", "Privacy Compliance"]}
          link="/projects/ga4-migration"
          linkText="View Project"
        /> */}

          <ProjectCard
            name="Energy Price Visualizer"
            description="Data visualization tool to help users compare electricity prices based on their daily usage data."
            icon={<PaymentsIcon />}
            tags={['Python', 'Plotly', 'Pandas', 'Data Viz', 'SQL', 'ETL']}
            link="/projects/energy-analysis"
            linkText="View Project"
          />

          {/* <ProjectCard
          name="Extra History Views Analysis"
          description="Data visualization tool to help users compare electricity prices based on their daily usage data."
          icon={<PaymentsIcon />}
          tags={["Python", "Plotly", "Pandas", "Data Viz", "SQL", "ETL"]}
          link="/projects/energy-analysis"
          linkText="View Project"
        /> */}
        </Box>
      </Box>
    </Container>
  );
}
