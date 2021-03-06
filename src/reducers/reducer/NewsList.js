import {
    FETCH_NEWS,
    FETCH_NEWS_FAILED,
    FETCH_NEWS_SUCCESS,
    ON_CHANGE
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
    pages: 1,
    search_value: ''
};

export default function (state = init, action) {
    switch (action.type) {
        case FETCH_NEWS:
            return Object.assign({}, state, {loading: true})
        case FETCH_NEWS_SUCCESS:
            return Object.assign({}, state, {news: action.data.news, pages: Math.ceil(action.data.totalCount/10), loading: false})
        case FETCH_NEWS_FAILED:
            return Object.assign({}, state, {errorMessage: action.message})
        case ON_CHANGE: 
            return Object.assign({}, state, {
                search_value: action.value
            })
        default : 
            return state; 

    }
}