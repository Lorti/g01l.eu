import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import App from './containers/App';
import reducer from './reducers/style';
import { CHANGE_TEXT_STRING } from './actions/index';

import 'normalize.css';

const logger = store => next => action => {
    if (action.type === CHANGE_TEXT_STRING) {
        document.title = action.value;
    }
    return next(action);
};

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(logger)
));

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
