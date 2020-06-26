import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';
import Login from '../Screens/Login';
import ForgotPassword from '../Screens/ForgotPassword';
import RegistrationForm from '../Screens/RegistrationForm';
import IndexDrawer from '../../Integration/index';
import { fromRight } from 'react-navigation-transitions';




const Navigator = createStackNavigator({
    Login:{
      screen:Login,
     
    },
    RegistrationForm:{
      screen:RegistrationForm,
      
    },
    ForgotPassword:{
        screen:ForgotPassword,
        
    },
    Home:{
      screen:IndexDrawer,
      
    }
},
{
    initialRouteName:'Login',
    transitionConfig: () => fromRight(),
    header: null,
    headerMode: 'none',
},

);



export default createAppContainer(Navigator);

