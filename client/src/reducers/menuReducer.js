import { GET_MENU_ITEMS } from '../actions/types';

const initialState = {
    menuItems: [
        'home',
        'media',
        'music',
        'video',
        'merch'
    ]
    // activeItem: 'home'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}
