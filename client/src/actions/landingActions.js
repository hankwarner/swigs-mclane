import { SET_INSTAGRAM_FEED, INSTAGRAM_LOADING } from './types';

export const setInstagramFeed = (instafeed) => dispatch => {
    dispatch(setInstagramLoading());
    dispatch({
        type: SET_INSTAGRAM_FEED,
        payload: instafeed
    })
};

export const setInstagramLoading = () => {
    return {
        type: INSTAGRAM_LOADING
    };
};
