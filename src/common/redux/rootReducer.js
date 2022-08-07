import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import AppReducer from './modules/app/AppReducer';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['AppReducer'], // add reducers if you want add at persist
  // blacklist: ['AppReducer'],
};

const reducers = combineReducers({
  AppReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default persistReducer(persistConfig, rootReducer);
