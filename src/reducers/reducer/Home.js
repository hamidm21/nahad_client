import {
    FETCH_SLIDER,
    FETCH_SLIDER_SUCCESS,
    FETCH_SLIDER_FAILED,
    TOGGLE_COLLAPSE,
    FETCH_NEWS,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILED
} from '../../actions/Home/actionTypes'


const init = {
    slider_news: '',
    toggle_id: '',
    loading: true,
    errorMessage: '',
    newsList:[]
};

export default function (state = init, action) {
    switch (action.type) {
        case FETCH_SLIDER:
            return { ...state};
        case FETCH_SLIDER_SUCCESS: 
            return Object.assign({}, state, {slider_news: action.data})
        case FETCH_SLIDER_FAILED:
            return Object.assign({}, state, {messageError: action.message})
        case TOGGLE_COLLAPSE:
            if (action.id === state.toggle_id) {
                return Object.assign({}, state, {toggle_id: ''});
            }else
                return Object.assign({}, state, {toggle_id: action.id});
        default : 
            return state; 

    }
}