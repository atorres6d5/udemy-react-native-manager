import{
  EMPLOYEE_UPDATE
} from "../actions/types.js"

const INITIAL_STATE={
  name:'',
  phone:'',
  shift:''
}

export default (state = INITIAL_STATE , action) =>{
  switch(action.type){

    case EMPLOYEE_UPDATE:
      return { ..state, [action.payload.prop]: actoin.payload.value }


    default:
      return state
  }
}