import { combineReducers } from 'redux';
import home from './reducer/Home';
import auth from './reducer/Auth';
import newsList from './reducer/NewsList';
import news from './reducer/News';
import search from './reducer/Search';

const rootReducer = combineReducers({
  home,
  auth,
  newsList, 
  news,
  search
});

export default rootReducer;