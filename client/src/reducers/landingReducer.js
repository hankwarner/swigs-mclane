import { SET_INSTAGRAM_FEED, INSTAGRAM_LOADING } from '../actions/types';

const initialState = {
    instagramFeed: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INSTAGRAM_FEED:
            return {
                ...state,
                instagramFeed: action.payload,
                loading: false
            };
        case INSTAGRAM_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
