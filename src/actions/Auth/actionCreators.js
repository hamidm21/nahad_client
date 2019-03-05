import * as actionTypes from './actionTypes'


export function register() {
    return {
        type: actionTypes.REGISTER
    }
}

export function registerSuccess(message, result, data) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        result,
        message,
        data
    }
}

export function registerFailed(message, result, data) {
    return {
        type: actionTypes.REGISTER_FAILED,
        result,
        message,
        data
    }
}

export function login() {
    return {
        type: actionTypes.REGISTER
    }
}

export function loginSuccess(message, result, data) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        result,
        message,
        data
    }
}

export function loginFailed(message, result, data) {
    return {
        type: actionTypes.REGISTER_FAILED,
        result,
        message,
        data
    }
}

export function handleChange(id, value) {
    return {
        type: actionTypes.ON_CHANGE,
        id,
        value
    }
}