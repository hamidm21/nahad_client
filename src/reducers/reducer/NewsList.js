import {
    SEARCH_NEWS,
    SEARCH_NEWS_FAILED,
    SEARCH_NEWS_SUCCESS,
    FETCH_NEWS,
    FETCH_NEWS_FAILED,
    FETCH_NEWS_SUCCESS
} from '../../actions/NewsList/actionTypes'


const init = {
    loading: true,
    errorMessage: '',
    news: [
        {
            moment: '1397/02/02 22:22',
            _id: '',
            title: '',
            description: '',
            img: '',
            category: '',
            author: ''
        }
    ],
    pages: 1
};

export default function (state = init, action) {
    switch (action.type) {
        case SEARCH_NEWS:
            return Object.assign({}, state, {loading: true});
        case SEARCH_NEWS_SUCCESS:
            console.log(action.data)
            return Object.assign({}, state, {news: action.data})
        case SEARCH_NEWS_FAILED:
            return Object.assign({}, state, {errorMessage: action.message})
        case FETCH_NEWS:
            return Object.assign({}, state, {loading: true})
        case FETCH_NEWS_SUCCESS:
            return Object.assign({}, state, {news: action.data.news, pages: Math.ceil(action.data.totalCount/10), loading: false})
        case FETCH_NEWS_FAILED:
            return Object.assign({}, state, {errorMessage: action.message})
        default : 
            return state; 

    }
}