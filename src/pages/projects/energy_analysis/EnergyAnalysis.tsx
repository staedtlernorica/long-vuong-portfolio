import {
  Box,
  Container,
} from '@mui/material';
import ProjectHeader from '../../../components/projects/ProjectHeader';
import MainSection1 from '../../../components/projects/MainSection1';
import MainSection2 from '../../../components/projects/MainSection2';

const EnergyAnalysis =
  () => {
    const mainHeader =
      {
        title:
          'Energy Price Visualizer',
        tags: [
          'Python',
          'Pandas',
          'SQL',
          'Flask',
          'JavaScript',
          'ETL',
          'Plotly',
          'Data Viz',
        ],
        description:
          'Visualizing the cost of different electricity plans with real usage data + identifying saving opportunities.  ',
      };
    const backgroundSection =
      {
        header:
          'Background',
        description:
          'This project came about because I had a hard time determining the most cost effective electricity plan for myself. While my utility provider had an impressive suite of dashboards on usage and cost, the limited time frame that the dashboard covers limits their usability in finding an answer to my question. In addition, my utility provider does not make any reccomendations, or even summaries from which I could make conclusions (I suspect due to liabity reasons).\n\nFortunately, my utlity provider also provides Green Button data, which with a ETL pipeline was transformed into data that can provide an answer.',
      };

    const section2 =
      [
        {
          header:
            'Turning Data Into Insights',
          description:
            'To turn Green Button data into actionable insights, my project needed to:\n\n1. Cover a longer time frame to accurately identify trends and eliminate variance.\n2. Present users with visualizations and analysis covering this longer time frame, and make effective summaries.',
        },
      ];

    const section3 =
      [
        {
          header:
            'Key Summaries',
          description:
            '1. Parse the Green Button XML to get usage readings, and import these raw variables into a Pandas dataframe.\n2. Derived first order and higher order features from the raw variables to capture the cost of the two hourly plans.\n3. Aggregate hourly readings into monthly figures, to capture the cost of the Tiered Rates plan.',
        },
      ];
    const section4 =
      [
        {
          header:
            'Key Summaries',
          description:
            '1. Green Button data contains the date, hour of day, and energy reading for every hour.\n2. These three raw variables can be used to calculate the two hourly based plans (TOU and ULO).\n3. Aggregating hourly readings to calculate monthly cumulative usage (MCU).\n4. The MCU can then be used to calculate the daily cost of the Tiered Rates plan.\n5. With the daily rates calculated for all three plans, visualizations and summaries can be generated to compare and contrast the plans.',
        },
      ];
    const section5 =
      [
        {
          header:
            'Key Learning',
          description:
            'Data can get too granular for effective analysis and visualization.',
        },
      ];


    return (
      <Container className="m-10">
        <ProjectHeader
          title={
            mainHeader.title
          }
          tags={
            mainHeader.tags
          }
          description={
            mainHeader.description
          }
        />
        <Box className="mb-8 p-8 pt-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-300/30 shadow-lg">
          {backgroundSection && (
            <MainSection1
              header={
                backgroundSection.header
              }
              description={
                backgroundSection.description
              }
            />
          )}
          <Box className="mt-12">
            {section2 && (
              <MainSection2
                sectionProps={
                  section2
                }
              />
            )}
          </Box>
          <br></br>
          Rather
          than
          inundating
          you with
          every
          detail,
          I'll walk
          give a
          rough tour
          of how I
          constructed
          the
          results:
          {/* <Box className="mt-12">{section3 && <MainSection2 sectionProps={section3} />}</Box> */}
          <Box className="mt-12">
            {section4 && (
              <MainSection2
                sectionProps={
                  section4
                }
              />
            )}
          </Box>
          Unfortunately,
          I only
          learn once
          I created
          the data
          visualizations
          that the
          data was
          too
          granular
          to really
          make use
          of. The
          chart
          looked
          pretty,
          but I had
          ran into
          same
          trouble I
          encountered
          with my
          utility
          provider's
          dashboards:
          the
          variables
          measured
          within the
          covered
          timeframe
          was too
          short to
          make any
          useful
          conclusions.
          <Box className="mt-12">
            {section5 && (
              <MainSection2
                sectionProps={
                  section5
                }
              />
            )}
          </Box>
        </Box>
      </Container>
    );
  };

export default EnergyAnalysis;
