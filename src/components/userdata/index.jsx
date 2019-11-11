import React from 'react';
import './UserData.scss';
import PropTypes from 'prop-types';

const UserData = props => {
  const { users, userId } = props;
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
UserData.propTypes = {
  users: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired
};

export default UserData;
