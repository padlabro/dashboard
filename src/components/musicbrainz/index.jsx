import React from 'react';
import './Musicbrainz.scss';
import PropTypes from 'prop-types';

const Musicbrainz = props => {
  const { data } = props;
  return (
    <div className="music">
      <p className="music__title">{data.name}</p>
      <p className="music__from">{data.area['sort-name']}</p>
      <p className="music__description">{data.disambiguation}</p>
      <div className="music__start">
        since
        {data['life-span'].begin} to {data['life-span'].end}
      </div>
    </div>
  );
};

export default Musicbrainz;

Musicbrainz.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    area: PropTypes.object,
    disambiguation: PropTypes.string,
    'life-span': PropTypes.object
  })
};

Musicbrainz.defaultProps = {
  data: []
};
