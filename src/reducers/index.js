import { combineReducers } from 'redux';
import home from './reducer/Home';
import auth from './reducer/Auth';
import newsList from './reducer/NewsList';
import news from './reducer/News';

const rootReducer = combineReducers({
  home,
  auth,
  newsList, 
  news
});

export default rootReducer;