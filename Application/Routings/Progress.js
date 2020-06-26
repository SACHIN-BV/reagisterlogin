import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';
import Progress from '../Screens/Progress';
import Progressview from '../Screens/Progressview';
import { fromRight } from 'react-navigation-transitions';

const Navigator = createStackNavigator({
    Progress:{
      screen:Progress,
     
    },
    Progressview:{
      screen:Progressview,
     
    }
},
{
    initialRouteName:'Progress',
    transitionConfig: () => fromRight(),
    header: null,
    headerMode: 'none',
},

);

export default createAppContainer(Navigator);

