import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardComp } from '../components';
import service from '../service/service';

const Card = ({ cardName, data, loading, error, getData }) => {
  useEffect(() => {
    if (cardName && cardName !== data.name) {
      getData(cardName);
    }
  }, [cardName, data.name, getData]);

  return <CardComp data={data} loading={loading} error={error} />;
};

Card.propTypes = {
  getData: PropTypes.func,
  cardName: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.shape({
    name: PropTypes.string
  })
};

export default connect(
  ({ card }) => ({
    cardName: card.nameOfCard,
    data: card.data,
    loading: card.loading,
    error: card.error
  }),
  service
)(Card);
