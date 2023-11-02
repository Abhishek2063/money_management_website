import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './app/routing/route'
import history from './app/routing/history'
import { Provider } from 'react-redux';
import { store } from './app/store/store.factory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'antd/dist/reset.css';
import './app/assets/css/loader.css'
import './app/assets/css/registration.css'

import Loader from './app/common/loader';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <Router history={history}>
          <AllRoutes />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
