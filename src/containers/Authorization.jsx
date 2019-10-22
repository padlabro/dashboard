import { AuthorizationComp } from "../components/";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { authActions } from "../actions/";

const Authorization = ({ hasToken, setToken }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
	  if(hasToken){
		history.push("/main");
	  }
  },[hasToken]);

  const ChangeLogin = e => {
    const value = e.currentTarget.value;
    setLogin(value);
  };
  const ChangePassword = e => {
    const value = e.currentTarget.value;
    setPassword(value);
  };
  const logIn = e => {
    if (login && password) {
      const token = Math.floor(Math.random() * 99999999999);
      localStorage.setItem("token", token);
      setToken(token);
    }
  };
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <AuthorizationComp
      handleChangeLogin={ChangeLogin}
      handleChangePassword={ChangePassword}
      logIn={logIn}
    ></AuthorizationComp>
  );
};

export default connect(
  ({ auth }) => ({ hasToken: auth.isAuth }),
  authActions
)(Authorization);
