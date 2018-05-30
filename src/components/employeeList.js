/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class EmployeeList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the EmployeeList component</Text>
        <Text>I'm the EmployeeList component</Text>
        <Text>I'm the EmployeeList component</Text>
        <Text>I'm the EmployeeList component</Text>
        <Text>I'm the EmployeeList component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
