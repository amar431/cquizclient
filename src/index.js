import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';

// import Store from './redux/Store';
import {Provider} from 'react-redux'
import { persistor, store } from './redux/Store.js';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    <ToastContainer />
  </Provider>,
);
