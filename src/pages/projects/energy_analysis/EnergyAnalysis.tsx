import React from "react";
import { Container } from "@mui/material";
import ProjectHeader from "../../../components/projects/ProjectHeader";
import ProjectMain from "../../../components/projects/ProjectMain";

const EnergyAnalysis = () => {
  const section1 = {
    header: "Energy Analysis Overview",
    description:
      "This project focuses on analyzing energy consumption patterns using advanced data analytics techniques. The goal is to identify opportunities for energy savings and optimize usage across various sectors.",
    imageUrl: "/images/projects/energy_analysis/overview.png",
  };

  const section2 = [
    {
      header: "Analysis Techniques",
      description:
        "1. Data collection from smart meters and IoT devices.\n2. Statistical analysis to identify consumption trends.\n3. Machine learning models to predict future energy needs.",
    },
  ];

  const section3 = [
    {
      header: "Technologies Used",
      description:
        "The project utilizes Python for data analysis, leveraging libraries such as Pandas, NumPy, and Scikit-learn. Visualization tools like Matplotlib and Seaborn are used to present findings effectively.",
    },
  ];
  const mainHeader = {
    title: "Energy Analysis",
    tags: ["Data Analytics", "Energy Consumption", "Machine Learning"],
    description:
      "A project dedicated to analyzing energy consumption patterns to identify savings opportunities and optimize usage.",
  };

  return (
    <Container className="m-10">
      <ProjectHeader
        title={mainHeader.title}
        tags={mainHeader.tags}
        description={mainHeader.description}
      />
      <ProjectMain
        section1={section1}
        section2={{ sectionProps: section2 }}
        section3={{ sectionProps: section3 }}
      />
    </Container>
  );
};

export default EnergyAnalysis;
