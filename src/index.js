import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
