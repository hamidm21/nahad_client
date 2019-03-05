import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FALIED,
    ON_CHANGE
} from '../../actions/Auth/actionTypes'


const init = {
    loading: false,
    errorMessage: null,
    user_id: '',
    username: '',
    email: '',
    Rpassword: '',
    Lpassword:'',
    identety: ''
};

export default function (state = init, action) {
    switch (action.type) {
        case REGISTER:
            return Object.assign({}, state, {loading: true});
        case REGISTER_SUCCESS: 
            return Object.assign({}, state, {user_id: action.data._id})
        case REGISTER_FAILED:
            return Object.assign({}, state, {errorMessage: action.message})
        case ON_CHANGE:
            switch(action.id) {
                case 'username': 
                    return Object.assign({}, state, {username: action.value})
                case 'email': 
                    return Object.assign({}, state, {email: action.value})
                case 'Rpassword':
                    return Object.assign({}, state, {Rpassword: action.value})
                default :
                    return state
            }
        default : 
            return state; 
    }
}