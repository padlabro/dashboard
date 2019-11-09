import React from 'react';
import './Youtube.scss';
import PropTypes from 'prop-types';

const Youtube = props => {
  const { data } = props;

  const renderItems = videos => {
    let itemsList = [];
    if (videos.items) {
      itemsList = videos.items.map(item => (
        <div className="card__video" key={item.snippet.title}>
          <iframe
            title={item.snippet.title}
            width="300"
            height="215"
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      ));
    }
    return itemsList;
  };
  const items = renderItems(data);

  return items;
};

Youtube.propTypes = {
  data: PropTypes.object
};

export default Youtube;
