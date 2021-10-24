import { CHECK_SESSION } from '../actionTypes/user'

export const checkSessionAC = (payload) => {
  return {
    type: CHECK_SESSION,
    payload
  }
}
