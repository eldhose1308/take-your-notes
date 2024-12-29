import React, { Suspense, useEffect } from "react";
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
import { toggleFont } from "_utils/domUtils";
import FullPageSkeleton from "FullPageSkeleton";
import ConfirmDeleteDialogProvider from "_contexts/ConfirmDeleteDialogProvider";


const router = createHashRouter(ROUTES);

const AppLoader = () => (
  <div className="flex justify-center items-center h-screen w-full">
    <div className="loader"></div>
  </div>
);

// make it a class component!!
function App() {
  const { getUserPreferences } = useUser();

  useEffect(() => {
    const { theme, fontMode } = getUserPreferences();

    setTheme(theme);
    toggleFont(fontMode);
  }, [])

  return (
    <React.Fragment>
      <div className="app-root">

        <Provider store={store}>

          <ToastProvider>
            <TopLoaderProvider>
              <ConfirmDeleteDialogProvider>
                <AuthProvider>
                  <Suspense fallback={<FullPageSkeleton />}>
                    <RouterProvider router={router} />
                  </Suspense>
                </AuthProvider>
              </ConfirmDeleteDialogProvider>
            </TopLoaderProvider>
          </ToastProvider>
        </Provider>
      </div>

    </React.Fragment>
  );
}

export default App;
