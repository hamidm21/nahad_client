import * as actionTypes from './actionTypes'

export function fetchSlider() {
  return {
    type: actionTypes.FETCH_SLIDER
  }
}

export function fetchSliderSuccess(info) {
  return {
    type: actionTypes.FETCH_SLIDER_SUCCESS,
    info
  }
}

export function fetchSliderFailed(problem) {
  return {
    type: actionTypes.FETCH_SLIDER_FAILED,
    problem
  }
}

export function toggleCollapse(id) {
  return {
    type: actionTypes.TOGGLE_COLLAPSE,
    id
  }
}

export function onPaginate(id) {
  return {
    type: actionTypes.ON_PAGINATE,
    id
  }
}