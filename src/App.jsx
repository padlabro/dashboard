import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Authorization, Settings, Main, Card, Header } from './containers';
import './styles.scss';

const App = props => (
  <Switch>
    <Route exact path="/login" component={Authorization} />
    <Route
      path="/"
      render={() =>
        props.isAuth ? (
          <>
            <Header />
            <div className="main-content">
              <div className="container">
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/card" component={Card} />
              </div>
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  </Switch>
);

App.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default connect(({ auth }) => ({ isAuth: auth.isAuth }))(App);
