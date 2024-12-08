import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageHome from "./pages/home/index.tsx";
import PageAboutMe from "./pages/about/index.tsx";
import PagePortfolio from "./pages/portfolio/index.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/aboutme",
    element: <PageAboutMe />,
  },
  {
    path: "/portfolio",
    element: <PagePortfolio />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
