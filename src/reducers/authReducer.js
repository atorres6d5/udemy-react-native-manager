import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "../actions/types.js"

const INITIAL_STATE = {
    email:"",
    pass:"",
    loading: false,
    err:"",
    user:null
}



export default ( state = INITIAL_STATE, action)=>{
  // console.log(action, "Reducer Auth")

  switch(action.type){

    case EMAIL_CHANGED:
      return { ...state , email:action.payload }

    case PASS_CHANGED:
      return { ...state, pass: action.payload}

    case LOGIN_USER:
      return { ...state, loading:true, err:"" }

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }

    case LOGIN_USER_FAIL:
      return {
        ...state,
        err:"Auth Failed, aka you're drunk go home!",
        loading:false,
        pass:""
        }

    default:
    return state
  }
}
