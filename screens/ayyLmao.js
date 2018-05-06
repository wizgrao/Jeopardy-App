import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { TabNavigator, StackNavigator}  from 'react-navigation';



export default class AyyLmao extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "click for a movie"};
    }
    getFromSrc() {
        fetch('' + this.props.ura)
            .then((response) => response.json())
            .then((rj) => {
                this.setState(p => {
                    return {name: rj.movies[3].title};
                });
            });
    }
    render() {
        return (
                <Button
                  onPress={()=>{this.getFromSrc();}}
                  title={this.state.name}
                />
            );
    }
}
