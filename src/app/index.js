
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {Resume, AboutSkill, ErrorPage} from "./components";

import "./index.css" ;

import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/about/:SkillName",
    element: <AboutSkill/>,
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);