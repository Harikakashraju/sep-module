import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App component with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);

