import {
    SEARCH_NEWS,
    SEARCH_NEWS_FAILED,
    SEARCH_NEWS_SUCCESS,
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
        case SEARCH_NEWS:
            return Object.assign({}, state);
        case SEARCH_NEWS_SUCCESS:
            console.log(action.data.search)
            return Object.assign({}, state, {news: action.data.search, loading: false})
        case SEARCH_NEWS_FAILED:
            return Object.assign({}, state, {errorMessage: action.message})
        case ON_CHANGE: 
            return Object.assign({}, state, {
                search_value: action.value
            })
        default : 
            return state; 

    }
}