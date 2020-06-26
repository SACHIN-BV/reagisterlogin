import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity, Dimensions, StyleSheet  } from 'react-native';
import data from '../json/books.json';
import { Card, CardItem, Body  } from 'native-base';
import ProgressCircle from 'react-native-progress-circle';
import StarRating from 'react-native-star-rating'
const { height, width } = Dimensions.get('window')

export default class Progess extends React.Component {

  constructor(props){
    super(props);
    this.state ={  dataSource: [],
        isLoading: true,
        data: [
          {
            Image:"http://184.171.246.212/~afrodigitals/Online%20Course/upload/header.jpg",
            Title:"React Native - The Practical Guide",
            p_video:'100',
            p_documents: "N/L",
            p_knowledge:"50",
            p_assessment:"N/L",
            p_total:"75"
          },

        ]
      }
  }

  componentDidMount(){
    return fetch('https://sachinbv96.000webhostapp.com/react/myprogress.php', {
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        email: 'sachin@gmail.com',
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
       <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#4f493a' }}>

<Text style={{ color: 'white', marginLeft: 170, marginTop: 30 }}>PROGRESS</Text>




</View>
            <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) =>  
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Progressview', ({ data: item }))}>
                        <Card style={{ flex: 1, flexDirection: 'row', width: width, height: 90}}>
                                <Image
                                    style={{ flex: .5, height: 70,marginTop:10, resizeMode: 'cover' }}
                                    source={{ uri: item.Image }} />

                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 5, justifyContent: 'space-evenly', paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 15, color: '#000000' }}> {item.Title}</Text>
                                   
                                    </View>
                                    <ProgressCircle
                                    style={{ flex: .5, height: 70 }}
                                    percent={item.p_total}
                                    radius={35}
                                    borderWidth={6}
                                    color="#3399FF"
                                    shadowColor="#999"
                                    bgColor="#fff"
                                    
                                   ><Text style={{ fontSize: 12 }}>{item.p_total}</Text>
                                   </ProgressCircle>
                                

                        </Card>
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