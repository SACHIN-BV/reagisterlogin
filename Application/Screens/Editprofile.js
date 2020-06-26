import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListView
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

const { width: WIDTH } = Dimensions.get('window')
const options={
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
  }

export default class Editprofile extends Component {
    constructor(props){
        super(props);
        this.state={
          data:this.props.navigation.state.params.data,
          avatarSource: null,
          pic:null,
          edit:false,
          dataSource: [],
          isLoading: true,
          userName:'',
          userSName:'',
          userPhone:'', 
          userEmail:'',
          userCourse:'',
          userCollege:'',
          userCity:'', 
          userState:'', 
          userCountry:''
        }
      
      }
    GetItem (fruit_name) {
       
      Alert.alert(fruit_name);
     
      }
     
     
      selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
    
            this.setState({
    
              ImageSource: source,
              data: response.data
    
            });
    
            RNFetchBlob.fetch('POST', 'https://bvaws.000webhostapp.com/react/profilepic.php', {
                Authorization: "Bearer access-token",
                otherHeader: "foo",
                'Content-Type': 'multipart/form-data',
              }, [
                  { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },
                  { name: 'email', data: 'suresh@gmail.com' }
                ]).then((resp) => {
          
                  var tempMSG = resp.data;
          
                  tempMSG = tempMSG.replace(/^"|"$/g, '');
          
                  Alert.alert(tempMSG);
          
                }).catch((err) => {
                  // ...
                })
          }
        });
      }
    
    userUpdate = () =>{
      //alert('ok'); // version 0.48
     // console.warn("calling");
      const {userName} = this.state;
      const {userSName} = this.state;
      const {userPhone} = this.state;
      const {userEmail} = this.state;
      const {userCourse} = this.state;
      const {userCollege} = this.state;
      const {userCity} = this.state;
      const {userState} = this.state;
      const {userCountry} = this.state;
      
     // console.warn();
      console.warn(userName);
      fetch('https://bvaws.000webhostapp.com/react/ProfileUpdate.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          name: userName,
          sname: userSName,
          phone: userPhone,
          email: userEmail,
          course: userCourse,
          college: userCollege,
          city: userCity,
          state: userState,
          country: userCountry,

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
      <FlatList
      data={this.state.data}
      renderItem={({item}) => 
        <ScrollView style={{ flex:1}}>
<View style={styles1.container}>
          <View style={styles1.header}>
            <View style={styles1.headerContent}>
                <Image style={styles1.avatar}
                  source={{ uri: item.Photo }}/>

                <Text style={styles1.name}   onPress={this.selectPhotoTapped.bind(this)}>
                  Edit
                </Text>
            </View>
          </View>
          
          <View style={styles1.body}>
            <View style={styles1.bodyContent}>
            <Text style={styles1.inText}
              >First Name:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userName => this.setState({userName})}
             >{item.Name}</TextInput>
              <Text style={styles1.inText}
              >Second Name:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userSName => this.setState({userSName})}
              >{item.s_Name}</TextInput>
              <Text style={styles1.inText}
              >Email:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userEmail => this.setState({userEmail})}
              >{item.Email}</TextInput>
              <Text style={styles1.inText}
              >Phone:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userPhone => this.setState({userPhone})}
              >{item.Phone}</TextInput>
              <Text style={styles1.inText}
              >Course:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userCourse => this.setState({userCourse})}
              >{item.Course}</TextInput>
              <Text style={styles1.inText}
              >College:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userCollege => this.setState({userCollege})}
              >{item.College}</TextInput>
              <Text style={styles1.inText}
              >City:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userCity => this.setState({userCity})}
              >{item.City}</TextInput>
              <Text style={styles1.inText}
              >State:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userState => this.setState({userState})}
              >{item.State}</TextInput>
              <Text style={styles1.inText}
              >Country:</Text>
              <TextInput
              underlineColorAndroid="black"
              style={styles1.input}
              onChangeText= {userCountry => this.setState({userCountry})}
              >{item.Country}</TextInput>
            
               <TouchableOpacity style={styles1.btnLogin}  onPress={this.userUpdate} >
            <Text style={styles1.text}>Update</Text>
        </TouchableOpacity>
            </View>
        </View>
      </View>
          </ScrollView>
          }
          keyExtractor={({id}, index) => id}
          ItemSeparatorComponent={this.renderSeparator}
        />
    );
  }
}
const styles1 = StyleSheet.create({
    header:{
      backgroundColor: "#1E90FF",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor:'#0905ff',
        justifyContent:'center',
        marginTop: 20
      },
      text: {
    
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center'
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
      padding:30,
    },
    textInfo:{
      fontSize:18,
      marginTop:20,
      color: "#696969",
    },
    input: {
        width: WIDTH - 85,
        height: 45,
        borderRadius: 25,
        fontSize: 22,
        paddingLeft: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        color: 'rgba(0, 0, 0, 1)',
        marginHorizontal: 25
      },
      inText:{
        color:'black',
        fontSize: 20,
        fontWeight:'500',
        marginTop: 10,
        opacity:0.5
      }
  });
   