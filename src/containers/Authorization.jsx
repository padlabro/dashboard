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

  const handleChangeLogin = e => {
    const value = e.currentTarget.value;
    setLogin(value);
  };
  const handleChangePassword = e => {
    const value = e.currentTarget.value;
    setPassword(value);
  };
  const logIn = e => {
    if (login && password) {
      console.log("zashel");
      const token = Math.floor(Math.random() * 99999999999);
      localStorage.setItem("tokinnnnnnnn", token);
      setToken(token);
    }
  };
  if (localStorage.getItem("tokinnnnnnnn")) {
    return <Redirect to="/" />;
  }
  return (
    <AuthorizationComp
      handleChangeLogin={handleChangeLogin}
      handleChangePassword={handleChangePassword}
      logIn={logIn}
    ></AuthorizationComp>
  );
};

export default connect(
  ({ auth }) => ({ hasToken: auth.isAuth }),
  authActions
)(Authorization);
