import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import StarRating from 'react-native-star-rating'
class Home1 extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 1 - 30, height: this.props.width / 3 , borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1,flexDirection:'row', marginBottom:3 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={require('../Images/home.jpg')} />
                
                <View style={{ flex: 1, alignItems: 'flex-start',justifyContent:'flex-start',marginLeft:5, justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#b63838' }}>{this.props.type}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 10 }}>{this.props.price}$</Text>
                    <StarRating
                        disable={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}

                    />
                </View>
                </View>
            </View>
        );
    }
}
export default Home1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});