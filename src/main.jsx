import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './compo/Layout';
import Main from './compo/Main';
import Login from './Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
