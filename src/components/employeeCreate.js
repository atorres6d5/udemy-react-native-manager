/* @flow */

import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common'

export default class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            lable="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            lable="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>

        <CardSection>
        </CardSection>
        
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
