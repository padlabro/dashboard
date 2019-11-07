import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardComp } from '../components';
import Service from '../service/service';

const Card = ({ cardName, data }) => {
  useEffect(() => {
    if (cardName && cardName !== data.name) {
      getApiData(cardName);
    }
  }, [cardName, data.name]);

  const getApiData = async name => {
    Service.getData(name);
  };
  return <CardComp data={data} />;
};

Card.propTypes = {
  cardName: PropTypes.string,
  data: PropTypes.shape({
    name: PropTypes.string
  })
};

export default connect(
  ({ card }) => ({ cardName: card.nameOfCard, data: card.data }),
  Service
)(Card);