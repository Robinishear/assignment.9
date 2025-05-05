import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import Root from './Root/Root.jsx';
import Home from './App-Page/Home.jsx';
import AppDetailsPage from './App-Page/AppDetailsPage.jsx';
import Login from './App-Page/Login.jsx';
import { StrictMode } from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, 
    children: [
      {
        path: 'home',
        element: <Home />, 
        hydrateFallbackElement: <p>loding</p>,
        loader: async () => { 
          const response = await fetch('/Dcatagorydata.json');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return await response.json(); 
        },
      },
      {
        path: 'appdetailspage',
        element: <AppDetailsPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
