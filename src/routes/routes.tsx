import { RouteObject } from "react-router-dom";

// Pages
import About from "../pages/about/about";
import Blog from "../pages/blog/blog";
import Contact from "../pages/contact/contact";
import ContentShell from "../pages/page-shell/content-shell/content-shell";
import Events from "../pages/events/events";
import GitHub from "../pages/github/github";
import Home from "../pages/home/home";
import Music from "../pages/music/music";
import NotFound from "../pages/404/not-found";
import PageShell from "../pages/page-shell/page-shell";
import Portfolio from "../pages/portfolio/portfolio";
import Writing from "../pages/writing/writing";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PageShell />,
    children: [
      { path: '/', element: <Home />, index: true },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {
        path: '/content',
        element: <ContentShell />,
        children: [
          { path: 'blog', element: <Blog /> },
          { path: 'events', element: <Events /> },
          { path: 'github', element: <GitHub /> },
          { path: 'music', element: <Music /> },
          { path: 'portfolio', element: <Portfolio /> },
          { path: 'writing', element: <Writing /> }
        ]
      },
      { path: '*', element: <NotFound /> }
    ]
  }
];