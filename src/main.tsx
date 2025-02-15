import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

import 'modern-normalize/modern-normalize.css';
import { GlobalStyles, theme } from './styles';
import { persistor, store } from './redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/fs-86-react-node-Robertw8/">
      <Provider store={store}>
        <Global styles={GlobalStyles} />
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider theme={theme}>
            <Toaster />
            <App />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
