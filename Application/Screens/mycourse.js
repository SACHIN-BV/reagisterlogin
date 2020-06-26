import React, { Component } from "react";
import {
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from "react-native";
import Category from '../Components/Category';
import { Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome'
const { height, width } = Dimensions.get('window')
class Mycourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }
    componentDidMount = async () => {
        return fetch('https://bvaws.000webhostapp.com/react/mycourse.php', {
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
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 60 + StatusBar.currentHeight
        }
    }

    render() {
        return (
           
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.dataSource}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Contents', ({ data: item.id }))}>
                    <View style={{ height: 130, width: 150, marginLeft: 20 }}>

                        <ImageBackground source={{ uri: item.Image}}
                            style={{ flex: 1, marginBottom: 20 }}
                        >
                            <View style={{
                                flex: 1, justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'stretch',
                                backgroundColor: 'rgba(0,0,0,0.5)'
                            }}>
                                <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>{item.Title}</Text>


                            </View>

                        </ImageBackground>


                    </View>
                </TouchableOpacity>
            }
        />
           


                  
        );
    }
}
export default Mycourse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize:20,
        
        color:'white',
        fontStyle:'italic'
      }
});