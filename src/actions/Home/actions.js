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
            const activities = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'activities'})
            const nahadNews = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'nahadNews'})
            const uniNews = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'uniNews'})
            const multiMedia = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'multiMedia'})
            const book = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'book'})
            const all = await axios.post('/news/find_by_category', {page: 1, limit: 3, category: 'all'})
            if(activities.data.result && 
                nahadNews.data.result && 
                uniNews.data.result && 
                multiMedia.data.result && 
                book.data.result && 
                all.data.result) {
                const data = {
                    activities: activities.data.data,
                    nahadNews: nahadNews.data.data,
                    uniNews: uniNews.data.data,
                    multiMedia: multiMedia.data.data,
                    book: book.data.data,
                    all: all.data.data
                }
                dispatch(actionCreators.fetchCategoryNewsSuccess(all.data.message, all.data.result, data))
            } else {
                dispatch(actionCreators.fetchCategoryNewsFailed('error in get category news'))
            }
        } catch (e) {
            dispatch(actionCreators.fetchCategoryNewsFailed(e))
        }
    }
}