import { combineReducers } from 'redux';
import musicReducer from './musicReducer';
import albumReducer from './albumReducer';
import menuReducer from './menuReducer';

export default combineReducers({
    music: musicReducer,
    albums: albumReducer,
    menu: menuReducer
})
