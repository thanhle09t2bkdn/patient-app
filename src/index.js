import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes history={browserHistory} />
    </Provider>
  , document.querySelector('.container'));
