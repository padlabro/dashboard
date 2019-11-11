import React from 'react';
import './Main.scss';
import PropTypes from 'prop-types';

const MainComp = props => {
  const { randomApis, openCard } = props;
  const renderItems = item => (
    <div id={item.name} key={item.name} className="api" onClick={openCard}>
      <div className="api__logo">
        <img src={item.icon} alt="icon" />
      </div>
      <p className="api__title">{item.name}</p>
      <p className="api__description">{item.descr}</p>
    </div>
  );

  const items = randomApis.map(item => renderItems(item));
  return <div className="main">{items}</div>;
};
export default MainComp;

MainComp.propTypes = {
  randomApis: PropTypes.arrayOf(PropTypes.object).isRequired,
  openCard: PropTypes.func.isRequired
};
