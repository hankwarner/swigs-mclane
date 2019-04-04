import { GET_MUSIC } from '../actions/types';

const initialState = {
    music: [
        {
            title: "Red Light",
            album: "Red Light",
            year: 2018
        }, {
            title: "My City",
            album: "Elevated Mindstate",
            year: 2017
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC:
            return {
                ...state
            };
        default:
            return state;
    }
}
