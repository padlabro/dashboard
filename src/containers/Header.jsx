import React, { useState } from "react";
import { HeaderComp } from "../components/";
import { connect } from "react-redux";
import { settingsActions } from "../actions/";
import history from '../history';

const Header = ({ users,setActiveUser }) => {
  const [isHidden, setHidden] = useState(true);
  const openModal = event => {
	event.preventDefault();
    if ((isHidden)&&(event.target.name==='bell')) {
	  setHidden(false);
	}
	if ((!isHidden)&&(event.target.name==='bell')) {
		setHidden(true);
	}
  };
  const selectUser = event =>{
	  event.preventDefault();
	  setActiveUser(Number(event.target.id))
	  setHidden(true);
	  history.push('/main')
  }
  return (
    <HeaderComp openModal={openModal} usersList={users} isHidden={isHidden} selectUser={selectUser}/>
  );
};

export default connect(({ settings }) => ({ users: settings.users }),settingsActions)(Header);
