import { GET_MUSIC, ADD_MUSIC, DELETE_MUSIC, MUSIC_LOADING } from './types';
import axios from 'axios';

export const getMusic = () => dispatch => {
    dispatch(setMusicLoading());
    axios.get('/api/singles').then(res => 
        dispatch({
            type: GET_MUSIC,
            payload: res.data
        })
    );
};

export const addMusic = (newMusic) => dispatch => {
    axios.post('/api/singles', newMusic).then(res => {
        dispatch({
            type: ADD_MUSIC,
            payload: res.data
        })
    })
};

export const deleteMusic = id => dispatch => {
    axios.delete(`/api/singles/${id}`).then(res => {
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
