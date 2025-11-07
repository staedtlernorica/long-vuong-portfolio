import { Card, Chip, Container, Box } from '@mui/material';
import { Link } from 'react-router';

type ProjectCardProps = {
  name: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  link: string;
  linkText: string;
};

const ProjectCard = ({
  name,
  description,
  icon,
  tags,
  link,
  linkText,
}: ProjectCardProps): React.ReactNode => {
  return (
    <Card variant='outlined' className='p-10 relative overflow-hidden'>
      <Box className='flex gap-3 mb-5'>
        {icon}
        <h3>{name}</h3>
      </Box>
      <Box className='mb-5'>
        <p>{description}</p>
      </Box>
      <Box className='mb-10'>
        {tags.map((tag) => (
          <Chip key={tag} className='mr-3 mb-3' label={tag}></Chip>
        ))}
      </Box>
      <Box>
        <Link to={link} className='font-medium text-blue-600'>
          {linkText}
        </Link>
      </Box>
    </Card>
  );
};

export default ProjectCard;
