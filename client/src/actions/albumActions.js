import axios from 'axios';
import { GET_ALBUMS, ADD_ALBUM, DELETE_ALBUM, ALBUMS_LOADING } from './types';

if (process.env.NODE_ENV == 'development') {
    var api  = '/api';
} else if (process.env.NODE_ENV == 'production') {
    var api = 'https://swigs-mclane.herokuapp.com/api';
}

export const getAlbums = () => dispatch => {
    dispatch(setAlbumsLoading());
    axios.get(`${api}/albums`).then(res =>
        dispatch({
            type: GET_ALBUMS,
            payload: res.data
        })
    );
};

export const addAlbum = (newAlbum) => dispatch => {
    axios.post(`${api}/albums`, newAlbum).then(res => {
        dispatch({
            type: ADD_ALBUM,
            payload: res.data
        })
    });
};

export const deleteAlbum = id => dispatch => {
    axios.delete(`${api}/albums/${id}`).then(res => {
        dispatch({
            type: DELETE_ALBUM,
            payload: id
        })
    });
};

export const setAlbumsLoading = () => {
    return {
        type: ALBUMS_LOADING
    };
};
