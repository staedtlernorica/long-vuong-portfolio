import { Box, Typography } from '@mui/material';

type StyledListTypographyProps = {
  text: string;
};

const StyledListTypography = ({ text }: StyledListTypographyProps) => {
  // First, split the text into items by number pattern (e.g., "1. ", "2. ", "3. ")
  const segments = text.split(/(?=\d+\.\s)/);

  return (
    <Typography
      variant="body1"
      className="text-gray-700 leading-relaxed mt-4"
      component="div"
      sx={{
        fontSize: { xs: '0.95rem', sm: '1rem' },
        my: 2,
        whiteSpace: 'pre-line',
      }}
    >
      {segments.map((segment, index) => {
        const trimmed = segment.trim();
        if (!trimmed) return null;

        // Check if this segment starts with a number (like "1. ", "2. ")
        const isListItem = /^\d+\.\s/.test(trimmed);

        if (isListItem) {
          // Remove the number and render as styled list item
          const itemText = trimmed.replace(/^\d+\.\s/, '').trim();
          if (!itemText) return null; // Skip empty items

          return (
            <Box
              key={index}
              sx={{
                position: 'relative',
                paddingLeft: '1.5rem',
                marginBottom: '0.5rem',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '0.25rem',
                  top: '0.6rem',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0369A1, #06B6D4)',
                  boxShadow: '0 0 4px rgba(3, 105, 161, 0.3)',
                },
              }}
            >
              {itemText}
            </Box>
          );
        }

        // Regular paragraph
        return (
          <Box key={index} sx={{ mb: 1 }}>
            {trimmed}
          </Box>
        );
      })}
    </Typography>
  );
};

export default StyledListTypography;
