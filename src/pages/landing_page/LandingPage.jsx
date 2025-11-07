import { Container } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import SystemUpdateAltRoundedIcon from '@mui/icons-material/SystemUpdateAltRounded';
import ProjectCard from '../../components/ProjectCard';

export default function Portfolio() {
  return (
    <Container>
      <h1 className='my-15 text-center'>Featured Projects</h1>

      <div className='max-w-[1200px] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8'>
        <ProjectCard
          name='Meetup Archival'
          description='Automated the archival of events and metadata for Meetup groups using Python, Selenium and PostgreSQL.'
          icon={<ArchiveIcon />}
          tags={['Python', 'Selenium', 'Web Scraping', 'PostgreSQL']}
          link='/projects/meetup-archival'
          linkText='View Project'
        />

        <ProjectCard
          name='GA4 Migration'
          description='Migrated multiple clients from Universal Analytics to Google Analytics 4, ensuring data integrity and continuity of tracking with minimal disruption.'
          icon={<SystemUpdateAltRoundedIcon />}
          tags={[
            'Google Analytics 4',
            'Google Tag Manager',
            'Universal Analytics',
            'Privacy Compliance',
          ]}
          link='/projects/ga4-migration'
          linkText='View Case Study'
        />

        <ProjectCard
          name='Energy Analysis and Visualization'
          description='Developed a comprehensive energy analysis and visualization tool using Python, Dash, and Plotly.'
          icon={<SystemUpdateAltRoundedIcon />}
          tags={['Python', 'Dash', 'Plotly', 'Data Visualization']}
          link='/projects/energy-analysis'
          linkText='View Case Study'
        />
      </div>
    </Container>
  );
}
