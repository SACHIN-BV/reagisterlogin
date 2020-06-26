import React,{Component}  from 'react';
import { StyleSheet,
         Text, 
         View,
         TextInput,
         TouchableOpacity,
         Button,
        } from 'react-native';


export default class Home2 extends Component {


  render() {
    return (
    
   
   <View style={styles.container}>
        <Text>Second Screen</Text>
      </View>
    
       
      
 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
