import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ContentPage from "./components/ContentPage";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <ContentPage />,
      },
      
        {
          path: "/:country",
          element: <CountryDetail />,
      }
    ]
    }
  ]);

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)