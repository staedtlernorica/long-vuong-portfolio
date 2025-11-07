import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import Portfolio from './pages/landing_page/LandingPage';
import EnergyAnalysis from './pages/projects/energy_analysis/EnergyAnalysis';
import GA4Migration from './pages/projects/ga4_migration/GA4Migration';
import MeetupArchival from './pages/projects/meetup_archival/MeetupArchival';

const router = createBrowserRouter([
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
  <RouterProvider router={router} />
);
