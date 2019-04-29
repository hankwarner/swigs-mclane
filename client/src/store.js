import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const checkEnvironment = () => {
    if (process.env.NODE_ENV === 'development') return reduxDevTools;
}

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    // add Redux devtools if in dev environment
    checkEnvironment()
));

export default store;
