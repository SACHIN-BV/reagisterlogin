import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginRegistration from './LoginReg';


const Navigator = createStackNavigator({
  
    HomeRouting:{
        screen:LoginRegistration
    }
    
},
{
    initialRouteName:'HomeRouting'
}
);

export default createAppContainer(Navigator);