import React from "react";
import { Box } from "@mui/material";
import MainSection1, { MainSection1Props } from "./MainSection1";
import MainSection2, { MainSection2Props } from "./MainSection2";
import MainSection3, { MainSection3Props } from "./MainSection3";
import { Section } from "../../types/project_types";

type ProjectMainProps = {
  section1: MainSection1Props;
  section2: {
    sectionProps: Section[];
  };
  section3: {
    sectionProps: Section[];
  };
};

const ProjectMain = ({
  section1,
  section2,
  section3,
}: ProjectMainProps): React.ReactNode => {
  return (
    <Box className="mb-3 border-2 border-gray-300 rounded-xl p-5">
      {section1 && (
        <MainSection1
          header={section1.header}
          description={section1.description}
          imageUrl={section1.imageUrl}
        />
      )}
      {section2 && <MainSection2 sectionProps={section2.sectionProps} />}
      {section3 && <MainSection3 sectionProps={section3.sectionProps} />}
    </Box>
  );
};

export default ProjectMain;
