import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


import { TopLoaderProvider } from "_contexts/TopLoaderProvider";

import ToastProvider from "_contexts/ToastProvider";
import AuthProvider from "_contexts/AuthProvider";
import { ROUTES } from "_routes/routes";


const router = createHashRouter(ROUTES);



function App() {
  return (
    <React.Fragment>

      <ToastProvider>
        <TopLoaderProvider>

          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
          
        </TopLoaderProvider>
      </ToastProvider>

    </React.Fragment>
  );
}

export default App;
