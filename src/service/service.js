import { cardActions } from '../actions';

const Service = {
  getData: name => dispatch => {
    const apis = {
      musicbrainz:
        'http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json',
      metaweather:
        'https://api.weatherbit.io/v2.0/current?city=Krasnoyarsk&key=cb40d9e789b148bc8893be4f96ac64a3',
      youtube:
        'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCX3w3jB05SHLbGjZPR0PM6g&key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&maxResults=6',
      behance:
        'https://cors-anywhere.herokuapp.com/https://api.behance.net/v2/users/arvindworld?client_id=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW'
    };
    dispatch(cardActions.requestData(true));
    fetch(apis[name])
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(item => dispatch(cardActions.requestDataSuccess({ item, name })))
      .catch(() => dispatch(cardActions.requestDataError(true)));
  }
};

export default Service;
