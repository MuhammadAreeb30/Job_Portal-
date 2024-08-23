import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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