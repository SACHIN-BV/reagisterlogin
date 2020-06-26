import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';
import Questions from '../Screens/Questions';
import Rating from '../Screens/Rating';

import { fromRight } from 'react-navigation-transitions';




const Navigator = createStackNavigator({
    Questions:{
      screen:Questions,
     
    },
    Rating:{
      screen:Rating,
     
    }
},
{
    initialRouteName:'Questions',
    transitionConfig: () => fromRight(),
    header: null,
    headerMode: 'none',
},

);

export default createAppContainer(Navigator);

