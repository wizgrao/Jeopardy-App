import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { TabNavigator, StackNavigator}  from 'react-navigation';
import View1 from './screens/v1.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
  },
  button: {
    backgroundColor: '#66D7D1',
    alignSelf: 'stretch',
  },
  defaultText: {
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    borderRadius: 10,

  }
});
