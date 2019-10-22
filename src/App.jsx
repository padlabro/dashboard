import React from "react";
import { Authorization } from "./containers";
import { Switch, Route, Redirect } from "react-router-dom";
import { Settings, Main, Card, Header } from "./containers";
import { connect } from "react-redux";
import "./styles.scss";
const App = props => (
  <Switch>
    <Route exact path="/login" component={Authorization} />
    <Route
      path="/"
      render={() =>
        props.isAuth ? (
          <>
            <Header></Header>
            <div className="main__content">
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
export default connect(({ auth }) => ({ isAuth: auth.isAuth }))(App);
