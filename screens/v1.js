import React, { Component } from 'react';
import { StyleSheet,  View, Alert} from 'react-native';
import {Button, Text} from 'react-native-elements'
import { TabNavigator, StackNavigator}  from 'react-navigation';
import styles from '../style.js';

export default class View1 extends React.Component {

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {
      title: "Henlo",
    }
  };

  render() {
    return (
      <View style={styles.container}>


          <Button
              title="View Questions"
              onPress={() => this.props.navigation.push('Bruj', {name: 'Listicles'})}
              buttonStyle={styles.button}
            />

      </View>
    );
  }


}
