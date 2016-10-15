import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';
//import reducer from './reducers';
import style from './reducers/style';

//const store = createStore(reducer);
const store = createStore(style, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:textString)" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
