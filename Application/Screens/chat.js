import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  AsyncStorage,
  StatusBar,
  ActivityIndicator
} from 'react-native';

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      data: [
        {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
        {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
        {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        {id:9, date:"9:51 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
      ]
      
    };
  }
  componentDidMount = async () => {
    let user = await AsyncStorage.getItem('user');
    this.chat();
 }
  chat() {
    return fetch('https://sachinbv96.000webhostapp.com/react/chat.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server alvaromorte
				email: 'sachin@gmail.com'
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
  onSubmit = () =>{
    //alert('ok'); // version 0.48
   // console.warn("calling");
    
    const {usefrom} = this.state;
    const {userMessage} = this.state;
    

    
   // console.warn();
   // console.warn(userName);
    fetch('https://sachinbv96.000webhostapp.com/react/chatUpdate.php', {
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        cfrom: 'sachin@gmail.com',
        cmessage: userMessage,
       

      })
      
    })
    
    .then((response) => response.json())
      .then((responseJson) =>{
        this.chat();
         alert(responseJson);
      })
      .catch((error)=>{
        console.error(error);
      });
      
  }
  renderDate = (dataSource) => {
    return(
      <Text style={styles.time}>
        {dataSource}
      </Text>
    );
  }

  render() {
        return (
         
      <View style={styles.container}>
          <View style={{ alignItems:'center', height: 60, backgroundColor: '#4f493a' }}>

<Text style={{ color: 'white', marginTop: 30 }}>MESSAGER</Text>
</View>
        <StatusBar
          backgroundColor="#4f493a"
          barStyle="light-content"
          />
        <FlatList style={styles.list}
          data={this.state.dataSource}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.cdate)}
                <View style={[styles.balloon]}>
                  <Text>{item.msg}</Text>
                </View>
                {inMessage && this.renderDate(item.cdate)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(userMessage) => this.setState({userMessage})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Text style={styles.white} onPress={this.onSubmit} >Send</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  white:{
color:'#ffffff',
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});  