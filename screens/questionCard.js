import React, {Component} from 'react';
import {StyleSheet, View, Alert, Animated, TouchableWithoutFeedback} from 'react-native';
import {Text, Button, Card} from 'react-native-elements'
import {TabNavigator, StackNavigator} from 'react-navigation';

import styles from '../style.js';

export default class QuestionCard extends React.Component {
  flipping = false;
  side = true;
  constructor(params) {
    super(params);
    this.state = {
      fadeAnim: new Animated.Value(0),
      text: params.question.question,
      title: "Question"
    }
  }

  flip() {
    if (!this.flipping) {
      this.flipping = true;
      Animated.timing(this.state.fadeAnim, {
        toValue: .5,
        duration: 500,
        useNativeDriver: true
      }).start(() => {
        this.setState({
          text: this.side
            ? this.props.question.answer
            : this.props.question.question,
          title: this.side
            ? "Answer"
            : "Question",
          fadeAnim: new Animated.Value(-0.5)
        });
        this.side = !this.side;
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        }).start(() => {
          this.flipping = false;
        });
      });
    }
  }

  render() {
    const spin = this.state.fadeAnim.interpolate({
      inputRange: [
        -1, 1
      ],
      outputRange: ['-180deg', '180deg']
    });
    const a = this.state.fadeAnim.interpolate({
      inputRange: [
        0, 1
      ],
      outputRange: [0, 1]
    })
    const text = this.state.text;
    return (
      <Animated.View style={{
        transform: [
          {
            perspective: 800,
          },
          {
            rotateY: spin
          }
        ]
      }}>
        <TouchableWithoutFeedback onPress={() => {
          this.flip();
        }}>
          <Card title={this.state.title}  containerStyle={[{
            height: 300
          }, styles.card]}>
            <Text style={styles.defaultText}>
              {text}
            </Text>
          </Card>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }

}
