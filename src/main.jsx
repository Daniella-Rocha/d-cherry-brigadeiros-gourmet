import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';

import Home from './Pages/Home/Home.jsx';

import Flavours from './Pages/Flavours/Flavours.jsx';

import About from './Pages/About/About.jsx';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';

import './index.css';
import Contact from './Pages/Contact/Contact.jsx';
import ThanksPage from './Pages/ThanksPage/ThanksPage.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        // home page
        element: <Home />,
        path: '/',
        errorElement: <ErrorBoundary/>
      },
      {
        // flavours  list
        element: <Flavours />,
        path: '/flavours',
        errorElement: <ErrorBoundary/>
      },
      {
        // about page
        element: <About/>,
        path: '/about',
        errorElement: <ErrorBoundary/>
      },
      {
        // contact form
        element: <Contact/>,
        path: '/contact',
        errorElement: <ErrorBoundary/>
      },
      {
        element: <ThanksPage/>,
        path: '/thanks',
        errorElement: <ErrorBoundary/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
