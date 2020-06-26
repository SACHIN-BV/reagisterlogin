import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";

HEADER_MAX_HEIGHT = 130
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 140
PROFILE_IMAGE_MIN_HEIGHT = 60
class Category extends Component {
    render() {
        return (
            <View  style={{ height: 130, width: 150, marginLeft: 20}}>
                
                    <ImageBackground source={this.props.imageUri}
                        style={{ flex: 1, marginBottom:20 }}
                    >
            <View style={{flex:1, justifyContent:'center',
            alignItems:'center',
            alignSelf:'stretch',
            backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Text style={[styles.textStyle,{backgroundColor:'transparent'}]}>{this.props.name}</Text>
              
              
              </View>

                    </ImageBackground>
             
             
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    schoolImage: {
        height: PROFILE_IMAGE_MAX_HEIGHT,
                      width: PROFILE_IMAGE_MAX_HEIGHT*2,
                      borderRadius: PROFILE_IMAGE_MAX_HEIGHT /8,
                      borderColor: 'white',
                      borderWidth: 3,
                      overflow: 'hidden',
                      marginTop: HEADER_MAX_HEIGHT*3 - 50,
                      marginLeft: 0
      },
    textStyle: {
        fontSize:20,
        
        color:'white',
        fontStyle:'italic'
      }
});