import {
  EMPLOYEE_UPDATE
} from './types.js'






export const EmployeeUpdate = ({prop, value}) =>{
  return {
    type:EMPLOYEE_UPDATE,
    payload:{ prop, value }
  }
}
