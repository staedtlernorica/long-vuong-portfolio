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
    <Box className="mb-8 p-8 pt-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-300/30 shadow-lg">
      {section1 && (
        <MainSection1
          header={section1.header}
          description={section1.description}
          imageUrl={section1.imageUrl}
        />
      )}
      <Box className="my-12">
        {section2 && <MainSection2 sectionProps={section2.sectionProps} />}
      </Box>
      <Box className="mt-12">
        {section3 && <MainSection3 sectionProps={section3.sectionProps} />}
      </Box>
    </Box>
  );
};

export default ProjectMain;
