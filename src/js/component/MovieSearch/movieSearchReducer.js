const defaultState = {
    inputValue: '',
    searchResults: []
};

export default function movieSearchReducer(state = defaultState, action) {
    const { type, payload } = action

    switch (type) {

        case 'UPDATE_MOVIE_SEARCH': {
            return {
                ...state,
                inputValue: payload
            };
        }
        case 'GET_MOVIE_DETAILS_FULFILLED': {
            return {
                ...state,
                searchResults: payload.data.Search
            };
        }
        default: {
            return state;
        }
    }
}