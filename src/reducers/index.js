import { combineReducers } from 'redux';
import home_reducer from './reducer/home';

const rootReducer = combineReducers({
  home: home_reducer
});

export default rootReducer;