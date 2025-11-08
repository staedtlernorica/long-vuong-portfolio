import React from "react";
import { Container } from "@mui/material";
import ProjectHeader from "../../../components/projects/ProjectHeader";
import ProjectMain from "../../../components/projects/ProjectMain";

const GA4Migration = () => {
  const section1 = {
    header: "GA4 Migration Overview",
    description:
      "This project involves migrating from Universal Analytics to Google Analytics 4 (GA4) to leverage enhanced tracking capabilities and future-proof analytics infrastructure.",
    imageUrl: "/images/ga4_migration/overview.png",
  };

  const section2 = [
    {
      header: "Migration Steps",
      description:
        "1. Audit existing Universal Analytics setup.\n2. Plan GA4 property configuration.\n3. Implement GA4 tracking code.\n4. Validate data collection and reporting.",
    },
  ];

  const section3 = [
    {
      header: "Technologies Used",
      description:
        "The migration utilizes Google Tag Manager for streamlined tag management, along with GA4's enhanced measurement features for improved data accuracy and insights.",
    },
  ];

  const mainHeader = {
    title: "GA4 Migration",
    tags: ["Google Analytics 4", "GA4", "Web Analytics", "Tag Management"],
    description:
      "A project focused on migrating from Universal Analytics to Google Analytics 4 (GA4) to enhance tracking capabilities and future-proof analytics.",
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

export default GA4Migration;
