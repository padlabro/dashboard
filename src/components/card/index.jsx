import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
import { Behance, Musicbrainz, Youtube, Weather } from '..';

const CardComp = props => {
  const { data, loading, error } = props;
  if (loading) {
    return (
      <div className="card">
        <img src="../../../public/spinner.svg" />
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }
  switch (data.name) {
    case 'youtube':
      return (
        <div className="card">
          <Youtube data={data.item} />
        </div>
      );
    case 'musicbrainz':
      return (
        <div className="card">
          <Musicbrainz data={data.item} />
        </div>
      );
    case 'metaweather':
      return (
        <div className="card">
          <Weather data={data.item.data[0]} />
        </div>
      );
    case 'behance':
      return (
        <div className="card">
          <Behance data={data.item.user} />
        </div>
      );

    default:
      return <></>;
  }
};

CardComp.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.shape({
    name: PropTypes.string,
    item: PropTypes.object
  })
};

CardComp.defaultProps = {
  data: {}
};

export default CardComp;
