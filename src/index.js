import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
//import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
//import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import App from './containers/App';
//import reducer from './reducers';
import style from './reducers/style';



import 'normalize.css'; // Tell Webpack that Button.js uses these styles


const logger = store => next => action => {
//    console.group(action.type);
//    console.info('dispatching', action);
//    let result = next(action);
//    console.log('next state', store.getState());

//    const state = store.getState();
//    browserHistory.replace('/' + state.textString + '/' + state.strokeWidth);

//    console.groupEnd(action.type);
//    return result;

    return next(action);
};


//const store = createStore(reducer);
//const store = createStore(style, composeWithDevTools(
//    applyMiddleware(logger)
//));

const store = createStore(style, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:textString)/(:fontSize)/(:leftStrokeColor)/(:rightStrokeColor)/(:strokeWidth)" component={App} />
            <Route path="/(:textString)" component={App} />
            <Route path="*" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);


