import React, { useEffect, useState } from "react";
import { MainComp } from "../components";
import { connect } from "react-redux";
import { mainActions } from "../actions";
import history from '../history';

const Main = ({ apis, reload, openedCard }) => {
  const [randomApis, setRandomApis] = useState([]);

  useEffect(() => {
    const rand = Math.floor(Math.random() * 4);
    const arr = apis.filter((item, i) => i !== rand);
    setRandomApis(arr);
  }, [apis, reload]);

  const openCard = (event) => {
	  event.preventDefault();
	openedCard(event.currentTarget.id)
	history.push("/card")
  };

  return <MainComp randomApis={randomApis} openCard={openCard} />;
};
export default connect(
  ({ main }) => ({
    apis: main.apis,
    reload: main.activeUser
  }),
  mainActions
)(Main);
