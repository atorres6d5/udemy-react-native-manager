/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import EmployeeForm from "./employeeForm"
import { StyleSheet } from 'react-native';
import { Card, CardSection, Button} from './common'
import { employeeUpdate, employeeSave } from '../actions'
import _ from 'lodash'

class EmployeeEdit extends Component {
  componentWillMount = ()=>{
    _.each(this.props.employee, (value, prop)=>{
      this.props.employeeUpdate({prop, value})
    })
  }

  onButtonPress=()=>{
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid:this.props.employee.uid})


  }

  render() {
    console.log(this.props.employee, "render");
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});

const mapStateToProps =( state )=>{
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift}
}

export default connect( mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit)
