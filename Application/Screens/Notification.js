import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Picker,
  ToastAndroid,
  FlatList,
  ProgressBarAndroid,
  AsyncStorage,
  Dimensions,
  StatusBar
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

import { Container, DeckSwiper, Header, Card, CardItem, Body, Content, H1, H2, H3, Text, Thumbnail, Left,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather'
const { height, width } = Dimensions.get('window')

HEADER_MAX_HEIGHT = 130
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 140
PROFILE_IMAGE_MIN_HEIGHT = 60



export default class Notification extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarSource: null,
      pic:null,
      dataSource: [],
      isLoading: true,
    }
    
  }


  componentDidMount= async()=> {
    return fetch('https://sachinbv96.000webhostapp.com/react/notification.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      
        <ScrollView style={{ flex:1}}>
          <View style={{ alignItems:'center', height: 60, backgroundColor: '#4f493a' }}>

<Text style={{ color: 'white',  marginTop: 30 }}>NOTIFICATIONS</Text>
</View>
        <View style={{flex:1}}>
        <StatusBar
          backgroundColor="#4f493a"
          />
          
            <View style={styles.bodyContent}>
 
              <View style={{width: width}}>
              
            <Container>
 
        <Content>
        <FlatList
      data={this.state.dataSource}
      renderItem={({item}) =>  
          <Card>
            <CardItem>
              <Body>
                
              <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                <Text>{item.details}</Text>
               
                
              </Body>
            </CardItem>
          </Card>
           } />
        </Content>
      </Container>

           
        </View>
     
        </View>
     
      </View>
      
            </ScrollView>
        
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    schoolImage: {
      height: PROFILE_IMAGE_MAX_HEIGHT,
                    width: PROFILE_IMAGE_MAX_HEIGHT,
                    borderRadius: PROFILE_IMAGE_MAX_HEIGHT /2,
                    borderColor: 'white',
                    borderWidth: 3,
                    //overflow: 'hidden',
                    marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2),
                    marginLeft: 0
    },
    header:{
        backgroundColor: "#1E90FF",
      },
      headerContent:{
        padding:30,
        alignItems: 'center',
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      bodyContent: {
        flex: 1,
        alignItems:'flex-start',
        padding:10,
      },
      editContent: {
        flex: 0.1,
        alignItems:'flex-end',
        padding:20,
      },
      textInfo:{
        fontSize:18,
        marginTop:5,
        color: "#696969",
      },
      edit:{
        marginTop:5,
        alignItems:'flex-end',
        color: "#696969",
      }
})  