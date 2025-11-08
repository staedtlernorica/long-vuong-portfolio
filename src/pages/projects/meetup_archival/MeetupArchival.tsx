import { Container } from "@mui/material";
import ProjectHeader from "../../../components/projects/ProjectHeader";
import ProjectMain from "../../../components/projects/ProjectMain";

const MeetupArchival = () => {
  const section1 = {
    header: "Project Overview",
    description:
      "This project involves the development of a Python-based web scraper designed to archive event data from Meetup.com. The archived data is intended for research and analysis purposes, allowing users to study trends and patterns in community events over time.",
    imageUrl: "/images/projects/meetup_archival/overview.png",
  };

  const section2 = [
    {
      header: "Key Features",
      description:
        "1. Automated scraping of event details including titles, dates, locations, and descriptions.\n2. Data storage in structured formats such as CSV and JSON for easy access and analysis.\n3. Scheduled scraping to ensure up-to-date archives of Meetup events.",
    },
  ];

  const section3 = [
    {
      header: "Technologies Used",
      description:
        "The project is built using Python, leveraging libraries such as BeautifulSoup for web scraping, Requests for handling HTTP requests, and Pandas for data manipulation and storage.",
    },
  ];

  const mainHeader = {
    title: "Meetup Archival",
    tags: ["Python", "Web Scraping", "Data Archival"],
    description:
      "A project focused on archiving Meetup.com event data for research and analysis purposes.",
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

export default MeetupArchival;
