import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider, useSelector } from 'react-redux';

/* Custom variables */
import { store } from './store/store';

/* Pages */
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import ContentShell from './pages/content-shell/content-shell';
import Events from './pages/events/events';
import GitHub from './pages/github/github';
import Home from './pages/home/home';
import Music from './pages/music/music';
import NotFound from './pages/404/not-found';
import PageShell from './pages/page-shell/page-shell';
import Portfolio from './pages/portfolio/portfolio';
import Writing from './pages/writing/writing';
import './styles/_app.scss';

const Root = () => {
  const theme = useSelector((state: any) => state.theme);
  console.log(theme);
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageShell />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/content" element={<ContentShell />}>
              <Route path="blog" element={<Blog />} />
              <Route path="events" element={<Events />} />
              <Route path="github" element={<GitHub />} />
              <Route path="music" element={<Music />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="writing" element={<Writing />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
};

const container: any = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);