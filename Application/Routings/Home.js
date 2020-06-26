import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';
import Home from '../Screens/Home';
import Questions from '../Screens/Questions';
import Contents from './Contents';
import List from '../Screens/List';
import One from '../Screens/One';
import Chat from '../Screens/chat';
import Notification from '../Screens/Notification';
import Course from '../Screens/Course';
import Courses1 from '../Screens/Courses'
import IndexDrawer from '../../Integration/index';
import { fromRight } from 'react-navigation-transitions';
import Category from '../Components/Category'



const Navigator = createStackNavigator({
    Home:{
      screen:Home,
     
    },
    Category:{
      screen:Category,
    },
    List:{
      screen:List,
    },
    Questions:{
      screen:Questions,
    },
    One:{
      screen:One,
    },
    Courses1:{
    screen:Courses1,
    },
    Contents:{
      screen:Contents,
    },
    Chat:{
      screen:Chat,
    },
    Notification:{
      screen:Notification,
    },
},
{
    initialRouteName:'Home',
    transitionConfig: () => fromRight(),
    header: null,
    headerMode: 'none',
},

);

export default createAppContainer(Navigator);

