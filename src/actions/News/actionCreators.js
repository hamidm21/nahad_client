import * as actionTypes from './actionTypes';

export function fetchNews() {
    return {
        type: actionTypes.FETCH_NEWS
    }
}

export function fetchNewsSuccess(message, result, data) {
    return {
        type: actionTypes.FETCH_NEWS_SUCCESS,
        message,
        result,
        data
    }
}

export function fetchNewsFailed(message, result, data) {
    return {
        type: actionTypes.FETCH_NEWS_FAILED,
        message,
        result,
        data
    }
}