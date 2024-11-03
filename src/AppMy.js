import React, { useEffect } from "react";
import {
  Outlet, useNavigate
} from "react-router-dom";

import Template from "_components/Dashboard/Template/Template";
import { useClientAuth } from "_contexts/AuthProvider";
import useAuth from "_hooks/useAuth";
import { SignIn } from "_pages/auth";
import Home from "_pages/home/Home/Home";
import { redirectOnAuthorised, redirectOnUnAuthorised } from "_utils/auth";


export const NoDashboardLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user/home');
    }
  }, [isAuthenticated, navigate])


  return (
    <Outlet />
  )
}


export const WithDashboardLayout = (props) => {
  const { authRequired=true } = props;
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();


  useEffect(() => {
    if (authRequired && !isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate])


  // if (!isAuthenticated) {
  //   redirectOnUnAuthorised();
  // }

  return (
    <React.Fragment>
      <Template>
        <Outlet />
      </Template>
    </React.Fragment>
  )
}

