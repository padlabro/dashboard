import React from 'react';
import './Main.scss';
import PropTypes from 'prop-types';

const MainComp = props => {
  const { randomApis, openCard } = props;
  const renderItems = item => (
    <div id={item.name} key={item.name} className="main__api" onClick={openCard}>
      <div className="main__api-imgwrapper">
        <img src={item.icon} className="main__api-img" alt="icon" />
      </div>
      <p className="main__api-title">{item.name}</p>
      <p className="main__api-description">{item.descr}</p>
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
