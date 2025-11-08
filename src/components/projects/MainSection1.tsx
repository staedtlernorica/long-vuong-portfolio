import { Box, Typography } from "@mui/material";

export type MainSection1Props = {
  header: string;
  description: string;
  imageUrl?: string;
};

const MainSection1 = ({ header, description, imageUrl }: MainSection1Props) => {
  return (
    <Box className="my-3">
      <Typography
        variant="h4"
        className="font-nunito font-light tracking-tight text-black relative mb-6"
        sx={{
          fontSize: {
            xs: "1.875rem",
            sm: "2.25rem",
            md: "2.75rem",
          },
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -10,
            width: 48,
            height: 3,
            background: "linear-gradient(90deg,#0369A1,transparent)",
          },
        }}
      >
        {header}
      </Typography>

      <Typography
        variant="body1"
        className="text-lg text-gray-700 max-w-fit leading-relaxed my-8! whitespace-pre-wrap!"
      >
        {description}
      </Typography>

      {imageUrl && (
        <Box className="mb-5 relative group overflow-hidden rounded-xl max-w-3xl mx-auto">
          <img
            src={imageUrl}
            alt={header}
            className="w-full h-40 sm:h-56 md:h-72 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <Box className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Box>
      )}
    </Box>
  );
};

export default MainSection1;
