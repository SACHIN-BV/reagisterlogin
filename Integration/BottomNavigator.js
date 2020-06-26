
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import Profile from '../Application/Screens/Profile';
import Home from '../Application/Routings/Home';
import Search from '../Application/Routings/Search';
import Progress from '../Application/Routings/Progress';
import { fromRight } from 'react-navigation-transitions';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: false,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon1 style={[{color: tintColor}]} size={25} name={'home-outline'} />
          </View>
        ),
        activeColor: '#FA9000',
        inactiveColor: '#7F7F7F',
        barStyle: { backgroundColor: '#ffffff' },
      }
    },   
    Search: {
      screen: Search,
      navigationOptions: {
        header: false,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-search'} />
          </View>
        ),
        activeColor: '#FA9000',
        inactiveColor: '#7F7F7F',
        barStyle: { backgroundColor: '#ffffff' },
      }
    },
    Progress: {
      screen: Progress,
      navigationOptions: {
        header: false,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-trending-up'} />
          </View>
        ),
        activeColor: '#FA9000',
        inactiveColor: '##7F7F7F',
        barStyle: { backgroundColor: '#ffffff' },
      }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: false,
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon1 style={[{color: tintColor}]} size={25} name={'account-outline'} />
            </View>
          ),
          activeColor: '#FA9000',
          inactiveColor: '#7F7F7F',
          barStyle: { backgroundColor: '#ffffff' },
        }
    },
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => fromRight(),
    activeColor: '#FA9000',
    inactiveColor: '#7F7F7F',
    barStyle: { backgroundColor: '#ffffff' },
  }
);

export default createAppContainer(TabNavigator);
