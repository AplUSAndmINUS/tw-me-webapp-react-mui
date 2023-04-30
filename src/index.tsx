import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

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
import { theme } from './theming/material-ui';
import './styles/_app.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);