import React from 'react';
import './Authorization.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Authorization = props => {
  const { ChangeLogin, ChangePassword, logIn } = props;
  return (
    <div className={classNames('authorization')}>
      <form>
        <label className="authorization__label">Введите имя пользователя и пароль</label>
        <input className="authorization__input" onChange={ChangeLogin} placeholder="Имя" />
        <input className="authorization__input" onChange={ChangePassword} placeholder="Пароль" />
        <button type="button" className="authorization__button" onClick={logIn}>
          Вход
        </button>
      </form>
    </div>
  );
};
export default Authorization;

Authorization.propTypes = {
  ChangeLogin: PropTypes.func.isRequired,
  ChangePassword: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};
