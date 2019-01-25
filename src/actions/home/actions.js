import * as actionCreators from './actionCreators'
import axios from '../../Utils/axios'

export function fetchAdminsList(token, page, limit) {
  return async (dispatch) =>{
  try {
    dispatch(actionCreators.fetchAdmins());
    let admins = await axios.post('/api/admin/getAdmins' , {token , page , limit});
    dispatch(actionCreators.fetchAdminsSuccess(admins))
    }catch (e) {
    dispatch(actionCreators.fetchAdminsError())
    }
  }
}