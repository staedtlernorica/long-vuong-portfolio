import { Box, Typography } from "@mui/material";
import { Section } from "../../types/project_types";

export type MainSection3Props = {
  sectionProps: Section[];
};

const MainSection3 = ({ sectionProps }: MainSection3Props) => {
  return (
    <>
      {sectionProps.map((subSection, index) => (
        <Box
          key={index}
          className="my-3  border-2 border-amber-200 rounded-xl p-5"
        >
          <Typography variant="h5" component="h2" gutterBottom>
            {subSection.header}
          </Typography>
          <Typography variant="body1">{subSection.description}</Typography>
        </Box>
      ))}
    </>
  );
};

export default MainSection3;
