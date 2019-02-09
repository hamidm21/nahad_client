import { combineReducers } from 'redux';
import home from './reducer/Home';
// import login from './reducer/Login';
// import register from './reducer/Register';
// import news_list from './reducer/NewsList';
// import news from './reducer/News';

const rootReducer = combineReducers({
  home,
  // login,
  // register,
  // news_list, 
  // news
});

export default rootReducer;