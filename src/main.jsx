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
import './assets/css/tailwind.css';

// material ui
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './assets/css/ThemeMui';

// fonts mui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// persist
import exportStore from './common/redux/store';
const { store, persistor } = exportStore;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={mainTheme}>
          <AppView />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
