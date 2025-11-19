import { Card, Chip, Box } from '@mui/material';
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
    <Box
      className="font-nunito"
      sx={{
        // subtle gradient frame
        borderRadius: 3,
        p: '1px',
        background: 'linear-gradient(135deg, rgba(3,105,161,0.06), rgba(6,182,212,0.04))',
        display: 'block',
        height: '100%',
      }}
    >
      <Card
        variant="outlined"
        className="relative overflow-visible"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          minHeight: 170,
          position: 'relative',
          boxShadow: '0 8px 20px rgba(2,6,23,0.06)',
          transition: 'transform 220ms ease, box-shadow 220ms ease',
          bgcolor: 'background.paper',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 40px rgba(2,6,23,0.12)',
          },
        }}
      >
        {/* decorative accent circle */}
        <Box
          sx={{
            position: 'absolute',
            top: -18,
            right: -18,
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#06B6D4,#0369A1)',
            opacity: 0.12,
            filter: 'blur(8px)',
            pointerEvents: 'none',
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Box className="flex gap-3 mb-2 items-start" sx={{ alignItems: 'flex-start' }}>
          {/* icon in a gradient badge */}
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg,#0369A1,#06B6D4)',
              color: 'white',
              flexShrink: 0,
              boxShadow: '0 6px 18px rgba(3,105,161,0.12)',
            }}
            aria-hidden
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {icon}
            </div>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              className="font-nunito"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.01em',
                // gradient text title
                background: 'linear-gradient(90deg,#0369A1,#06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                mb: 0.5,
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="body2"
              className="font-nunito text-base! text-gray-700! leading-[1.75]!"
              sx={{
                color: 'text.secondary',
                mt: 0.5,
                lineHeight: 1.6,
                fontSize: 13,
                flex: 1,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 5, mb: 5, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              className="font-nunito"
              size="small"
              sx={{
                borderRadius: '999px',
                px: 1.5,
                py: 0.5,
                fontWeight: 700,
                fontSize: 12,
                bgcolor: 'transparent',
                border: '1px solid',
                borderColor: 'divider',
                color: 'text.primary',
                transition: 'transform 150ms ease, background-color 150ms ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  bgcolor: 'rgba(3,105,161,0.06)',
                },
              }}
            />
          ))}
        </Box>

        <Box sx={{ mt: 'auto', pt: 1 }}>
          {/* gradient "View" button styled link */}
          <Link
            to={link}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              borderRadius: 999,
              background: 'linear-gradient(90deg, rgba(3,105,161,1) 0%, rgba(6,182,212,1) 100%)',
              color: '#fff',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 8px 18px rgba(3,105,161,0.14)',
              transition: 'transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            {linkText}
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default ProjectCard;
