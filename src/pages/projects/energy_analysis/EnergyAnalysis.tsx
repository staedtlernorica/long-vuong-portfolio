import React from 'react';
import { Container } from '@mui/material';
import ProjectHeader from '../../../components/projects/ProjectHeader';
import ProjectMain from '../../../components/projects/ProjectMain';

const EnergyAnalysis = () => {
  const section1 = {
    header: 'Background',
    description:
      'This project came about because I had a hard time determining the most cost effective electricity plan for myself. While my utility provider had an impressive suite of dashboards on usage and cost, the limited time frame that the dashboard covers limits their usability in finding an answer to my question. In addition, my utility provider does not make any reccomendations, or even summaries from which I could make conclusions (I suspect due to liabity reasons).\n\nFortunately, my utlity provider also provides Green Button data, which with a ETL pipeline was transformed into data that can provide an answer.',
    // imageUrl: '/images/projects/energy_analysis/overview.png',
  };

  const section2 = [
    {
      header: 'Data Into Insights',
      description:
        'To turn Green Button data into actionable insights, my project needed to:\n\n1. Cover a longer time frame to accurately identify trends and eliminate variance.\n2. Present users with visualizations and analysis using this longer time frame, and make effective summaries.',
    },
  ];

  const section3 = [
    {
      header: 'Technologies Used',
      description:
        'The project utilizes Python for data analysis, leveraging libraries such as Pandas, NumPy, and Scikit-learn. Visualization tools like Matplotlib and Seaborn are used to present findings effectively.',
    },
  ];
  const mainHeader = {
    title: 'Energy Analysis',
    tags: ['Python', 'Pandas', 'SQL', 'Flask', 'JavaScript', 'ETL', 'Plotly', 'Data Viz'],
    description:
      'Visualizing the cost of different electricity plans with real usage data + identifying saving opportunities.  ',
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
