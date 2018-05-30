import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from "./src/reducers"
import firebase from "firebase"
import LoginForm from "./src/components/loginForm.js"
import ReduxThunk from 'redux-thunk'
import Router from "./src/router.js"





class App extends React.Component {

  componentWillMount(){
    const config = {
    apiKey: "AIzaSyChsIgwL2u_TtOlsU-AJW6pZzJqT_J18sw",
    authDomain: "manager-b54fd.firebaseapp.com",
    databaseURL: "https://manager-b54fd.firebaseio.com",
    projectId: "manager-b54fd",
    storageBucket: "manager-b54fd.appspot.com",
    messagingSenderId: "1082080730032"
  };
  firebase.initializeApp(config)
}


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}



export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
