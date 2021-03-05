import * as actionTypes from '../constants'

export const GmapsDispatchThunk = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_GMAPS_STATE,
    payload
  })
  return Promise.resolve()
}