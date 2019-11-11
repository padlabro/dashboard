import React from 'react';
import './UserForm.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const UserForm = props => {
  const { handleInput, userData, error } = props;
  return (
    <>
      <div className="user-add__input-field">
        <label htmlFor="name">Имя:</label>
        <input
          key="name"
          name="name"
          onChange={handleInput}
          placeholder="Иван"
          value={userData.name}
        />
      </div>
      <div className="user-add__input-field">
        <label htmlFor="surname">Фамилия:</label>
        <input
          key="surname"
          name="surname"
          onChange={handleInput}
          placeholder="Иванов"
          value={userData.surname}
        />
      </div>
      <div className="user-add__input-field">
        <label htmlFor="username">Логин:</label>
        <input
          value={userData.username}
          className={cn({ error })}
          key="username"
          name="username"
          onChange={handleInput}
          placeholder="Mazay"
        />
      </div>
      <div className="user-add__input-field">
        <label htmlFor="email">E-mail:</label>
        <input
          key="email"
          name="email"
          onChange={handleInput}
          placeholder="mazay123@mail.ru"
          value={userData.email}
        />
      </div>
      <div className="user-add__textarea">
        <label htmlFor="about">О себе:</label>
        <textarea
          key="about"
          name="about"
          type="text"
          value={userData.about}
          onChange={handleInput}
          className="form-about"
          placeholder=""
        />
      </div>
    </>
  );
};

UserForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    about: PropTypes.string
  }).isRequired
};

export default UserForm;
