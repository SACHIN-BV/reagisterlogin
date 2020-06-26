import React,{Component} from 'react';
import {ImageBackground,View,TouchableOpacity,ScrollView,Text} from 'react-native';

import { Container, Header, Content, Card, Button,CardItem, Body,Icon,List,ListItem,Radio,Title, Footer} from 'native-base';
import {TextField} from 'react-native-material-textfield';
import styles from '../Styles/Styles';
import Colors from '../Colors/Colors';

//import data from '../json/users.json';

 
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      isLoading: true,
      dataSource:[],
      userEmail:'',
      userPassword:'',
      userCPassword:'',
      Email:'',
      Password:'',
      CPassword:'',
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

    
      var CPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    
      
        if(CPassword.test(this.state.CPassword))
        {
         
          this.setState({
            cpassworderrormessage: this.state.CPassword,
            
          })
        }
        else
        {
            
          
            this.setState({
              cpassworderrormessage1: "invalid Password",
              
            })
      

        }

        




		const {emailerrormessage,passworderrormessage,cpassworderrormessage} = this.state;
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
		fetch('https://sachinbv96.000webhostapp.com/react/forget.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: emailerrormessage,
        password: passworderrormessage,
        cpassword: cpassworderrormessage,
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Reset");
				 this.props.navigation.navigate("Login");
			 }else{
				 alert("Wrong Details");
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
         
      <ImageBackground
        source={require("../Images/Logo.png")}
       style={styles.container}
      >
         <ScrollView>
      <View style={{marginTop:'10%',alignItems:'center',justifyContent:'center'}}>
         <Text style={styles.text}>Forget Password</Text>
      </View>
      <Content padder>
     <Card style={{backgroundColor:Colors.backgroundColor,borderColor:'white',flex:1}}>
    
     <View style={{margin:20}}>
    
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
              textColor = '#000000'
              baseColor = '#000000'
              secureTextEntry={this.state.showPass}
              maxLength={20}
              onChangeText={Password=>this.setState({Password})}
              error = {this.state.passworderrormessage1}
             />

<TextField
              fontSize={20}
              label = 'Conform Password'
              tintColor = 'black'       
              textColor = '#000000'
              baseColor = '#000000'
              secureTextEntry={this.state.showPass}
              maxLength={20}
              onChangeText={CPassword=>this.setState({CPassword})}
              error = {this.state.cpassworderrormessage1}
             />
               
         </View>
  
    </Card>
    
    
     </Content>
    
   
     <Button full success style={{bottom:0,marginTop:20}}
       onPress={this.login}>
      <Text>Reset</Text>
    </Button>
    <TouchableOpacity
            style={styles.ForgotButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.TextStyle}> LOGIN? </Text>
          </TouchableOpacity>
    </ScrollView>
      </ImageBackground>
    
    </Container>
    );
  }
}

