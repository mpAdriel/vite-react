import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

// resources
import rootReducer from './rootReducer';
import { isLocal } from '../utils/Utils';

const middleware = isLocal() ? [thunk, logger] : [thunk];
const enhancers = [applyMiddleware(...middleware)];

// console.log(`JSON.parse(localStorage.getItem('persist:root'))`, JSON.parse(localStorage.getItem('persist:root')))

const store = createStore(rootReducer, composeWithDevTools(...enhancers));

const persistor = persistStore(store);
const exportStore = { store, persistor };

export default exportStore;
