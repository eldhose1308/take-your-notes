import React, { useEffect } from "react";
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
import useUser from "_hooks/useUser";
import setTheme from "_utils/setTheme";


const router = createHashRouter(ROUTES);


// make it a class component!!
function App() {
  const { getUserPreferences } = useUser();

  useEffect(() => {
    const { theme } = getUserPreferences();
    
    setTheme(theme);
  },[])

  return (
    <React.Fragment>
      <div className="app-root">

      <Provider store={store}>

        <ToastProvider>
          <TopLoaderProvider>

            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>

          </TopLoaderProvider>
        </ToastProvider>
      </Provider>
      </div>

    </React.Fragment>
  );
}

export default App;
