import React,{Component} from 'react';
import {StyleSheet,Text,View,Dimensions} from 'react-native'
import Colors from '../Colors/Colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:null
    },
  
    text: {
      color:Colors.black,
      fontSize: 18,
      fontFamily:"Roboto",
      fontWeight:"300"
    },
    textLayout:{
      fontSize:18,
      fontFamily:'Roboto',
      fontWeight:'400'
    },
    inner: {
      marginTop: "2%",
      width: "95%",
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: "#4C1D6D",
      borderColor: "#4C1D6D",
      borderRadius: 1,
      borderWidth: 0.5
    },
    innerForgotpin: {
      paddingTop: "5%",
      width: "95%",
      height: "48%",
      marginRight: 10,
      marginLeft: 10,
      backgroundColor:Colors.backgroundColor,
      borderColor: Colors.backgroundColor,
      borderRadius: 1,
      borderWidth: 0.5,
    },
  
    innerResetPin: {
      marginTop: 5,
      width: "95%",
      height: "50%",
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: "#4C1D6D",
      borderColor: "#4C1D6D",
      borderRadius: 1,
      borderWidth: 0.5
    },
    MainContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#F5FCFF"
    },
    
    SubmitButtonStyle: {
      marginTop: 10,
      paddingTop: 15,
      paddingBottom: 15,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: "#00BCD4",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#fff"
    },
    tittleLogin:{
      flexDirection:'row',marginTop:"50%",justifyContent:'center',alignItems:'center'
  },
    tittle:{
        flexDirection:'row',marginTop:"30%",justifyContent:'center',alignItems:'center'
    },
    TextStyle: {
      color: "#000",
      textAlign: "center",
      fontSize: 18
    },
    TextStylePIN: {
      color: "#fff",
      fontSize: 18,
      marginLeft: 7,
      fontFamily:'Roboto'
    },
    ForgotButton: {
      marginTop: "40%",
      width: "70%",
      marginLeft: "15%"
    },
    ForgotButton1: {
      marginTop: "10%",
      width: "70%",
      marginLeft: "15%"
    },
    button:{
      height: 50,
      width: 120,
      marginTop: 10,
      alignItems:'center',
      justifyContent:'center',
      borderWidth: 0.5
  },
  datePickerBox:{
    marginTop: 9,
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent:'center'
  },

  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#fff',
    
  },
  buttonStyle: {
    position: "absolute",
    width: "100%",
    height: 200,
    bottom: 0,
    alignSelf: "stretch",
    
    
  },
  TextTittle:{
    fontSize:14,
    fontWeight:'600',
    marginBottom:5
  },
  TextContent:{
    fontSize:12
  },
rowcontainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
},
imagewrap:{
    margin:2,
    padding:2,
    height:(Dimensions.get('window').height/3)-12,
    width:(Dimensions.get('window').width/2)-4,
},

imagewrapTwo:{
  margin:2,
  padding:2,
  width:(Dimensions.get('window').width/2.05)-4,
},
modal:{
    flex:1,
    padding:20,
  
},

  });
  
  export default styles;