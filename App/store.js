import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import promoise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from "./reducers";
const logger = createLogger()
const middleware = applyMiddleware(promoise(), thunk, logger);

export default createStore(reducer,middleware);
