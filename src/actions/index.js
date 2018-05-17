import { API_URL } from '../env/env'

export const get_localStorage = (payload) => ({
  type: 'GET_LOCALSTORAGE',
  payload: payload
})

export const clear_localStorage = (payload) => ({
  type: 'CLEAR_LOCALSTORAGE',
  payload: payload
})

export const get_user_profile = (payload) => ({
  type: 'GET_USER_PROFILE',
  payload: payload
})

export const get_user_by_id = (payload) => {
  return async dispatch => {
    try {
      let res = await fetch(API_URL + '/user/id/' + payload, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let resJSON = await res.json()
      dispatch(get_user_profile(resJSON))
    } catch(error) {
      console.error(error)
    }
  }
}