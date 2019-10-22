import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import cn from "classnames";
export default class HeaderComp extends Component {
  renderItems(users) {
    const userList = users.map((item, i) => (
      <div onClick={this.props.userClick} id={i}>
        {item.username}
      </div>
    ));
    return userList;
  }

  render() {
    const userss = this.renderItems(this.props.userss);
    return (
      <header className="header">
        <div className="container">
          <div className="header__content">
            <a onClick={this.props.toggleClick} href="/">
              <img className={cn({
                  select: !this.props.isHidden
                })} name={"bell"} src="./icons/bell.svg" alt="bell" />
              <div
                className={cn("header__notifications", {
                  hidden: this.props.isHidden
                })}
              >
                {userss}
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
}
