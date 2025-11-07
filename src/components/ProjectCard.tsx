import { Card, Chip, Container, Box, CardActionArea } from '@mui/material';
import { Link } from 'react-router';
import { Typography } from '@mui/material';

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
    <Card
      variant='outlined'
      className='p-10 relative overflow-hidden !rounded-4xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
    >
      <Box className='flex gap-3 mb-5 items-top'>
        <div className='mb-10'>{icon}</div>
        <Typography variant='h6'>{name}</Typography>
      </Box>
      <Box className='mb-5'>
        <Typography variant='body2'>{description}</Typography>
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
