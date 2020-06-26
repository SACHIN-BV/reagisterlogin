import React,{Component} from 'react';
import {ImageBackground,Image,StatusBar,ActivityIndicator,AsyncStorage,View,TouchableOpacity,ScrollView,Text} from 'react-native';

import { Container, Header, Content, Card, Button,CardItem, Body,Icon,List,ListItem,Radio,Title, Footer} from 'native-base';
import {TextField} from 'react-native-material-textfield';
import styles from '../Styles/Styles';
import Colors from '../Colors/Colors';

//import data from '../json/users.json';

 
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      loading: false,
      dataSource:[],
      userEmail:'',
      userPassword:'',
      Email:'',
      Password:'',
    }
  }
  
	login = () =>{


    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
      if(re.test(this.state.Email))
      {
          this.setState({
            emailerrormessage:this.state.Email,
          })
      }
      else{
        this.setState({
          emailerrormessage1:"Enter valid email"
        })
       
      }
    
    
      var Password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    
      
        if(Password.test(this.state.Password))
        {
         
          this.setState({
            passworderrormessage: this.state.Password,
            
          })
        }
        else
        {
            
          
            this.setState({
              passworderrormessage1: "invalid Password",
              
            })
      

        }
      



		const {emailerrormessage,passworderrormessage} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(emailerrormessage==""){
			//alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})
			
		}
		
		else if(reg.test(emailerrormessage) === false)
		{
		//alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(passworderrormessage==""){
		this.setState({email:'Please enter password'})
		}
		else{
   AsyncStorage.setItem('user',emailerrormessage);
      
   const User = AsyncStorage.getItem('user');
     this.setState({ loading: true });
		fetch('https://sachinbv96.000webhostapp.com/react/login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: emailerrormessage,
				password: passworderrormessage
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
         this.setState({ loading: false });
				 this.props.navigation.navigate("Home");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		
	}

  static navigationOptions = {
    //Setting the header of the screen flatlist
    title: 'Login Page',
  };
  

showPass()
{

}

  render() {
    
    const { navigate } = this.props.navigation;
    return (
     
      <Container style={{flex:1}}>
        <StatusBar
           translucent = {true}
           backgroundColor="transparent"
          />
      <ImageBackground
        source={require("../Images/home2.jpg")}
       style={styles.container}
      >
        <View style={{
                  flex: 1, justifyContent: 'flex-start',
                
                  alignSelf: 'stretch',
                  backgroundColor: 'rgba(0,0,0,0.50)'
                }}>
         <ScrollView>
      <View style={{marginTop:'20%',alignItems:'center',justifyContent:'center'}}>
         <Image source={require('../Images/output1.png')}/>
      </View>
      <Content padder>
   
    
     <View style={{margin:20}}>
    
               <TextField
               returnKeyType = { "next" }
               onSubmitEditing={() => { this.secondTextInput.focus(); }}
               blurOnSubmit={false}
              fontSize={20}
              label = 'Email'
              tintColor = 'white'
              textColor = '#ffffff'
              baseColor = '#ffffff'
              onChangeText={Email=>this.setState({Email})}
              error = {this.state.emailerrormessage1}
              
             />
             <TextField
             ref={(input) => { this.secondTextInput = input; }}
              fontSize={20}
              label = 'Password'
              tintColor = 'white'
              textColor = '#ffffff'
              baseColor = '#ffffff'
              maxLength={20}
              secureTextEntry={this.state.showPass}
              onChangeText={Password=>this.setState({Password})}
              error = {this.state.passworderrormessage1}
             />
               
         </View>
  <View>
  <TouchableOpacity
            style={{alignItems:"flex-end"}}
            onPress={() => this.props.navigation.navigate("ForgotPassword")}
          >
            <Text style={{color: "#fff",fontSize: 18}}> Forgot Password? </Text>
          </TouchableOpacity>
  </View>
   
   
    
     </Content>
    
   <View style={{flexDirection:'row',marginLeft:20}}>

     <Button full warning style={{bottom:0,marginTop:20,width:170}}
       onPress={this.login}>
      <Text>Login</Text>
    </Button>
    <Button full transparent bordered light style={{bottom:0,marginTop:20,marginLeft:20,width:170,translucent:'true'}}
        onPress={() => this.props.navigation.navigate("RegistrationForm")}>
      <Text  style={{ color: "white" }}>Sign up</Text>
    </Button>
    </View>
    {!!this.state.loading && (
            <ActivityIndicator size="large" color="#00ff00" />
        )}
   

    </ScrollView>
    </View>
      </ImageBackground>
    
    </Container>
    );
  }
}

