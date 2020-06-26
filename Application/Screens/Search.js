import React from 'react';
import { FlatList, TextInput, ActivityIndicator, Text, View, Image, TouchableOpacity, Dimensions, StyleSheet  } from 'react-native';
import data from '../json/books.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating'
const { height, width } = Dimensions.get('window')

export default class Search extends React.Component {

  constructor(props){
    super(props);
    this.state ={  dataSource: [],
        isLoading: true}
  }

  // componentDidMount(){
  //   this.setState({
  //      isLoading: false,
  //      dataSource: data.book_array,      
  //  });  
  // }
  componentDidMount= async()=> {
    return fetch('https://sachinbv96.000webhostapp.com/react/coursehome.php')
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
renderSeparator = () => {
  return (
    <View
    style={{height: 1, width: '100%', backgroundColor: 'black'}}>
    </View>
  )
}


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>

     <View style={{ flexDirection: 'row', height: this.startHeaderHeight, backgroundColor: '#4f493a', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        
                        <View style={{
                            flexDirection: 'row', padding: -10,
                            backgroundColor: '#696251', marginHorizontal: 10,
                            shadowOffset: {width: 0, height:0},
                            shadowColor: 'black',
                            shadowOpacity: 0.9,
                            elevation: 1,
                            borderRadius:30,
                            borderColor: 'black',
                            borderWidth: 1,
                            width:'90%',
                            height:'65%',
                            marginTop: Platform.OS == 'android' ? 15 : null
                        }}>
                            <Icon name="search" size={30} style={{marginLeft:7,marginTop:7}} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search"
                                placeholderTextColor="white"
                                style={{width:'80%',fontWeight: '700', backgroundColor: '#696251' }}
                            />
                           
                        </View>
                        
                        
                    </View>



        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
    
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Course',({data:item.id}))}>
      <View style={{ width: '100%', height: width / 4 , borderWidth: 0.5, marginTop:5, borderColor: '#dddddd' }}>
       
                <View style={{ flex: 1,flexDirection:'row', marginBottom:3,marginLeft:5 }}>
                    <Image
                        style={{ flex: 0.75, width: null, height: null, resizeMode: 'cover',marginRight:20,marginTop:10,marginBottom:10 }}
                        source={{ uri: item.image }}  />
                
                <View style={{ flex: 1.25, alignItems: 'flex-start',justifyContent:'flex-start', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 15, color: '#000' }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}></Text>
                    <Text style={{ fontSize: 10 }}>{item.Price}</Text>
                    <StarRating
                        disable={true}
                        maxStars={5}
                        rating={4}
                        starSize={20}
                        fullStarColor={'#FA9000'}

                    />
                </View>
                </View>
               
            </View>
            </TouchableOpacity>
          }

        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
});