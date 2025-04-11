import type { RouterProps } from "../models";
import { Paths } from "../models";
import { Login, Home } from "../pages";

const [login, home] = Paths;

export const Router: RouterProps = [
  {
    path: login,
    element: <Login />,
  },
  {
    path: home,
    element: <Home />,
  },
];
