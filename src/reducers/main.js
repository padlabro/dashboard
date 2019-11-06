const initialState = {
  apis: [
    {
      name: 'youtube',
      descr: 'videos database /channel /video /playlists etc',
      icon: '../../../public/icons/youtube.svg'
    },
    {
      name: 'metaweather',
      descr: 'weather database /weather /temp /wind etc',
      icon: '../../../public/icons/weather.svg'
    },
    {
      name: 'musicbrainz',
      descr: 'musical database /albums /artists /releases etc',
      icon: '../../../public/icons/musicbrainz.png'
    },
    {
      name: 'behance',
      descr: 'design art database /projects /users /comments etc',
      icon: '../../../public/icons/behance.svg'
    }
  ],
  activeUser: null,
  nameOfCard: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVE_USER':
      return {
        ...state,
        activeUser: payload
      };
    default:
      return state;
  }
};
