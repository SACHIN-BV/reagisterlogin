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
  Dimensions
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

import { Container, DeckSwiper, Header, Card, CardItem, Body, Content, H1, H2, H3, Text, Thumbnail, Left,  } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get('window')


HEADER_MAX_HEIGHT = 130
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 120
PROFILE_IMAGE_MIN_HEIGHT = 60



export default class Profile extends Component {
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
    //let user = await AsyncStorage.getItem('user');
    return fetch('https://sachinbv96.000webhostapp.com/react/profile.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server alvaromorte
				email: 'suresh@gmail.com'
			})
			
		})
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
        <View style={{flex:1}}>
            <View style={{
                position:'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#4f493a',
                height: HEADER_MAX_HEIGHT+150

            }}>
            </View>
            <View style={{ alignItems: 'center'}}>

             <Text style={{ color: 'white', marginTop: 20 }}>TOP COURSE</Text>
            </View>
            <View style={{ alignItems: 'flex-end'}}>
             <Icon style={styles.edit} name={'logout'} size={26} color={'rgba(0, 0, 0, 0.7)'}  onPress={() => this.props.navigation.navigate("ForgotPassword")}/>
            </View>
            <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => 
            <View style={styles.bodyContent}>
               <Image
            style={styles.schoolImage}
            source={require('../Images/profile.png')}
          />
           <View style={{ alignItems: 'center'}}>

<Text style={{ color: 'white', marginTop: 20 }}>{item.Name}</Text>
</View>
              <View style={{width: width}}>
              <View style={styles.editContent}>
            </View>
            <Container>
 
        <Content>
         
          <Card>
            <CardItem>
              <Body>
                
              <Text style={{fontWeight:'bold'}}>Open to job opportunities</Text>
                <Text>Android Developer and IOS Developer roles</Text>
                <Text style={{color:'blue'}}>See all details</Text>
                
              </Body>
            </CardItem>
          </Card>
         
        </Content>
      </Container>

           
        </View>
        </View>
      }
            keyExtractor={({id}, index) => id}
            ItemSeparatorComponent={this.renderSeparator}
          />
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
                    backgroundColor:'white',
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
        alignItems:'center',
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
        marginRight:20,
        marginTop: -20,
        alignItems:'flex-end',
        color: "#ffffff",
      }
})  