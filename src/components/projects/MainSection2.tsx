import { Box, Typography } from "@mui/material";
import { Section } from "../../types/project_types";

export type MainSection2Props = {
  sectionProps: Section[];
};

const MainSection2 = ({ sectionProps }: MainSection2Props) => {
  return (
    <>
      {sectionProps.map((section, index) => (
        <Box key={index} className="my-3">
          <Typography variant="h5" component="h2" gutterBottom>
            {section.header}
          </Typography>
          <Typography variant="body1">{section.description}</Typography>
        </Box>
      ))}
    </>
  );
};

export default MainSection2;
