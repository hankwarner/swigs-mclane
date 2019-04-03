import { GET_MUSIC, ADD_MUSIC, DELETE_MUSIC } from './types';

export const getMusic = () => {
    return {
        type: GET_MUSIC
    };
};
