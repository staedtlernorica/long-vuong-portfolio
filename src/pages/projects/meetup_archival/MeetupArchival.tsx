import { Box, Container } from '@mui/material';
import ProjectHeader from '../../../components/projects/ProjectHeader';
import MainSection1 from '../../../components/projects/MainSection1';
import MainSection3 from '../../../components/projects/MainSection3';
import WarningIcon from '@mui/icons-material/Warning';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Section } from '../../../types/project_types';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const MeetupArchival = () => {
  const mainHeader = {
    title: 'Automated Meetup Archiver',
    tags: [
      'Python',
      'Selenium',
      'BeautifulSoup4 (BS4)',
      'PostgreSQL',
      'Psycopg',
      'ETL',
      'Web Scraping',
      'Data Archival',
    ],
    description:
      // "Automated data extraction of Meetup events for archival and analysis purposes.",
      'An automated data ingestion pipeline built in Python that extracts structured metadata from all past Meetup events into SQL tables. The extracted data is then used for analysis of attendance trends and user engagement in the different groups.',
  };

  const backgroundSection = {
    header: 'Background',
    description:
      'This project started when I wanted to learn about my own attendance trends at Meetup events, both for fun and to use as data visualization practice material. I created a Python script that combed through all the events I had attended, and used BeautifulSoup4 (BS4) to extract all relevant metadata from each event page, and saved the result to a csv.\n\nAs I was browsing Reddit at a later time, I came across a discussion in which users were contemplating migrating away from using Meetup to a different software or sharing their experiences of having already done so. One thread of complaint they shared was the difficulty archiving their Meetup events data, which slowed down their migration progress. Another similar complaint was how once common Meetup features were increasingly being locked behind a subscription paywall.\n\nWith a script that already does some of the work of archiving Meetup data, these complaints posed an interesting technical challenge to me, and I decided to expand my script to cover more capabilities as a challenge to myself.',
  };

  const challengesSection: Section[] = [
    {
      header: 'Challenge 1: Getting all past events URLs',
      description:
        // "The part of my script that extracts event metadata needed minimal modification to extract all event metadata it hadn't captured before.\n\nThe new, BIG challenge was in: how to collect the URL for ALL event pages from a group so that my metadata extraction script can run on these pages. The method I used for my own data involved manual scrolling to the bottom; this was not feasible for groups with hundreds or thousands of events. This is where automation enters the picture.",
        'To archive all past events, my scripts needed the page URL of each past event. The process of gathering these URLs proved to be the first big hurdle as the Past Events page only displays 10 events at a time and required scrolling to load more data. For groups with hundreds or thousands of events, manually scrolling to load all events quickly becomes impractical.',
      headerIcon: <WarningIcon />,
    },
    {
      header: 'Challenge 2: Extracting metadata at scale',
      headerIcon: <WarningIcon />,
      description:
        // "The part of my script that extracts event metadata needed minimal modification to extract all event metadata it hadn't captured before.\n\nThe new, BIG challenge was in: how to collect the URL for ALL event pages from a group so that my metadata extraction script can run on these pages. The method I used for my own data involved manual scrolling to the bottom; this was not feasible for groups with hundreds or thousands of events. This is where automation enters the picture.",
        'A second challenge arose in ensuring the metadata extraction script could handle a large volume of data. With the original implementation, the script would extract and store the metadata in RAM, and then save the data to file once it finished with the last event.\n\n However, any network interruption, error or site glitches would cause the program to crash, erasing all information about the extracted metadata in the RAM. In some cases, the program may also self-terminate, leading to the same effect.\n\n',
      innerTextHeader: 'Solution',
      innerTextDescription:
        'I divided the extraction process into batches of 200 events, with the script saving each batch of extracted metadata into a PostgreSQL table. This way, even there were crashes, only the last batch of events are lost, rather than all extracted data.',
      innerTextIcon: <AutoFixHighIcon />,
    },
  ];

  const summarySection: Section[] = [
    {
      header: 'Project Takeaways',
      description:
        '1. Automated scraping of URL of all past events. \n2. Modified the data extraction script to save data in batches.\n3. Performed SQL-level cross-checks to avoid redundant execution of the extraction script and potential event duplication.',
      headerIcon: <SummarizeIcon />,
    },
  ];

  const improvementsSection: Section[] = [
    {
      header: 'Future Improvements',
      description:
        '1. As a future improvement, I would like to include in the archival process full archival of all media associated with events e.g. comments, videos, pictures.',
      headerIcon: <ConstructionIcon />,
    },
  ];

  return (
    <Container className="m-10">
      <ProjectHeader
        title={mainHeader.title}
        tags={mainHeader.tags}
        description={mainHeader.description}
      />
      <Box className="mb-8 p-8 pt-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-300/30 shadow-lg">
        {backgroundSection && (
          <MainSection1
            header={backgroundSection.header}
            description={backgroundSection.description}
          />
        )}
        <Box className="my-12">
          {summarySection && <MainSection3 sectionProps={summarySection} />}
        </Box>
        <Box className="mt-12">
          {challengesSection && <MainSection3 sectionProps={challengesSection} />}
        </Box>
        {/* <p>
          Automating Scrolls on Past Events Page Creating a Selenium script that auto-scrolls to the
          bottom on the Past Events page, which will load more past events. This process repeats
          until auto-scroll returns null and the number of past events on the page matches the
          number displayed. Once all events are displayed, extract all URL links and save them to a
          PostgreSQL table called "events_url".
        </p>
        <br />
        <p>
          Next, my metadata extraction script needed to be modified to save its data in batches to
          PostgreSQL table called "events_metadata". Originally, my script stores the extracted data
          in memory (i.e. RAM) and only saved everything to file when the script finishes. With
          thousands of events, the risk of the script crashing and wiping out all data in memory
          became an important concern. Implementing batching mitigates crashing concerns, and
          allowed further hands-off time from the process.
        </p>
        <br />
        <p>
          Finally, to prevent the metadata extraction script from starting at the beginning every
          time it starts, I added a new column called "have_checked" to the "events_url" SQL table.
          Every time the extraction script has extracted information from an event, it finds updates
          the "have_checked" value to True. In a future job, the extraction script will start with
          events that have the value of False in "have_checked", preventing redundant execution and
          possible duplication issues.
        </p> */}
        <Box className="mt-12">
          {improvementsSection && <MainSection3 sectionProps={improvementsSection} />}
        </Box>
      </Box>
    </Container>
  );
};

export default MeetupArchival;
