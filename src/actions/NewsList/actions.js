import * as actionCreators from './actionCreators';
import axios from '../../utils/axios';

export function fetchSearchResult (page, limit, phrase) {
    return async dispatch => {
        try {
            dispatch(actionCreators.searchNewsSuccess())
            const response = await axios.post('/news/search_news', {page, limit, phrase})
            if(response.data.result) {
                dispatch(actionCreators.searchNewsSuccess(response.data.message, response.data.result, response.data.data))
            }else
                dispatch(actionCreators.searchNewsFailed(response.data.message, response.data.result, response.data.data))
        } catch (e) {
            dispatch(actionCreators.searchNewsFailed(e))
        }
    }
}

export function fetchNews(page, limit, category_name) {
    return async (dispatch) =>{
    try {
        dispatch(actionCreators.fetchNews());
        let category = ''
        switch (category_name) {
          case 'تکنولوژی':
            category = 'activities'
            break;
          case 'خودرو': 
            category = 'car'
            break;
          case 'اپلیکیشن':
            category = 'application'
            break;
          case'بازی':
            category = 'games'
            break;
            case 'علم و دانش': 
            category = 'science'
            break;
            case 'کسب و کار': 
            category = 'business'
            break;
            case 'بررسی': 
            category = 'check'
            break;
          case 'همه خبر ها':
            category = 'all'
            break;
          default:
            category = ''
        }
        const result = await axios.post('/news/find_by_category' , {page, limit, category});
        console.log(result)
        if(result.data.result){
          console.log(result.data)
          dispatch(actionCreators.fetchNewsSuccess(result.data.message, result.data.result, result.data.data))
        }else
          dispatch(actionCreators.fetchNewsFailed(result.data.message, result.data.result, result.data.data))
      }catch (e) {
        dispatch(actionCreators.fetchNewsFailed(e))
      }
    }
  }