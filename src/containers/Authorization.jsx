import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../history';
import { AuthorizationComp } from '../components';
import { authActions } from '../actions';

const Authorization = ({ hasToken, setToken }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (hasToken) {
      history.push('/main');
    }
  }, [hasToken]);

  const ChangeLogin = e => {
    const { value } = e.currentTarget;
    setLogin(value);
  };
  const ChangePassword = e => {
    const { value } = e.currentTarget;
    setPassword(value);
  };
  const logIn = e => {
    e.preventDefault();
    if (login && password) {
      const token = Math.floor(Math.random() * 99999999999);
      localStorage.setItem('token', token);
      setToken();
    }
  };
  return (
    <AuthorizationComp ChangeLogin={ChangeLogin} ChangePassword={ChangePassword} logIn={logIn} />
  );
};

Authorization.propTypes = {
  hasToken: PropTypes.bool.isRequired,
  setToken: PropTypes.func.isRequired
};

export default connect(
  ({ auth }) => ({ hasToken: auth.isAuth }),
  authActions
)(Authorization);
