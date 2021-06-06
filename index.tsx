import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import { App } from './src/app/App';

ReactDOM.render(
  <IconContext.Provider value={{ size: '16px' }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IconContext.Provider>,
  document.getElementById('root'),
);
