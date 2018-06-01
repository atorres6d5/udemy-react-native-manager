
import React, { Component } from 'react';
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { employeeUpdate, employeeCreate } from '../actions'
import EmployeeForm from './employeeForm.js'


class EmployeeCreate extends Component {

  onButtonPress = () =>{
    const {
      name,
      phone,
      shift
    } = this.props
    this.props.employeeCreate({name, phone, shift: shift || "Monday"})
  }


  render() {
    console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm { ...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress} >
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}



const mapStateToProps = ( state ) =>{
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}


export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)
