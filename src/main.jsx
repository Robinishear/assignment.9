import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './App-Page/Home.jsx'
import AppDetailsPage from './App-Page/AppDetailsPage.jsx'
import Login from './App-Page/Login.jsx'





const router = createBrowserRouter([
  {
     path: '/',
     Component: Root,
      children: [
        {
          path: 'home',
          Component: Home,
        },
        {
         path: 'appdetailspage',
         Component: AppDetailsPage,
        },
        {
          path: 'login',
          Component: Login,
        }
      ]
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
