import React, { Component } from 'react'
import { View, Text,  TouchableOpacity, StyleSheet, ListView, FlatList } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { Card, CardItem, Body  } from 'native-base';


const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013'
}

export default class Contents extends Component {
    
  constructor () {
    super()

    this.state = {
      currentPage: 0,
      data:[
        {
          title: 'Preface',
          body: 'Lorem ipsum dolor sit amet, '
        },
        {
          title: 'Introduction',
          body: 'Aenean leo ligula, porttitor eu, '
        },
        {
          title: 'Chapter 1',
          body: 'Donec vitae sapien ut libero '
        },
        {
          title: 'Chapter 2',
          body: 'Nam pretium turpis et arcu.'
        }
      ]
    }
    this.viewabilityConfig = { itemVisiblePercentThreshold: 40 }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={4}
            direction='vertical'
            currentPosition='1'
          />
        </View>

        <FlatList  
        style={{marginTop:70}}
                  data={this.state.data}
                  renderItem={({item}) => 
                  
                      <Card style={{height:80, marginTop:5}}>
                      <TouchableOpacity >
               <CardItem>
                 <Body style={styles.row1}>
                   
                 <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                   
                 </Body>
               </CardItem>
               </TouchableOpacity>
               </Card> 
               
               
            
               }
               />
             
      </View>
    )
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600'
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8
  }
})