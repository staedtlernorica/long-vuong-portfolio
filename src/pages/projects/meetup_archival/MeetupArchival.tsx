import { Box, Container } from '@mui/material';
import ProjectHeader from '../../../components/projects/ProjectHeader';
import ProjectMain from '../../../components/projects/ProjectMain';
import MainSection1 from '../../../components/projects/MainSection1';
import MainSection2 from '../../../components/projects/MainSection2';
import MainSection3 from '../../../components/projects/MainSection3';

const MeetupArchival = () => {
  const section1 = {
    header: 'Background',
    description:
      'This project started when I wanted to learn about my own attendance trends, both for fun and to use as data viz practice material. I created a Python script that went through all events I had attended, and used BeautifulSoup4 (BS4) to extract all relevant metadata from each event page, and saves the result to a csv.\n\nAs I was browsing Reddit at a later time, I ran across a discussion by users contemplating migrating off Meetup or had done so. One thread of complaint they shared is the difficulty of archiving data, which was slowing down their migration progress. Another similar complaint was how once common Meetup features were increasingly being locked behind a subscription paywall.\n\nWith a script that already does some of the work, these complaints posed an interesting technical challenge to me, and I decided to expand my script to a project as a challenge to myself.',
    imageUrl: '/assets/card.jpg',
  };

  const section2 = [
    {
      header: 'Key Project Summaries',
      description:
        "1. Automated scraping of all past events' URL.\n2. Modified extraction script to run and save data in batches.\n3. Cross-check between in SQL database to prevent extraction script from redundant execution and possible events duplication.",
    },
  ];

  const section3 = [
    {
      header: 'Improvements:',
      description:
        '1. Implement the archival of all media (comments, videos, pictures). \n\n2. \n\n3.',
    },
  ];

  const section4 = [
    {
      header: 'Challenge 1: Getting ALL Past Events URLs',
      description:
        // "The part of my script that extracts event metadata needed minimal modification to extract all event metadata it hadn't captured before.\n\nThe new, BIG challenge was in: how to collect the URL for ALL event pages from a group so that my metadata extraction script can run on these pages. The method I used for my own data involved manual scrolling to the bottom; this was not feasible for groups with hundreds or thousands of events. This is where automation enters the picture.",
        'To archive all past events, my scripts needs the page URL of each past event. The process of gathering these URLs prove to be the first big hurdle: the Past Events page only displays 10 events at a time and requires scrolling to load more. For groups with hundreds or thousands of events, manually scrolling to load all events quickly becomes impractical.',
    },
  ];

  const section5 = [
    {
      header: 'Challenge 2: Extracting Metadata at Scale',
      description:
        // "The part of my script that extracts event metadata needed minimal modification to extract all event metadata it hadn't captured before.\n\nThe new, BIG challenge was in: how to collect the URL for ALL event pages from a group so that my metadata extraction script can run on these pages. The method I used for my own data involved manual scrolling to the bottom; this was not feasible for groups with hundreds or thousands of events. This is where automation enters the picture.",
        "A second challenge arose in ensuring the metadata extraction script could handle the increased volume. If implemented as is, the script would extract and store the metadata in RAM (or colloquially 'memory'), and only saving this data to file once it has finishes with the last event.\n\n However, any network interruption, network error or site glitches, would cause the program to crash, erasing all information about the extracted metadata in the RAM. Sometimes, the program may also crash itself to the same end.\n\nSolution:\n\nI divided the extraction process into batches, where after every 200 events, the script saves all extracted metadata to a PostgreSQL table called 'events_metada'. This way, even there were crashes, only the last batch of events' are lost, rather than all extracted data.",
    },
  ];

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
      'Automated data ingestion pipeline built in Python that extracts structured metadata from all past Meetup events into SQL tables. Tables can serve as archive or used for analysis of attendance trends and user engagement.',
  };

  return (
    <Container className="m-10">
      <ProjectHeader
        title={mainHeader.title}
        tags={mainHeader.tags}
        description={mainHeader.description}
      />
      <Box className="mb-8 p-8 pt-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-300/30 shadow-lg">
        {section1 && (
          <MainSection1
            header={section1.header}
            description={section1.description}
            // imageUrl={section1.imageUrl}
          />
        )}
        <Box className="mt-12">{section4 && <MainSection3 sectionProps={section4} />}</Box>
        <Box className="mt-12">{section4 && <MainSection3 sectionProps={section5} />}</Box>
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
        <Box className="my-12">{section2 && <MainSection2 sectionProps={section2} />}</Box>
        <p>
          The result is a SQL table with all events, containing each event's metadata for archival
          and analysis purposes
        </p>
        <Box className="mt-12">{section3 && <MainSection3 sectionProps={section3} />}</Box>
      </Box>
    </Container>
  );
};

export default MeetupArchival;
