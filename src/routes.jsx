import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Lists } from "./pages/lists";
import { Contact } from "./pages/contact";
import { Details } from "./pages/details";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lists",
    element: <Lists />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/lists/users/:linkLabel",
    element: <Details />,
  },
]);