import Template from "_components/Dashboard/Template/Template";
import React from "react";
import {
    Outlet
  } from "react-router-dom";


export const NoDashboardLayout = () => {
    return (
      <Outlet />
    )
  }
  
  
  export const WithDashboardLayout = () => {
    // const token = useDecodeToken();
  
    return (
      <React.Fragment>
        <Template>
          <Outlet />
        </Template>
      </React.Fragment>
    )
  }
  
  