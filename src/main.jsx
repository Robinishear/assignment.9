import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import Root from './Root/Root.jsx';
import Home from './App-Page/Home.jsx';
import Login from './App-Page/Login.jsx';
import { StrictMode } from 'react';
import AppDetailsPage from './App-Page/AppDetailsPage.jsx';
import ErrorPage from './App-Page/ErrorPage.jsx';
import Register from './App-Page/Register.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, 
    children: [
      {
        path: 'home',
        element: <Home />, 
        hydrateFallbackElement: <p>loding</p>,
        },
        {
          path: '/app-details/:category/:id',
          element: <AppDetailsPage />,
        },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signin',
        element: <Register />,
      },
  
        {
          path: '*',
          element: <ErrorPage/>
        }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
