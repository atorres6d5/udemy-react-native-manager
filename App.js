import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from "./src/reducers"
import firebase from "firebase"
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
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
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
