const initialState = {
  apis: [
    { name: "youtube", descr: "videos database /channel /video /playlists etc", icon: "./icons/youtube.svg" },
    { name: "metaweather", descr: "weather database /weather /temp /wind etc", icon: "./icons/weather.svg" },
    {
      name: "musicbrainz",
      descr: "musical database /albums /artists /releases etc",
      icon: "./icons/musicbrainz.png"
    },
    { name: "behance", descr: "design art database /projects /users /comments etc", icon: "./icons/behance.svg" }
  ],
  activeUser: false,
  nameOfCard:''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ACTIVE_USER":
      return {
        ...state,
        activeUser: payload
	  };
    default:
      return state;
  }
};
