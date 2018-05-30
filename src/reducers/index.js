import { combineReducers } from 'redux'
import authReducer from './authReducer'
import EmployeeFormReducer from "./employeeFormReducer.js"


export default combineReducers({
  auth: authReducer,
  employeeForm:EmployeeFormReducer
})
