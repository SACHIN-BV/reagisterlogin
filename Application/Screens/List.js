import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity, Dimensions, StyleSheet  } from 'react-native';
import data from '../json/books.json';
import StarRating from 'react-native-star-rating'
const { height, width } = Dimensions.get('window')

export default class List extends React.Component {

  constructor(props){
    super(props);
    this.state ={  dataSource: [],
        isLoading: true}
  }

  componentDidMount= async()=> {
    return fetch('https://bvaws.000webhostapp.com/react/coursehome.php')
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
     
        <FlatList
          data={this.state.data}
          renderItem={({item}) => 
      //        <View style={{flex: 1, flexDirection:'row', marginBottom:3}}>
      //     <Image style={{ width:80, height:80, margin:5}}
      //         source={{ uri: item.image }} />
      //     <View style={{flex:1, justifyContent:'flex-start',marginLeft:5}}>
      //         <Text style={{fontSize:18,color:'green',marginBottom:15}}>
      //             {item.book_title}
      //         </Text>
      //         <Text style={{fontSize:16,color:'red'}}>
      //             {item.author}
      //         </Text>
      //         </View>
      //         <View style={{flex:0, justifyContent:'flex-end'}}>
      //         <Text style={{fontSize:16,color:'blue'}}>
      //             {item.page}
      //         </Text>
      //     </View> 
      // </View>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Courses')}>
      <View style={{ width: width / 1 - 30, height: width / 3 , borderWidth: 0.5, borderColor: '#dddddd' }}>
       
                <View style={{ flex: 1,flexDirection:'row', marginBottom:3 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={{ uri: item.image }}  />
                
                <View style={{ flex: 1, alignItems: 'flex-start',justifyContent:'flex-start',marginLeft:5, justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: '#b63838' }}> {item.Title}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.author}</Text>
                    <Text style={{ fontSize: 10 }}>{item.page}$</Text>
                    <StarRating
                        disable={true}
                        maxStars={5}
                        rating={4}
                        starSize={10}

                    />
                </View>
                </View>
               
            </View>
            </TouchableOpacity>
          }
          keyExtractor={({id}, index) => id}
          ItemSeparatorComponent={this.renderSeparator}
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