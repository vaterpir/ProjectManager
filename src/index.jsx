import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { HashRouter, Router } from 'react-router-dom';
import { App } from './components';
import { store } from './store';

const customHistory = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    {/* <HashRouter basename="/ProjectManager"> */}
    <Router history={customHistory}>
      <App />
    </Router>
    {/* </HashRouter> */}
  </Provider>,
  document.getElementById('root'),
);
