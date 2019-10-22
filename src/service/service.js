import { cardActions } from "../actions";
import store from "../store";
//ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW
const Service = {
  getData: name => {
    store.dispatch(cardActions.requestData(true));
    console.log(Service.switchFetch);
    Service.switchFetch(name)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        store.dispatch(cardActions.requestData(false));
        return response;
      })
      .then(response => response.json())
      .then(item =>
		store.dispatch(cardActions.requestDataSuccess({ item, name }))
      )
      .catch(() => store.dispatch(cardActions.requestDataError(true)));
  },
  switchFetch: name => {
    switch (name) {
      case "musicbrainz":
        return fetch(
          "http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json"
        );
      case "metaweather":
        return fetch("https://api.weatherbit.io/v2.0/current?city=Krasnoyarsk&key=cb40d9e789b148bc8893be4f96ac64a3");
      case "youtube":	
        return fetch(
          "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCX3w3jB05SHLbGjZPR0PM6g&key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&maxResults=6"
		);
		case "behance":	
        return fetch(
          "https://cors-anywhere.herokuapp.com/https://api.behance.net/v2/users/arvindworld?client_id=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW"
        );
      default:
        return {};
    }
  }
};

export default Service;
