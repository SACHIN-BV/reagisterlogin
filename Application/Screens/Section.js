import React from 'react';
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
    ImageBackground,
    Dimensions,
    SafeAreaView
  } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, DeckSwiper, Header, Card, CardItem, Body, Content, H1, H2, H3, Text, Thumbnail, Left,  } from 'native-base';

export default class App extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
          data:this.props.navigation.state.params.data,
          
        };
      }
  render() {
// alert(this.state.data.Videos[1].title)
    return (
        <View>
          <View style={{ alignItems:'center', height: 60, backgroundColor: '#4f493a' }}>

<Text style={{ color: 'white',  marginTop: 30 }}>{this.state.data.name}</Text>
</View>
        <FlatList
           data={this.state.data.video}
           renderItem={({item}) => 
              
           <Card style={{marginTop:5}}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Videotwo',({data:item.video}))}>
    <CardItem>
      <Body style={styles.row1}>
        
      <Text style={{fontWeight:'bold'}}>{item.title}</Text>
      <Text style={{fontWeight:'bold'}}>{item.duration}</Text>
        
      </Body>
    </CardItem>
    </TouchableOpacity>
    </Card> 
    
    
 
    }
    />
    <Card style={{marginTop:5}}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Questions',({data1:this.state.data.quiz}))} >
    <CardItem>
      <Body style={styles.row1}>
        
      <Text style={{fontWeight:'bold'}}>Quiz</Text>
      <Text style={{fontWeight:'bold'}}>10</Text>
        
      </Body>
    </CardItem>
    </TouchableOpacity>
    
    </Card> 
           
    
    
      </View>
    );
  }
}
const styles = StyleSheet.create({

    row1:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:26,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
      
    }
});