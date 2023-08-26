import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
import { Theme } from '@mui/material';

/* Variables */
import { darkTheme, lightTheme } from './store/constants/constants';

/* Pages */
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import ContentShell from './pages/page-shell/content-shell/content-shell';
import Events from './pages/events/events';
import GitHub from './pages/github/github';
import Home from './pages/home/home';
import Music from './pages/music/music';
import NotFound from './pages/404/not-found';
import PageShell from './pages/page-shell/page-shell';
import Portfolio from './pages/portfolio/portfolio';
import Writing from './pages/writing/writing';

interface AppProps {
  theme: Theme;
}

export const App = ({theme}: AppProps) => {
  const dispatch = useDispatch();
  const [isThemeReady, setIsThemeReady] = React.useState(false);

  React.useEffect(() => {
    if (theme) {
      setIsThemeReady(true);
    }
  }, [theme]);

  console.log('Redux:', theme);

  return (
    !isThemeReady ? <LinearProgress />
    : (
      <ThemeProvider theme={lightTheme || theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageShell />}>
            {/* <Route path="/" element={<PageShell 
                handleToggle={handleToggle}
                isDarkMode={isDarkMode} />}> */}
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
  )
};

const mapStateToProps = (state: any) => ({
  theme: state.theme
});

export default connect(mapStateToProps)(App);