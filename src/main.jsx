import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { createHashRouter, useLocation } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import Portfolio from './pages/landing_page/LandingPage';
import EnergyAnalysis from './pages/projects/energy_analysis/EnergyAnalysis';
import GA4Migration from './pages/projects/ga4_migration/GA4Migration';
import MeetupArchival from './pages/projects/meetup_archival/MeetupArchival';
import '@fontsource-variable/nunito';
import BackgroundScatter from './components/Background.jsx';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const theme = createTheme({
  typography: {
    fontFamily: ['"Nunito"', 'ui-sans-serif', 'system-ui', 'sans-serif'].join(','),
  },
});

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <BackgroundScatter />
        <Portfolio />
      </>
    ),
  },
  {
    path: '/projects',
    children: [
      {
        path: 'energy-analysis',
        element: (
          <>
            <ScrollToTop />
            <BackgroundScatter />
            <EnergyAnalysis />,
          </>
        ),
      },
      {
        path: 'ga4-migration',
        element: (
          <>
            <ScrollToTop />
            <BackgroundScatter />
            <GA4Migration />,
          </>
        ),
      },
      {
        path: 'meetup-archival',
        element: (
          <>
            <ScrollToTop />
            <BackgroundScatter />
            <MeetupArchival />,
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
);
