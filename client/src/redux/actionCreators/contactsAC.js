import { GET_CONTACTS, ADD_CONTACT } from '../actionTypes/contacts.js'

export const getContactsAC = (payload) => {
  return {
    type: GET_CONTACTS,
    payload: payload
  }
}

export const addContactAC = (payload) => {
  return {
    type: ADD_CONTACT,
    payload
  }
}