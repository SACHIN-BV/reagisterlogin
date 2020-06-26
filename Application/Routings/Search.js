import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';
import Search from '../Screens/Search';
import Course from '../Screens/Course';

import { fromRight } from 'react-navigation-transitions';




const Navigator = createStackNavigator({
    Search:{
      screen:Search,
     
    },
    Course:{
      screen:Course,
     
    }
},
{
    initialRouteName:'Search',
    transitionConfig: () => fromRight(),
    header: null,
    headerMode: 'none',
},

);

export default createAppContainer(Navigator);

