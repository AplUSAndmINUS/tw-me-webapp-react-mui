import React from 'react';
import Typography from '@mui/material/Typography';

import './styled';

// // this is where I am
// const GlobalStyle = createGlobalStyle<AppProps>`
//   body: {
//     background-image: ${props => props.isHomePage ? `url('./assets/images/HomePageCover4k.jpg')` : 'none'};
//   }
// `;


export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Home Page</Typography>
      </header>
    </div>
  )
}

export default Home;