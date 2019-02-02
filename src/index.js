import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles/index.css';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';
// import { Route, Switch } from 'react-router-dom';
// import { ConnectedRouter, history } from 'react-router-redux';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter> */}
    <App />
  </Provider>,
  document.getElementById('root')
);