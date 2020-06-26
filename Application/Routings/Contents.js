import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';
import Course from '../Screens/Course';
import Section from '../Screens/Section';
import Videotwo from '../Screens/videotwo';
import Questions from '../Screens/Questions';
import Rating from '../Screens/Rating';


import { fromRight } from 'react-navigation-transitions';




const Navigator = createStackNavigator({
    Course:{
      screen:Course,
     
    },
    Rating:{
      screen:Rating,
     
    },
    Section:{
      screen:Section,
     
    },
    Videotwo:{
        screen:Videotwo,
       
      },
      Questions:{
        screen:Questions,
       
      }
},
{
    initialRouteName:'Course',
    transitionConfig: () => fromRight(),
    header: null,
    headerMode: 'none',
},

);

export default createAppContainer(Navigator);

