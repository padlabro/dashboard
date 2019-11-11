import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SettingsComp } from '../components';
import { settingsActions } from '../actions';

class Settings extends Component {
  state = {
    userData: {},
    isHidden: true,
    isUserEditing: false,
    error: false
  };

  deleteUserData = event => {
    const { deleteUser } = this.props;
    event.preventDefault();
    deleteUser();
    this.setState({
      isUserEditing: false,
      userData: { name: '', surname: '', username: '', email: '', about: '' }
    });
  };

  editUserData = event => {
    const { users, userId } = this.props;
    event.preventDefault();
    this.setState({
      userData: users[userId],
      isHidden: false,
      isUserEditing: true
    });
  };

  saveUserChanges = event => {
    const { userData } = this.state;
    const { editUser } = this.props;
    event.preventDefault();
    if (userData.username === '') {
      this.setState({ error: true });
    } else {
      editUser(userData);
      this.setState({ error: false });
    }
  };

  exitFromEdit = event => {
    event.preventDefault();
    this.setState({
      isUserEditing: false,
      userData: { name: '', surname: '', username: '', email: '', about: '' }
    });
  };

  openAddForm = event => {
    const { isHidden } = this.state;
    event.preventDefault();
    if (isHidden) {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  };

  onNewUser = () => {
    const { userData } = this.state;
    const { addUser } = this.props;
    if (!userData.username) {
      this.setState({ error: true });
    } else {
      this.setState({
        userData: { name: '', surname: '', username: '', email: '', about: '' },
        error: false
      });
      addUser(userData);
    }
  };

  handleInput = event => {
    const { value } = event.target;
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      userData: { ...prevState.userData, [name]: value }
    }));
  };

  render() {
    const { users, userId } = this.props;
    const { isHidden, isUserEditing, userData, error } = this.state;
    return (
      <SettingsComp
        onNewUser={this.onNewUser}
        handleInput={this.handleInput}
        isHidden={isHidden}
        openAddForm={this.openAddForm}
        userFormHidden={userId}
        users={users}
        userId={userId}
        isUserEditing={isUserEditing}
        editUserData={this.editUserData}
        userData={userData}
        exitFromEdit={this.exitFromEdit}
        saveUserChanges={this.saveUserChanges}
        deleteUser={this.deleteUserData}
        error={error}
      />
    );
  }
}

Settings.propTypes = {
  addUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  userId: PropTypes.number,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};
Settings.defaultProps = {
  userId: null
};

export default connect(
  ({ settings }) => ({ users: settings.users, userId: settings.activeUser }),
  settingsActions
)(Settings);
