import React from 'react';
// import { render } from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App/>);

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
