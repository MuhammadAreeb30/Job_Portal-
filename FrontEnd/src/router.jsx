import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
import Profile from "./components/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default appRouter;
