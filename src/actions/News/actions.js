import * as actionCreators from './actionCreators';
import axios from '../../utils/axios';


export function fetchNews (news_id) {
    return async dispatch => {
        try {
            dispatch(actionCreators.fetchNews())
            const response = await axios.get(`/news/find_by_id/${news_id}`)
            console.log(response.data.data)
            if (response.data.result) {
                dispatch(actionCreators.fetchNewsSuccess(response.data.message, response.data.result, response.data.data));
            } else {
                dispatch(actionCreators.fetchNewsFailed(response.data.message, response.data.result, response.data.data))
            }
        } catch (e) {
            dispatch(actionCreators.fetchNewsFailed(e))
        }
    }
}