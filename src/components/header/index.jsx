import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const HeaderComp = props => {
  const { usersList, selectUser, openModal, isHidden } = props;
  const renderItems = users => {
    const userList = users.map((item, i) => (
      <div onClick={selectUser} className="notification__item" id={i} key={item.username}>
        {item.username}
      </div>
    ));
    return userList;
  };
  const items = renderItems(usersList);
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a className="notification" onClick={openModal} href="/">
            <img
              className={cn('notification__img', {
                select: !isHidden
              })}
              src="../../../public/icons/bell.svg"
              id="bell"
              name="bell"
              alt="bell"
            />
            <div
              className={cn('notification__body', {
                hidden: isHidden
              })}
              name="bell"
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
};
export default HeaderComp;

HeaderComp.propTypes = {
  usersList: PropTypes.array,
  selectUser: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired
};

HeaderComp.defaultProps = {
  usersList: []
};
