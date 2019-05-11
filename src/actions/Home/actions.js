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
                const data = [
                    Object.assign({}, activities.data.data, {name: 'فعالان عرصه فرهنگی'}),
                    Object.assign({}, nahadNews.data.data, {name: 'اخبار و فعالیت های نهاد'}),
                    Object.assign({}, uniNews.data.data, {name: 'اخبار فرهنگی دانشگاه'}),
                    Object.assign({}, multiMedia.data.data, {name: 'نشریه صوتی و تصویری'}),
                    Object.assign({}, book.data.data, {name: 'معرفی کتاب'}),
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