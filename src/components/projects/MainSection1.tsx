import { Box, Typography } from "@mui/material";

export type MainSection1Props = {
  header: string;
  description: string;
  imageUrl?: string;
};

const MainSection1 = ({ header, description, imageUrl }: MainSection1Props) => {
  return (
    <Box className="my-3">
      <Typography variant="h4" component="h1" gutterBottom>
        {header}
      </Typography>
      <Typography variant="body1" className="mb-5">
        {description}
      </Typography>
      {imageUrl && (
        <Box className="mb-5">
          <img src={imageUrl} alt={header} className="w-full rounded-lg" />
        </Box>
      )}
    </Box>
  );
};

export default MainSection1;
