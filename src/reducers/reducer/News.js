import {
    FETCH_NEWS,
    FETCH_NEWS_FAILED,
    FETCH_NEWS_SUCCESS
} from '../../actions/News/actionTypes'


const init = {
    loading: true,
    errorMessage: '',
    news: {
        _id: '',
        moment: '1397/02/02 22:22',
        tag: [
            '',
            '',
            ''
        ],
        share: '',
        title: '',
        description: '',
        text_tag: '',
        text: '',
        img: '',
        category: '',
        author: '',
        related: ''
    },
    related: [
        {
            moment: '1397/02/02 22:22',
            tag: [
                '',
                '',
                ''
            ],
            _id: '',
            title: '',
            description: '',
            img: '',
            category: '',
            author: '',
            score: 0
        }
    ]
    
};

export default function (state = init, action) {
    switch (action.type) {
        case FETCH_NEWS:
            return Object.assign({}, state, {loading: true})
        case FETCH_NEWS_SUCCESS:
            return Object.assign({}, state, {news: action.data, related: action.data.related , loading: false})
        case FETCH_NEWS_FAILED:
            return Object.assign({}, state, {errorMessage: action.message})
        default : 
            return state; 

    }
}