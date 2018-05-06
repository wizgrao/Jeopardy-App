import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, FlatList, RefreshControl } from 'react-native';
import {Text} from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';
import { TabNavigator, StackNavigator}  from 'react-navigation';
import styles from '../style.js';

export default class Listy extends React.Component {

  getFromSrc() {
    this.setState({
      loading: true,
    });
      fetch('http://jservice.io/api/random?count=100')
          .then((response) => response.json())
          .then((rj) => {
              this.setState({
                data: rj,
                loading: false,
              });

          });
  }

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {
      title: 'Jeopardy Answers!',


    }
  };

  constructor(props) {
    super(props);


    this.state = {
      data: [],
      loading: true,
    };

  }

  componentDidMount() {
    this.getFromSrc();
  }

  render() {
    return (
      <List>
        <FlatList
          refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
            onRefresh={this.getFromSrc.bind(this)}
          />
        }
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem

            title={`${item.category.title}`}
            subtitle={item.value}
            onPress={()=>this.props.navigation.push('Settings', {answer: item})}



          />
        )}
        keyExtractor={item => item.id + ''}
      />
    </List>
    );
  }


}
