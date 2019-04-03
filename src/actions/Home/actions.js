import * as actionCreators from './actionCreators';
import axios from '../../utils/axios';

export function fetchSliderNews () {
    return async dispatch => {
        try {
            dispatch(actionCreators.fetchSlider())
            const response = await axios.get('/news/get_slider_news')
            if(response.data.result) {
                dispatch(actionCreators.fetchSliderSuccess(response.data.message, response.data.result, response.data.data))
            }else
                dispatch(actionCreators.fetchSliderFailed(response.data.message, response.data.result, response.data.data))
        } catch (e) {
            dispatch(actionCreators.fetchSliderFailed(e))
        }
    }
}