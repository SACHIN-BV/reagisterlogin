/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * TUFMlyHig_{4nsUL
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Container, DeckSwiper, Header, Card, CardItem, Body, Content, H1, H2, H3, Thumbnail, Left} from 'native-base';

import TabNavigator from './Integration/BottomNavigator';
import Contents from './Application/Routings/Contents';
import BottomNavigator from './Integration/Main';
import Rating from './Application/Screens/Rating';
import MainRoutings from './Integration/Main';
import Course from './Application/Screens/Course';
import Progress from './Application/Screens/Progress';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification'
type Props = {};
export default class App extends Component<Props> {


async componentDidMount(){
  PushNotification.configure({
onNotification: function(notification){
  console.log("NOTIFICATION:",notification);
},
  });

}
  render() {
  //ca
 
    return (
   
      <TabNavigator/>
   
    
    );
  }
}
