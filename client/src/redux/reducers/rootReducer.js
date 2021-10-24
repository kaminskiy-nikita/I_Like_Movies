import { combineReducers } from "redux";
import { contactsReducer } from '../reducers/contactsReducer'
import { userReducer } from '../reducers/userReducer'


export const rootReducer = combineReducers({
  contactsReducer,
  userReducer
})
