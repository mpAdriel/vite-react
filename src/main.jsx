import React from 'react';
import ReactDOM from 'react-dom/client';

// redux
import { Provider } from 'react-redux';
// persist
import { PersistGate } from 'redux-persist/integration/react';

// views
import AppView from './modules/app/AppView';

// style
import './assets/css/index.scss';
import './assets/css/custom.scss';
import './assets/css/bootstrap.scss';

// persist
import exportStore from './common/redux/store';
const { store, persistor } = exportStore;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppView />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
