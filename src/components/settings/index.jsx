import React from 'react';
import './Settings.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { UserForm } from '..';

const SettingsComp = props => {
  const {
    deleteUser,
    openAddForm,
    isHidden,
    handleInput,
    onNewUser,
    users,
    userId,
    saveUserChanges,
    editUserData,
    isUserEditing,
    error,
    userData,
    exitFromEdit
  } = props;
  return (
    <div className="settings">
      <button type="button" onClick={openAddForm} className="settings__button">
        <img src="../../../public/icons/plus.svg" alt="plus" />
        Add
      </button>
      <div className="settings__inner">
        <div className={cn('settings__user', { hidden: userId === null })}>
          {userId !== null ? (
            <>
              <UserForm userData={userData} users={users} userId={userId} />
              <button type="button" className="btn-right" onClick={editUserData}>
                <img src="../../../public/icons/edit.svg" alt="edit" />
                Edit
              </button>
              <button type="button" className="btn-left" onClick={deleteUser}>
                Delete
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
        <form className={cn('settings__addUser', { hidden: isHidden })}>
          {isUserEditing ? <p>Редактировать пользователя</p> : <p>Добавить пользователя</p>}
          <UserForm
            error={error}
            userData={userData}
            edit
            users={users}
            userId={userId}
            handleInput={handleInput}
          />
          {isUserEditing ? (
            <>
              <button type="button" onClick={exitFromEdit} className="settings__exit">
                Exit
              </button>
              <button type="button" onClick={saveUserChanges} className="settings__add">
                Save
              </button>
            </>
          ) : (
            <button type="button" onClick={onNewUser} className="settings__add">
              Add user
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

SettingsComp.propTypes = {
  deleteUser: PropTypes.func,
  openAddForm: PropTypes.func,
  editUserData: PropTypes.func,
  exitFromEdit: PropTypes.func,
  saveUserChanges: PropTypes.func,
  onNewUser: PropTypes.func,
  handleInput: PropTypes.func,
  isHidden: PropTypes.bool,
  isUserEditing: PropTypes.bool,
  users: PropTypes.array,
  userId: PropTypes.number,
  error: PropTypes.bool,
  userData: PropTypes.object
};

export default SettingsComp;
