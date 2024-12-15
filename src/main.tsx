import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageAboutMe from "./pages/about/index.tsx";
import PageHome from "./pages/home/index.tsx";
import Pages from "./pages/index.tsx";
import PagePortfolio from "./pages/portfolio/index.tsx";
import store from "./redux/store.ts";
import PageDetailPortfolio from "./pages/portfolio/DetailPortfolio.tsx";
import PageContact from "./pages/contact/index.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
    children: [
      {
        index: true,
        element: <PageHome />
      },
      {
        path: "aboutme",
        element: <PageAboutMe />
      },
      {
        path: "portfolio",
        element: <PagePortfolio />,
      },
      {
        path: "portfolio/:name",
        element: <PageDetailPortfolio />
      },
      {
        path: "contact",
        element: <PageContact />  
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
