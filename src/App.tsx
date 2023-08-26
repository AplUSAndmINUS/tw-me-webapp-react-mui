import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
// import { useSelector, useDispatch } from 'react-redux';

/* Variables */
import { darkTheme, lightTheme } from './store/constants/constants';
// import { themeSlice } from './store/reducers/theme-slice';

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

const Root = () => {
  // const isDarkMode = useSelector((state: any) => state.toggleTheme.isDarkMode);
  const [theme, setTheme] = React.useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  // const dispatch = useDispatch();

  // set the logic, but toggle doesn't work; for now, setting as lightMode
  const handleToggle = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
    setIsDarkMode(!isDarkMode);
  };
    
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageShell 
              handleToggle={handleToggle}
              isDarkMode={isDarkMode} />}>
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

export const App = () => {
  return <Root />
};