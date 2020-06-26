import React , {Component} from 'react';

import {View} from 'react-native';
import TabNavigator from './BottomNavigator';

class IndexDrawer extends Component
{
  


   static navigationOptions={
       header:false
       
   }
     
        
  
  
        
    render()
    {
        return(

            <TabNavigator />

        )
    }
}

export default IndexDrawer;