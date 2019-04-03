import * as actionTypes from './actionTypes'

export function fetchSlider() {
  return {
    type: actionTypes.FETCH_SLIDER
  }
}

export function fetchSliderSuccess(message, result, data) {
  return {
    type: actionTypes.FETCH_SLIDER_SUCCESS,
    message,
    result,
    data
  }
}

export function fetchSliderFailed(message, result, data) {
  return {
    type: actionTypes.FETCH_SLIDER_FAILED,
    message,
    result,
    data
  }
}

export function nextSlide() {
  return {
    type: actionTypes.NEXT_SLIDE
  }
}

export function prevSlide() {
  return {
    type: actionTypes.PREV_SLIDE
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