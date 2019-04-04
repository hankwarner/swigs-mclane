import { combineReducers } from 'redux';
import musicReducer from './musicReducer';
import menuReducer from './menuReducer';

export default combineReducers({
    music: musicReducer,
    menu: menuReducer
})
