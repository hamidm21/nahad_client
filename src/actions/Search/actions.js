import * as actionCreators from './actionCreators';
import axios from '../../utils/axios';

export function fetchSearchResult (page, limit, phrase) {
    return async dispatch => {
        try {
            dispatch(actionCreators.searchNews())
            const response = await axios.post('/news/search_news', {page, limit, phrase})
            console.log({response})
            if(response.data.result) {
                console.log({response})
                dispatch(actionCreators.searchNewsSuccess(response.data.message, response.data.result, response.data.data))
            }else
                dispatch(actionCreators.searchNewsFailed(response.data.message, response.data.result, response.data.data))
        } catch (e) {
            dispatch(actionCreators.searchNewsFailed(e))
        }
    }
}
