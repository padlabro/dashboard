import React, { useEffect } from "react";
import { CardComp } from "../components";
import { connect } from "react-redux";
import Service from "../service/service";
const Card = ({ cardName, data }) => {
  useEffect(() => {
    if (cardName&&(cardName!==data.name)) {
      getApiData(cardName);
    }
  },[cardName,data.name]);

  const getApiData = async cardName => {
   Service.getData(cardName)
  };
  return <CardComp data={data}></CardComp>;
};
export default connect(
  ({ card }) => ({ cardName: card.nameOfCard, data: card.data }),
  Service
)(Card);
