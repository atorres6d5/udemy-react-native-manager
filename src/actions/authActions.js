import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types.js"
import { Actions } from 'react-native-router-flux'

import firebase from "firebase"

export const emailChanged = ( text ) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}


export const passChange =( text ) =>{
  return {
    type: PASS_CHANGED,
    payload: text
  }
}

export const loginUser =({email, pass})=>{
  return ( dispatch ) => {
    dispatch({ type:LOGIN_USER })
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then( user => loginUserSuccess(dispatch, user))
    .catch((err)=>{
      console.log(err)
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then( user => loginUserSuccess(dispatch, user))
      .catch((err)=>{
        console.log(err)
        return loginUserFail(dispatch)
      })
    })
  }
}

const loginUserSuccess = (dispatch, user)=>{
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  Actions.main()
}

const loginUserFail = ( dispatch ) =>{
  dispatch({
    type:LOGIN_USER_FAIL

   })
}
