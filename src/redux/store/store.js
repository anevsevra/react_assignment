import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const composedEnhancer = composeWithDevTools(middlewareEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancer);

sagaMiddleware.run(rootSaga);

export default store;
