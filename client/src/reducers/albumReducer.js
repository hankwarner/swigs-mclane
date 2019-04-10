import { GET_ALBUMS, ADD_ALBUM, DELETE_ALBUM, ALBUMS_LOADING } from '../actions/types';

const initialState = {
    albums: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS:    
        return {
                ...state,
                albums: action.payload,
                loading: false
            };
        case ADD_ALBUM:
            return {
                ...state,
                albums: [action.payload, ...state.albums]
            }
        case DELETE_ALBUM:
            return {
                ...state,
                albums: state.albums.filter(album => album._id !== action.payload)
            }
        case ALBUMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
