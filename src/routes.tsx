import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";

const Home = lazy(() => import("@pages/Home/Home"));
const ProjectList = lazy(() => import("@pages/Projects/ProjectList"));
const Trifly = lazy(() => import("@pages/Projects/Trifly"));
const Toucheese = lazy(() => import("@pages/Projects/Toucheese"));
const Wish = lazy(() => import("@pages/Projects/Wish"));
const Portfolio = lazy(() => import("@pages/Projects/Portfolio"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "project",
        children: [
          {
            path: "list",
            element: <ProjectList />,
          },
          {
            path: "trifly",
            element: <Trifly />,
          },
          {
            path: "toucheese",
            element: <Toucheese />,
          },
          {
            path: "wish",
            element: <Wish />,
          },
          {
            path: "portfolio",
            element: <Portfolio />,
          },
        ],
      },
    ],
  },
]);

export default router;
