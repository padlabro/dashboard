import React, { useState } from "react";
import { HeaderComp } from "../components/";
import { connect } from "react-redux";
import { settingsActions } from "../actions/";
import history from '../history';

const Header = ({ users,setActiveUser }) => {
  const [isHidden, setHidden] = useState(true);
  const toggleClick = event => {
	event.preventDefault();
    if ((isHidden)&&(event.target.name==='bell')) {
	  setHidden(false);
	}
	if ((!isHidden)&&(event.target.name==='bell')) {
		setHidden(true);
	}
  };
  const userClick = event =>{
	  event.preventDefault();
	  setActiveUser(Number(event.target.id))
	  setHidden(true);
	  history.push('/main')
  }
  return (
    <HeaderComp toggleClick={toggleClick} userss={users} isHidden={isHidden} userClick={userClick}/>
  );
};

export default connect(({ settings }) => ({ users: settings.users }),settingsActions)(Header);
