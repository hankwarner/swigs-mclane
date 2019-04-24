import { GET_MENU_ITEMS, SET_ACTIVE_MENU_ITEM } from '../actions/types';

const initialState = {
    menuItems: [
        'home',
        'music',
        'video',
        'merch'
    ],
    activeItem: "home"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_ITEMS:
            return {
                ...state
            };
        case SET_ACTIVE_MENU_ITEM:
            return {
                ...state,
                activeItem: action.payload
            };
        default:
            return state;
    }
}
