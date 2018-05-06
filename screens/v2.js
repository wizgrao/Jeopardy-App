import React, { Component } from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { Text, Button } from 'react-native-elements'
import { TabNavigator, StackNavigator}  from 'react-navigation';
import QuestionCard from './questionCard.js'
import styles from '../style.js';

export default class View2 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      answer: '',
    }
  }
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {
      title: params.answer.category.title + ' for ' + params.answer.value,
    }
  };
    render() {
        let answer = this.props.navigation.state.params.answer;

        return (
          <View style={styles.container}>


              <QuestionCard question={answer} />

            
          </View>
         );
    }


}
