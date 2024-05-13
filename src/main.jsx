import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'; 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import CSV from "./components/CSV.jsx";
import Admin from "./components/admin/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/csv",
        element: <CSV />
      },
      {
        path: "/admin",
        element: <Admin />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
