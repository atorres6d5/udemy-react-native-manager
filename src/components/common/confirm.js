/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import {Button} from './button.js'
import { CardSection } from './cardSection.js'

const Confirm = ({ children, onAccept, onDecline, visible}) =>{
  const { containerStyle, textStyle, cardSectionStyle } = styles

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={()=>{}}
      >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>YES</Button>
          <Button onPress={onDecline}>NO</Button>
        </CardSection>
      </View>
    </Modal>
  );

}

export  { Confirm }

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});
