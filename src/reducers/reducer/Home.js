import {
    FETCH_SLIDER,
    FETCH_SLIDER_SUCCESS,
    FETCH_SLIDER_FAILED,
    TOGGLE_COLLAPSE,
    NEXT_SLIDE,
    PREV_SLIDE,
    FETCH_CATEGORY_NEWS,
    FETCH_CATEGORY_NEWS_FAILED,
    FETCH_CATEGORY_NEWS_SUCCESS
} from '../../actions/Home/actionTypes'


const init = {
    slider_news: [
        {
            "_id": 0,
            "title": '',
            "description": '',
            "img": '',
            "category": ''
        }
    ],
    toggle_id: '',
    loading: true,
    errorMessage: '',
    current_slide: 0
};

export default function (state = init, action) {
    switch (action.type) {
        case FETCH_SLIDER:
            return state;
        case FETCH_SLIDER_SUCCESS:
            return Object.assign({}, state, {slider_news: action.data.news, loading: false})
        case FETCH_SLIDER_FAILED:
            return Object.assign({}, state, {messageError: action.message})
        case TOGGLE_COLLAPSE:
            if (action.id === state.toggle_id) {
                return Object.assign({}, state, {toggle_id: ''});
            }else
                return Object.assign({}, state, {toggle_id: action.id});
        case NEXT_SLIDE:
            console.log(state.current_slide)
            if (state.current_slide === 2) {
                return Object.assign({}, state, {current_slide: 0})
            }else
                return Object.assign({}, state, {current_slide: ++state.current_slide})
        case PREV_SLIDE:
            console.log(state.current_slide)
            if (state.current_slide === 0) {
                return Object.assign({}, state, {current_slide: 2})
            }else
                return Object.assign({}, state, {current_slide: --state.current_slide})
        case FETCH_CATEGORY_NEWS:
            return Object.assign({}, state, {
                category_news: action.data
            })
        default : 
            return state; 

    }
}