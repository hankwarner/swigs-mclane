import { GET_MUSIC, ADD_MUSIC, DELETE_MUSIC, MUSIC_LOADING } from '../actions/types';

const initialState = {
    music: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC:
            return {
                ...state,
                music: action.payload,
                loading: false
            };
        case ADD_MUSIC:
            return {
                ...state,
                music: [action.payload, ...state.music]
            }
        case DELETE_MUSIC:
            return {
                ...state,
                music: state.music.filter(song => song._id !== action.payload)
            }
        case MUSIC_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
