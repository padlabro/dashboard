import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MainComp } from '../components';
import { mainActions } from '../actions';
import history from '../history';

const Main = ({ apis, reload, openedCard }) => {
  const [randomApis, setRandomApis] = useState([]);

  useEffect(() => {
    const rand = Math.floor(Math.random() * 4);
    const arr = apis.filter(i => i !== rand);
    setRandomApis(arr);
  }, [apis, reload]);

  const openCard = event => {
    event.preventDefault();
    openedCard(event.currentTarget.id);
    history.push('/card');
  };

  return <MainComp randomApis={randomApis} openCard={openCard} />;
};

Main.propTypes = {
  apis: PropTypes.array,
  reload: PropTypes.number,
  openedCard: PropTypes.func
};

export default connect(
  ({ main }) => ({
    apis: main.apis,
    reload: main.activeUser
  }),
  mainActions
)(Main);
