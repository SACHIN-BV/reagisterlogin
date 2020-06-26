import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';
import Profile from '../Screens/Profile';
import Login from './LoginRegistration';
import App from '../../App';

import { fromRight } from 'react-navigation-transitions';




const Navigator = createStackNavigator({
    Profile:{
      screen:Profile,
     
    },
    Login:{
      screen:App,
    
     
    }
},
{
    initialRouteName:'Profile',
    transitionConfig: () => fromRight(),
    header: null,
    headerMode: 'none',
},

);

export default createAppContainer(Navigator);

