import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HeaderComp } from '../components';
import { settingsActions } from '../actions';
import history from '../history';

class Header extends Component {
  state = {
    isHidden: true
  };

  componentDidMount() {
    window.addEventListener('click', event => {
      if (event.target.getAttribute('name') !== 'bell') {
        this.setState({ isHidden: true });
      }
    });
  }

  openModal = event => {
    const { isHidden } = this.state;
    event.preventDefault();
    if (isHidden && event.target.id === 'bell') {
      this.setState({ isHidden: false });
    }
    if (!isHidden && event.target.id === 'bell') {
      this.setState({ isHidden: true });
    }
  };

  selectUser = event => {
    event.preventDefault();
    const { setActiveUser } = this.props;
    setActiveUser(Number(event.target.id));
    this.setState({ isHidden: false });
    history.push('/main');
  };

  render() {
    const { isHidden } = this.state;
    const { users } = this.props;
    return (
      <HeaderComp
        openModal={this.openModal}
        usersList={users}
        isHidden={isHidden}
        selectUser={this.selectUser}
      />
    );
  }
}

Header.propTypes = {
  users: PropTypes.array.isRequired,
  setActiveUser: PropTypes.func.isRequired
};

export default connect(
  ({ settings }) => ({ users: settings.users }),
  settingsActions
)(Header);
