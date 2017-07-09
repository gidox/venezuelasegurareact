/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App/App';

import './index.css';

injectTapEventPlugin();
ReactDOM.render((
  <AppContainer>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    const routes = require('./containers/App/App').default;
    ReactDOM.render(
      <AppContainer>
        <BrowserRouter>
          <MuiThemeProvider>
            {routes}
          </MuiThemeProvider>
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('root'));
  });
}
