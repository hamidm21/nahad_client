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

export function fetchCategoryNews () {
    return async dispatch => {
        try {
            dispatch(actionCreators.fetchCategoryNews())
            const technology = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'technology'})
            const science = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'science'})
            const car = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'car'})
            const application = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'application'})
            const games = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'games'})
            const business = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'business'})
            const check = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'check'})
            const all = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'all'})
            if(technology.data.result && 
                science.data.result && 
                car.data.result && 
                application.data.result && 
                games.data.result && 
                business.data.result && 
                check.data.result && 
                all.data.result) {
                const data = [
                    Object.assign({}, technology.data.data, {name: 'تکنولوژی'}),
                    Object.assign({}, science.data.data, {name: 'علم و دانش'}),
                    Object.assign({}, car.data.data, {name: 'خودرو'}),
                    Object.assign({}, application.data.data, {name: 'اپلیکیشن'}),
                    Object.assign({}, games.data.data, {name: 'بازی'}),
                    Object.assign({}, business.data.data, {name: 'کسب و کار'}),
                    Object.assign({}, check.data.data, {name: 'بررسی'}),
                    Object.assign({}, all.data.data, {name: 'همه خبر ها'})
                ]
                console.log({data})
                dispatch(actionCreators.fetchCategoryNewsSuccess(all.data.message, all.data.result, data))
            } else {
                dispatch(actionCreators.fetchCategoryNewsFailed('error in get category news'))
            }
        } catch (e) {
            dispatch(actionCreators.fetchCategoryNewsFailed(e))
        }
    }
}