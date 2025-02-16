const defaultState = {
    movieDetails: {}
};

export default function movieDetailReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_MOVIE_DETAIL_FULFILLED': {
        return {
          ...state,
          movieDetails: payload.data
        };
      }
      default: {
        return state;
      }
    }
  }