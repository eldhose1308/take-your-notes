import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import store from "store/store";

import { TopLoaderProvider } from "_contexts/TopLoaderProvider";

import ToastProvider from "_contexts/ToastProvider";
import AuthProvider from "_contexts/AuthProvider";
import { ROUTES } from "_routes/routes";


const router = createHashRouter(ROUTES);



function App() {
  return (
    <React.Fragment>
  <Provider store={store}>

      <ToastProvider>
        <TopLoaderProvider>

          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
          
        </TopLoaderProvider>
      </ToastProvider>
  </Provider>

    </React.Fragment>
  );
}

export default App;
