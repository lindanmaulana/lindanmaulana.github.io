import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageAboutMe from "./pages/about/index.tsx";
import PageContact from "./pages/contact/index.tsx";
import PageDetailCertificate from "./pages/dashboard/DetailCertificate.tsx";
import PageDashboard from "./pages/dashboard/index.tsx";
import PageChatRoom from "./pages/discussion/index.tsx";
import PageHome from "./pages/home/index.tsx";
import Pages from "./pages/index.tsx";
import { PagePersonalLinks } from "./pages/personal-links/index.tsx";
import PageDetailPortfolio from "./pages/portfolio/DetailPortfolio.tsx";
import PagePortfolio from "./pages/portfolio/index.tsx";
import store from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: "aboutme",
        element: <PageAboutMe />,
      },
      {
        path: "portfolio",
        element: <PagePortfolio />,
      },
      {
        path: "portfolio/:name",
        element: <PageDetailPortfolio />,
      },
      {
        path: "contact",
        element: <PageContact />,
      },
      {
        path: "discussion",
        element: <PageChatRoom />,
      },
      {
        path: "dashboard",
        element: <PageDashboard />,
      },
      {
        path: "dashboard/:id",
        element: <PageDetailCertificate />,
      },
    ],
  },
  {
    path: "personal-links",
    element: <PagePersonalLinks />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
