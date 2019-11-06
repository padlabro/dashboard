import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SettingsComp } from '../components';
import { settingsActions } from '../actions';

const Settings = ({ addUser, users, userId, editUser, deleteUser }) => {
  const [userData, setUserData] = useState({});
  const [isHidden, setHidden] = useState(true);
  const [isUserEditing, setUserEditing] = useState(false);
  const [error, setError] = useState(false);

  const deleteUserData = event => {
    event.preventDefault();
    deleteUser();
    setUserEditing(false);
    setUserData({
      name: '',
      surname: '',
      username: '',
      email: '',
      about: ''
    });
  };

  const editUserData = event => {
    event.preventDefault();
    setUserData(users[userId]);
    setHidden(false);
    setUserEditing(true);
  };
  const saveUserChanges = event => {
    event.preventDefault();
    if (userData.username === '') {
      setError(true);
    } else {
      setError(false);
      editUser(userData);
    }
  };

  const exitFromEdit = event => {
    event.preventDefault();
    setUserEditing(false);
    setUserData({
      name: '',
      surname: '',
      username: '',
      email: '',
      about: ''
    });
  };

  const openAddForm = event => {
    event.preventDefault();
    if (isHidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  const onNewUser = () => {
    if (!userData.username) {
      setError(true);
    } else {
      addUser(userData);
      setError(false);
    }
  };
  const handleInput = event => {
    const { value } = event.target;
    const { name } = event.currentTarget;
    setUserData(() => ({
      ...userData,
      [name]: value
    }));
  };

  return (
    <SettingsComp
      onNewUser={onNewUser}
      handleInput={handleInput}
      isHidden={isHidden}
      openAddForm={openAddForm}
      userFormHidden={userId}
      users={users}
      userId={userId}
      isUserEditing={isUserEditing}
      editUserData={editUserData}
      userData={userData}
      exitFromEdit={exitFromEdit}
      saveUserChanges={saveUserChanges}
      deleteUser={deleteUserData}
      error={error}
    />
  );
};

Settings.propTypes = {
  addUser: PropTypes.func,
  users: PropTypes.array,
  userId: PropTypes.number,
  editUser: PropTypes.func,
  deleteUser: PropTypes.func
};

export default connect(
  ({ settings }) => ({ users: settings.users, userId: settings.activeUser }),
  settingsActions
)(Settings);
