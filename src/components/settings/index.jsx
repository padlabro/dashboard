import React from "react";
import "./Settings.scss";
import cn from "classnames";
import { UserForm } from "../";
const SettingsComp = props => {
  const {
	deleteUser,
    openAddForm,
    isHidden,
    userFormHidden,
    handleInput,
    addUser,
    users,
    id,
    saveUserChanges,
    editUserData,
	isUserEditing,
	error,
	data,
	exitFromEdit
  } = props;
  return (
    <div className="settings">
      <button onClick={openAddForm} className="settings__button">
        <img src="./icons/plus.svg" alt="plus" />
        Add
      </button>
      <div className="settings__inner">
        <div className={cn("settings__user", { hidden: userFormHidden })}>
          {id!==false ? (
            <>
              <UserForm data={data} users={users} id={id} />
              <button className="btn-right" onClick={editUserData}>
                <img src="./icons/edit.svg" alt="edit" />
                Edit
              </button>
			  <button className="btn-left" onClick={deleteUser}>
                Delete
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
        <form
          className={cn("settings__addUser", { hidden: isHidden })}
        >
          {isUserEditing ? (
            <p>Редактировать пользователя</p>
          ) : (
            <p>Добавить пользователя</p>
          )}
          <UserForm
		  	error={error}
            data={data}
            edit={true}
            users={users}
            id={id}
            handleInput={handleInput}
          />
          {isUserEditing ? (
            <>
              <button type="submit" onClick={exitFromEdit} className="settings__exit">
                Exit
              </button>
              <button type="submit" onClick={saveUserChanges} className="settings__add">
                Save
              </button>
            </>
          ) : (
            <button type="submit" onClick={addUser} className="settings__add">
              Add user
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
export default SettingsComp;
