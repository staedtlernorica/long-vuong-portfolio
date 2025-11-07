import { Card, Chip, Container, Box } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
export default function Portfolio() {
  return (
    <Container>
      <h1 className="my-15 text-center">Featured Projects</h1>

      <div className="max-w-[1200px] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
        <Card variant="outlined" className="p-10 relative overflow-hidden">
          <Box className="flex gap-3 mb-5">
            <ArchiveIcon></ArchiveIcon>
            <h3>Meetup Archival</h3>
          </Box>
          <Box className="mb-5">
            <p>
              Automated the archival of events and metadata for Meetup groups
              using Python, Selenium and PostgreSQL.
            </p>
          </Box>
          <Box className="mb-10">
            <Chip className="mr-3 mb-3" label="Python"></Chip>
            <Chip className="mr-3 mb-3" label="Selenium"></Chip>
            <Chip className="mr-3 mb-3" label="Web Scraping"></Chip>
            <Chip className="mr-3 mb-3" label="PostgreSQL"></Chip>
          </Box>
          <Box>
            <a
              href="meetup-archival.html"
              className="font-medium text-blue-600"
            >
              View Project
            </a>
          </Box>
        </Card>
        <Card variant="outlined" className="p-10 relative overflow-hidden">
          <Box className="flex gap-3 mb-5">
            <SystemUpdateAltRoundedIcon></SystemUpdateAltRoundedIcon>
            <h3>GA4 Migration</h3>
          </Box>
          <Box className="mb-5">
            <p>
              Migrated multiple clients from Universal Analytics to Google
              Analytics 4, ensuring data integrity and continuity of tracking
              with minimal disruption.
            </p>
          </Box>
          <Box className="mb-10">
            <Chip className="mr-3 mb-3" label="Google Analytics 4"></Chip>
            <Chip className="mr-3 mb-3" label="Google Tag Manager"></Chip>
            <Chip className="mr-3 mb-3" label="Universal Analytics"></Chip>
            <Chip className="mr-3 mb-3" label="Privacy Compliance"></Chip>
          </Box>
          <Box>
            <a href="ga4-migration.html" className="font-medium text-blue-600">
              View Case Study
            </a>
          </Box>
        </Card>
        <Card variant="outlined" className="p-10 relative overflow-hidden">
          <Box className="flex gap-3 mb-5">
            <SystemUpdateAltRoundedIcon></SystemUpdateAltRoundedIcon>
            <h3>Energy Analysis and Visualization</h3>
          </Box>
          <Box className="mb-5">
            <p>Build for a hack-a-thon,</p>
          </Box>
          <Box className="mb-10">
            <Chip className="mr-3 mb-3" label="Python"></Chip>
            <Chip className="mr-3 mb-3" label="Pandas"></Chip>
            <Chip className="mr-3 mb-3" label="Plotly"></Chip>
            <Chip className="mr-3 mb-3" label="SQL"></Chip>
            <Chip className="mr-3 mb-3" label="AI Integration"></Chip>
            <Chip className="mr-3 mb-3" label="ETL"></Chip>
          </Box>
          <Box>
            <a
              href="energy-analysis.html"
              className="font-medium text-blue-600"
            >
              View Case Study
            </a>
          </Box>
        </Card>
      </div>
    </Container>
  );
}
