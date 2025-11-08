import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { createHashRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Portfolio from './pages/landing_page/LandingPage';
import EnergyAnalysis from './pages/projects/energy_analysis/EnergyAnalysis';
import GA4Migration from './pages/projects/ga4_migration/GA4Migration';
import MeetupArchival from './pages/projects/meetup_archival/MeetupArchival';
import '@fontsource-variable/nunito';

const theme = createTheme({
  typography: {
    fontFamily: ['"Nunito"', 'ui-sans-serif', 'system-ui', 'sans-serif'].join(','),
  },
});

const router = createHashRouter([
  {
    path: '/',
    Component: Portfolio,
  },
  {
    path: '/projects',
    children: [
      {
        path: 'energy-analysis',
        Component: EnergyAnalysis,
      },
      {
        path: 'ga4-migration',
        Component: GA4Migration,
      },
      {
        path: 'meetup-archival',
        Component: MeetupArchival,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
