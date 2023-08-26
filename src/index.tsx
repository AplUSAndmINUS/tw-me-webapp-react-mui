import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

/* Custom variables */
import { store } from './store/store';

/* Pages */
import './styles/_app.scss';
import { App } from './App';

const container: any = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);