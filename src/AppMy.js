import Template from "_components/Dashboard/Template/Template";
import { useClientAuth } from "_contexts/AuthProvider";
import { SignIn } from "_pages/auth";
import Home from "_pages/home/Home/Home";
import React from "react";
import {
  Outlet
} from "react-router-dom";


export const NoDashboardLayout = () => {
  const { isAuthenticated } = useClientAuth();
  if (isAuthenticated) {
    return (
      <p className="text-default">Logged in page</p>
    )
  }

  return (
    <Outlet />
  )
}


export const WithDashboardLayout = () => {
  // const token = useDecodeToken();
  const { isAuthenticated } = useClientAuth();

  if (!isAuthenticated) {
    return <SignIn />
  }

  return (
    <React.Fragment>
      <Template>
        <Outlet />
      </Template>
    </React.Fragment>
  )
}

