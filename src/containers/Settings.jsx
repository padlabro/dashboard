import React, { useState, useEffect } from "react";
import { SettingsComp } from "../components/";
import { connect } from "react-redux";
import { settingsActions } from "../actions/";

const Settings = ({ addUser, users, id, editUser, deleteUser }) => {
  const [data, setData] = useState({});
  const [isHidden, setHidden] = useState(true);
  const [userFormHidden, setUserFormHidden] = useState(true);
  const [isUserEditing, setUserEditing] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id !== false) {
      setUserFormHidden(false);
    } else {
      setUserFormHidden(true);
    }
  }, [id]);

  const deleteUserData = event => {
    event.preventDefault();
    deleteUser();
    setUserEditing(false);
    setData({ name: "", surname: "", username: "", email: "", about: "" });
  };

  const editUserData = (event) => {
	  event.preventDefault();
    setData(users[id]);
    setHidden(false);
    setUserEditing(true);
  };
  const saveUserChanges = event => {
	event.preventDefault();
	if(data.username===""){
		setError(true);
	}else{
		setError(false);
		editUser(data);
	}
  };

  const exitFromEdit = event => {
    event.preventDefault();
    setUserEditing(false);
    setData({ name: "", surname: "", username: "", email: "", about: "" });
  };

  const openAddForm = event => {
    event.preventDefault();
    if (isHidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  const addUserr = event => {
	event.preventDefault();
    if ((!data.username)) {
      setError(true);
    } else {
      setData({ name: "", surname: "", username: "", email: "", about: "" });
	  addUser(data);
	  setError(false);
    }
  };
  const handleInput = event => {
    const { value } = event.target;
    const { name } = event.currentTarget;
    setData(() => ({
      ...data,
      [name]: value
    }));
  };

  return (
    <SettingsComp
      addUser={addUserr}
      handleInput={handleInput}
      isHidden={isHidden}
      openAddForm={openAddForm}
      users={users}
      id={id}
      userFormHidden={userFormHidden}
      isUserEditing={isUserEditing}
      editUserData={editUserData}
      data={data}
      exitFromEdit={exitFromEdit}
      saveUserChanges={saveUserChanges}
	  deleteUser={deleteUserData}
	  error={error}
    ></SettingsComp>
  );
};
export default connect(
  ({ settings }) => ({ users: settings.users, id: settings.activeUser }),
  settingsActions
)(Settings);
