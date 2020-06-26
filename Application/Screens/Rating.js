import React, { Component } from 'react';
import { Platform,FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Button, CardItem, Body } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class Ratings extends Component<Props> { 
    constructor(props) {
        super(props);
        this.state = { 
          rating:'',
        }
      }
    ratingCompleted(rating) {
        alert("Thank for Your Feedback")
      }
  render() {

    return (
        <View>


        <Card style={{ height: 280 }}>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text>Give Feedback</Text>
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                        
                  <AirbnbRating
                    count={5}
                    reviews={["", "", "", "", ""]}
                    defaultRating={3}
                    size={30}
                    
                  />
          
                </View>
            </View>
        </Card>

      
  

   
      </View>
    );
  }
}