import { SET_INSTAGRAM_FEED, INSTAGRAM_LOADING, SET_TWITTER_FEED, TWITTER_LOADING } from '../actions/types';

const initialState = {
    instagramFeed: [],
    instagramLoading: false,
    twitterFeed: [],
    twitterLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INSTAGRAM_FEED:
            return {
                ...state,
                instagramFeed: action.payload,
                instagramLoading: false
            };
        case INSTAGRAM_LOADING:
            return {
                ...state,
                instagramLoading: true
            };
        case SET_TWITTER_FEED:
            return {
                ...state,
                twitterFeed: action.payload,
                twitterLoading: false
            };
        case TWITTER_LOADING:
            return {
                ...state,
                twitterLoading: true
            };
        default:
            return state;
    }
}
