import { combineReducers } from 'redux'
import authReducer from './authReducer'
import EmployeeFormReducer from "./employeeFormReducer.js"
import EmployeeReducer from './employeeReducer.js'

export default combineReducers({
  auth: authReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
})
