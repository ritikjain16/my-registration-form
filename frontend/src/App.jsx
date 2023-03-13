import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllForms from "./components/AllForms";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user-forms",
    element: <AllForms />,
  },
]);

 export const BACKEND_URL="http://localhost:5000"


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
