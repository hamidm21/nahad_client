import {
    FETCH_SLIDER,
    FETCH_SLIDER_SUCCESS,
    FETCH_SLIDER_FAILED,
    TOGGLE_COLLAPSE
} from '../../actions/Home/actionTypes'


let init = {
    slider_news: '',
    toggled:{
        id: ''
    }
};

export default function (state = init, action) {
    switch (action.type) {
        case FETCH_SLIDER:
            return { ...state};
        case FETCH_SLIDER_SUCCESS: 
            return Object.assign({}, init, {slider_news: action.info})
        case TOGGLE_COLLAPSE: 
            return Object.assign({}, state, {toggle_id: action.id, is_toggled: !state.is_toggled });
        default : 
            return state; 

    }
}