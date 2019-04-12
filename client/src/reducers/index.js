import { combineReducers } from 'redux';
import musicReducer from './musicReducer';
import albumReducer from './albumReducer';
import menuReducer from './menuReducer';
import landingReducer from './landingReducer';

export default combineReducers({
    music: musicReducer,
    albums: albumReducer,
    menu: menuReducer,
    landing: landingReducer
})
