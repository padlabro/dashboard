import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import cn from "classnames";

const HeaderComp = (props)=>{
	const {usersList,selectUser,openModal,isHidden}=props
	const renderItems = (users) =>{
		const userList = users.map((item, i) => (
		  <div onClick={selectUser} id={i}>
			{item.username}
		  </div>
		));
		return userList;
	  }
	  const items = renderItems(usersList);
	  return (
		<header className="header">
		  <div className="container">
			<div className="header__content">
			  <a onClick={openModal} href="/">
				<img className={cn({
					select: !isHidden
				  })} name={"bell"} src="./icons/bell.svg" alt="bell" />
				<div
				  className={cn("header__notifications", {
					hidden: isHidden
				  })}
				>
				  {items}
				</div>
			  </a>
			</div>
			</div>
			<nav className="header__navigation">
			  <NavLink exact activeClassName="active" to="/settings">
				SETTINGS
			  </NavLink>
			  <NavLink exact activeClassName="active" to="/main">
				MAIN
			  </NavLink>
			  <NavLink exact activeClassName="active" to="/card">
				CARD
			  </NavLink>
			</nav>
		</header>
	  );
}
export default HeaderComp

   
