import { GET_MENU_ITEMS, SET_ACTIVE_MENU_ITEM } from './types';

export const getMenuItems = () => {
    return {
        type: GET_MENU_ITEMS
    };
};

export const setActiveMenuItem = activeItem => {
    return {
        type: SET_ACTIVE_MENU_ITEM,
        payload: activeItem
    };
};
