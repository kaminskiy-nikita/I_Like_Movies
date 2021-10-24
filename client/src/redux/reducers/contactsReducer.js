import { GET_CONTACTS, ADD_CONTACT, UPD_CONTACT, DEL_CONTACT } from '../actionTypes/contacts.js'

const initialState = { contacts: [] }

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload }
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] }
    case UPD_CONTACT:
      return {
        ...state, contacts: state.contacts.map(contact => {
          if (contact.id === action.payload.id) {
            return { ...contact, name: action.payload.name ?? contact.name, age: action.payload.age ?? contact.age }
          } else {
            return contact
          }
        })
      }
    case DEL_CONTACT:
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload.id) }
    default:
      return state
  }
}