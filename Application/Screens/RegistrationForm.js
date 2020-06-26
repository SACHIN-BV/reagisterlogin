import React,{Component} from 'react';
import {ImageBackground,Image,View,TouchableOpacity,ScrollView,Text} from 'react-native';

import { Container, Header, Content, Card, Button,CardItem, Body,Icon,List,ListItem,Radio,Title, Footer} from 'native-base';
import {TextField} from 'react-native-material-textfield';
import styles from '../Styles/Styles';
import Colors from '../Colors/Colors';

export default class RegistrationForm extends React.Component {
  constructor(props){
		super(props)
		this.state={
      usernameerrormessage:"",
      phoneerrormessage:"",
      emailerrormessage :"",
      passworderrormessage :"",
      Username:'',
      Mobile:'',
      Email:'',
      showPass: true,
      Password:''					
		}
	}
  
	onSubmit = () =>{
    //alert('ok'); // version 0.48
    const name=/^[a-zA-Z]+$/
    
      if(name.test(this.state.Username))
      {
         this.setState({
           usernameerrormessage:this.state.Username,
         })
      }
      else
      {
        this.setState({
          usernameerrormessage1:"Please enter valid Username"
        })
       
      
    }
    var Phone=/^[98765]\d{9}$/
      if(Phone.test(this.state.Mobile))
      {
       
        this.setState({
          phoneerrormessage: this.state.Mobile,
          
        });
      }
      else
      {
          
        
          this.setState({
            phoneerrormessage1: "Please enter valid mobile number",
            
          });
      

      }
    
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


		
    const {usernameerrormessage} = this.state;
    const {phoneerrormessage} = this.state;
		const {emailerrormessage} = this.state;
		const {passworderrormessage} = this.state;
		
		fetch('https://sachinbv96.000webhostapp.com/react/register.php', {
			method: 'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
        name: usernameerrormessage,
        phone: phoneerrormessage,
				email: emailerrormessage,
				password: passworderrormessage,
			})
			
		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
			})
			.catch((error)=>{
				console.error(error);
			});
		
	}


  render() {
    return (
      <Container style={{flex:1}}>
         
      <ImageBackground
        source={require("../Images/Logo.png")}
       style={styles.container}
      >
         <ScrollView>
      <View style={{marginTop:'10%',alignItems:'center',justifyContent:'center'}}>
      <Image source={require('../Images/output2.png')}/>
      </View>
      <Content padder>
    
     <View style={{margin:20}}>
    
              <TextField
              fontSize={20}
              label = 'Username'
              tintColor = 'black'
              textColor = '#000000'
              baseColor = '#000000'
             
              maxLength={20}
              onChangeText={Username=>this.setState({Username})}
              error={this.state.usernameerrormessage1}
          
             />
              
              
              <TextField
              fontSize={20}
              label = 'Mobile'
              tintColor = 'black'
              textColor = '#000000'
              baseColor = '#000000'
              maxLength={10}
              onChangeText={Mobile=>this.setState({Mobile})}
               baseColor="#000000"
                error = {this.state.phoneerrormessage1}
                keyboardType='number-pad'
          
             />
             
               <TextField
              fontSize={20}
              label = 'Email'
              tintColor = 'black'
              textColor = '#000000'
              baseColor = '#000000'
              onChangeText={Email=>this.setState({Email})}
              error = {this.state.emailerrormessage1}
              
             />
             <TextField
              fontSize={20}
              label = 'Password'
              tintColor = 'black'
              secureTextEntry={this.state.showPass}
              textColor = '#000000'
              baseColor = '#000000'
              maxLength={20}
              secureTextEntry={this.state.showPass}
              onChangeText={Password=>this.setState({Password})}
              error = {this.state.passworderrormessage1}
             />
               
         </View>
  
    
    
     </Content>
    
    
     <Button full warning style={{marginLeft:'30%',marginTop:20,width:170,alignItems:'center'}}
       onPress={this.onSubmit}>
      <Text>Register</Text>
    </Button>
 
    <TouchableOpacity
            style={{marginTop: "5%",width: "70%",marginLeft: "15%"}}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.TextStyle}> Already have an account?Login </Text>
          </TouchableOpacity>
    </ScrollView>
      </ImageBackground>
    
    </Container>
    );
  }
}

