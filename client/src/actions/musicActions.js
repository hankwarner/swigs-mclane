import axios from 'axios';
import { GET_MUSIC, ADD_MUSIC, DELETE_MUSIC, MUSIC_LOADING } from './types';

export const getMusic = () => dispatch => {
    dispatch(setMusicLoading());
    axios.get('/api/songs').then(res => 
        dispatch({
            type: GET_MUSIC,
            payload: res.data
        })
    );
};

export const addMusic = (newMusic) => dispatch => {
    axios.post('/api/songs', newMusic).then(res => {
        dispatch({
            type: ADD_MUSIC,
            payload: res.data
        })
    })
};

export const deleteMusic = id => dispatch => {
    axios.delete(`/api/songs/${id}`).then(res => {
        dispatch({
            type: DELETE_MUSIC,
            payload: id
        })
    })
}

export const setMusicLoading = () => {
    return {
        type: MUSIC_LOADING
    };
};