import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Skeleton } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = lazy(() => import("../pages/home"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={<Skeleton animation="wave" variant="rectangular" />}
          >
            <Home />
            <Footer />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;
