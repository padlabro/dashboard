import React from 'react';
import './Behance.scss';
import PropTypes from 'prop-types';

const Behance = props => {
  const { data } = props;
  return (
    <div className="behance">
      <p>
        username:
        {data.username}
      </p>
      <p>
        {data.first_name} {data.last_name}
      </p>
      <p>
        from:
        {data.country}
      </p>
      <p>{data.website}</p>
    </div>
  );
};

export default Behance;

Behance.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    country: PropTypes.string,
    website: PropTypes.string
  })
};
Behance.defaultProps = {
  data: undefined
};
