import React from "react";
import "./Card.scss";
import {Behance,Musicbrainz,Youtube,Weather} from '../';
const CardComp = props => {
  const { data } = props;

  switch (data.name) {
    case "youtube":
      return <div className="card"><Youtube data={data}></Youtube></div>;
    case "musicbrainz":
	  return <div className="card"><Musicbrainz data={data}></Musicbrainz></div>;
	  case "metaweather":
	  return <div className="card"><Weather data={data}></Weather></div>;
	  case "behance":
      return <div className="card"><Behance data={data}></Behance></div>;

    default:
      return <></>;
  }
};

export default CardComp;
