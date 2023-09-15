import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import {Search} from "./pages/Search/Search.jsx";
import {GlobalStyled} from "./GlobalStyled.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import {Authentication} from "./pages/Authentication/Authentication.jsx";
import {Profile} from "./pages/Profile/Profile.jsx";
import UserProvider from "./Context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
