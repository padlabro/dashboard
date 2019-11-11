import React from 'react';
import './Settings.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { UserData, UserForm } from '..';

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
      <button type="button" onClick={openAddForm} className="btn btn-add">
        <img src="../../../public/icons/plus.svg" alt="plus" />
        Add
      </button>
      <div className="settings__inner">
        <div className={cn('settings__user user-edit', { hidden: userId === null })}>
          {userId !== null ? (
            <>
              <UserData userData={userData} users={users} userId={userId} />
              <button type="button" className="btn btn-edit" onClick={editUserData}>
                Edit
              </button>
              <button type="button" className="btn btn-delete" onClick={deleteUser}>
                Delete
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
        <form className={cn('settings__user user-add', { hidden: isHidden })}>
          {isUserEditing ? (
            <p className="user-add__title">Редактировать пользователя</p>
          ) : (
            <p className="user-add__title">Добавить пользователя</p>
          )}
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
              <button type="button" onClick={exitFromEdit} className="btn btn-exit">
                Exit
              </button>
              <button type="button" onClick={saveUserChanges} className="btn btn-save">
                Save
              </button>
            </>
          ) : (
            <button type="button" onClick={onNewUser} className="btn btn-user-add">
              Add user
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

SettingsComp.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  openAddForm: PropTypes.func.isRequired,
  editUserData: PropTypes.func.isRequired,
  exitFromEdit: PropTypes.func.isRequired,
  saveUserChanges: PropTypes.func.isRequired,
  onNewUser: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  isUserEditing: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  userId: PropTypes.number,
  error: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired
};

SettingsComp.defaultProps = {
  userId: null
};

export default SettingsComp;
