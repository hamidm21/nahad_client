import * as actionTypes from './actionTypes';

export function searchNews() {
    return {
        type: actionTypes.SEARCH_NEWS
    }
}

export function searchNewsSuccess(message, result, data) {
    return {
        type: actionTypes.SEARCH_NEWS_SUCCESS,
        message,
        result,
        data
    }
}

export function searchNewsFailed(message, result, data) {
    return {
        type: actionTypes.SEARCH_NEWS_FAILED,
        message,
        result,
        data
    }
}


export function onPaginate(id) {
    return {
      type: actionTypes.ON_PAGINATE,
      id
    }
  }
  

export function onChange(value){
    return {
      type: actionTypes.ON_CHANGE,
      value
    }
  }