import { SET_INSTAGRAM_FEED, INSTAGRAM_LOADING, SET_TWITTER_FEED, TWITTER_LOADING } from './types';
import axios from 'axios';
import * as serviceWorker from '../serviceWorker';

const api = serviceWorker.setApiUrl();

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

export const setTwitterFeed = () => dispatch => {
    dispatch(setTwitterLoading());
    axios.get(`${api}/twitter`).then(res => 
        dispatch({
            type: SET_TWITTER_FEED,
            payload: res.data
        })
    );
};

export const setTwitterLoading = () => {
    return {
        type: TWITTER_LOADING
    };
};
