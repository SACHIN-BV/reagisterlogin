import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Card, CardItem, Body  } from 'native-base';
import ProgressCircle from 'react-native-progress-circle';

type Props = {};
export default class ContentProgress extends Component<Props> {

  render() {
  //ca
 
    return (
   
    
       <View>
         

<Card style={{height:230}}>
    <View style={{alignItems:'center',marginTop:30}}>
    <Text>Overall Progress</Text>
    <View style={{alignItems:'center',marginTop:30}}>
    <ProgressCircle
            percent={100}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            
        >
            
            <Text style={{ fontSize: 18 }}>{'100%'}</Text>
        </ProgressCircle>
        </View>
    </View>
</Card>

<Card style={{height:290}}>
<View style={{alignItems:'center',marginTop:30}}>
    <Text>Content Progress</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:30}}>
<Text style={{marginLeft:40}}>Video/Audio</Text>
<Text style={{marginLeft:180}}>100%</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:30}}>
<Text style={{marginLeft:40}}>Documents</Text>
<Text style={{marginLeft:190}}>N/A</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:30}}>
<Text style={{marginLeft:40}}>Knowledge Check</Text>
<Text style={{marginLeft:150}}>N/A</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:30}}>
<Text style={{marginLeft:40}}>Assessments</Text>
<Text style={{marginLeft:180}}>N/A</Text>
    </View>
</Card>

       </View>
    
   
    
    );
  }
}
