import * as actionCreators from './actionCreators';
import axios from '../../utils/axios';

export function RegisterUser(email, user_name, password) {
    return async dispatch => {
        try {
            dispatch(actionCreators.register());
            const register = await axios.post('/user/register', {email, user_name, password});
            console.log(register.data)
            if(register.result) {
                dispatch(actionCreators.registerSuccess(register.message, register.result, register.data));
            }else 
                dispatch(actionCreators.registerFailed(register.message, register.result, register.data))
        } catch (e) {
            dispatch(actionCreators.registerFailed(e));
        }
    }
}


export function LoginUser(email, username, password) {
    return async dispatch => {
        try {
            dispatch(actionCreators.login());
            const login = await axios.post('/user/login', {email, username, password})
            if(login.data.result){
                dispatch(actionCreators.loginSuccess(login.data.message, login.data.result, login.data.data))
            }else
                dispatch(actionCreators.loginFailed(login.data.message, login.data.result, login.data.data))
        } catch (e) {
            dispatch(actionCreators.loginFailed(e))
        }
    }
}