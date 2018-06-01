import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card, CardSection, Header, Input, Button, Spinner } from './common'
import { connect } from 'react-redux'
import { emailChanged, passChange, loginUser } from '../actions'

class LoginForm extends Component {

  onEmailChange = (text)=>{
    this.props.emailChanged(text)
  }

  onPassChange =(text)=>{
    this.props.passChange(text)
  }

  onButtonPress = ()=>{
    const { email, pass } = this.props
    // console.log(email, pass, "debuger");
    this.props.loginUser({email, pass })
  }

  renderErr =()=>{
    if(this.props.err){
      return(
      <View style={{backgroundColor:"white"}}>
        <Text style={styles.errStyle}>
          {this.props.err}
        </Text>
      </View>
      )
    }
  }

  renderButton = ()=>{
    if(this.props.loading){
      return(
        <Spinner
          size="large"
        />
      )
    }
    return(
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    )
  }


  render() {
    return (
      <View>
        <Card style={styles.container}>

          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
            label="Password"
            placeholder="Password"
            onChangeText={this.onPassChange}
            value={this.props.pass}
            secureTextEntry={true}
            />
          </CardSection>

          {this.renderErr()}

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errStyle:{
    fontSize:20,
    alignSelf:"center",
    color:'red'
  }
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    pass: state.auth.pass,
    err:state.auth.err,
    loading:state.auth.loading
  }
}


export default connect( mapStateToProps, {
   emailChanged, passChange, loginUser,
  } )( LoginForm )
