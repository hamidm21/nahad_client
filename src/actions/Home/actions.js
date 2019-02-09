import * as actionCreators from './actionCreators'
import axios from '../../utils/axios'

export function fetchSliderInfo(token) {
  return async (dispatch) =>{
  try {
      dispatch(actionCreators.fetchSlider());
      const info = await axios.post('/Auth/Register' , {token});
      if(info){
        dispatch(actionCreators.fetchSliderSuccess(info))
      }else
        dispatch(actionCreators.fetchSliderFailed({failed: 'ناموفق در دریافت اطلاعات'}))
    }catch (e) {
      dispatch(actionCreators.fetchSliderFailed(e))
    }
  }
}