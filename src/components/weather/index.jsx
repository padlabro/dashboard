import React from 'react';
import PropTypes from 'prop-types';
import './Weather.scss';

const Weather = props => {
  const { data } = props;
  return (
    <div className="weather">
      <p>
        {data.city_name}
        {data.country_code}
      </p>
      <p>{data.temp}</p>
      <p>{data.weather.description}</p>
    </div>
  );
};

Weather.propTypes = {
  data: PropTypes.shape({
    city_name: PropTypes.string,
    country_code: PropTypes.string,
    temp: PropTypes.number,
    weather: PropTypes.shape({
      description: PropTypes.string
    })
  }).isRequired
};

export default Weather;
