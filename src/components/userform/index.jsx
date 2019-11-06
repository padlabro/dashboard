import React from 'react';
import './UserForm.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const UserForm = props => {
  const { edit, handleInput, users, userId, userData, error } = props;
  if (edit) {
    return (
      <>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            key="name"
            name="name"
            onChange={handleInput}
            placeholder="Иван"
            value={userData.name}
          />
        </div>
        <div>
          <label htmlFor="surname">Фамилия:</label>
          <input
            key="surname"
            name="surname"
            onChange={handleInput}
            placeholder="Иванов"
            value={userData.surname}
          />
        </div>
        <div>
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
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            key="email"
            name="email"
            onChange={handleInput}
            placeholder="mazay123@mail.ru"
            value={userData.email}
          />
        </div>
        <div className="form__textarea">
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
  }
  return (
    <>
      <div>
        <span>Имя:</span>
        {users[userId].name}
      </div>
      <div>
        <span>Фамилия:</span>
        {users[userId].surname}
      </div>
      <div>
        <span>Логин:</span>
        {users[userId].username}
      </div>
      <div>
        <span>E-mail:</span>
        {users[userId].email}
      </div>
      <div className="about">
        <span>О себе:</span>
        {users[userId].about}
      </div>
    </>
  );
};

UserForm.propTypes = {
  edit: PropTypes.bool,
  handleInput: PropTypes.func,
  users: PropTypes.array,
  userId: PropTypes.number,
  error: PropTypes.bool,
  userData: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    about: PropTypes.string
  })
};

export default UserForm;
