import React, { Component } from 'react';
import { Platform,FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import ProgressCircle from 'react-native-progress-circle';


type Props = {};
export default class Progressview extends Component<Props> {
    constructor(p) {
        super(p);
        this.state = {
            data: this.props.navigation.state.params.data,

        };
    }
    render() {
        //ca
        return (
            <View>
           
                <View style={{ alignItems:'center', height: 60, backgroundColor: '#4f493a' }}>

                    <Text style={{ color: 'white',  marginTop: 30 }}>MY PROGRESS</Text>
                </View>
             
       
                <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                    <Text>{this.state.data.Title}</Text>
                </View>

                <Card style={{ height: 230 }}>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text>Overall Progress</Text>
                        <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <ProgressCircle
                                percent={this.state.data.p_total}
                                radius={50}
                                borderWidth={8}
                                color="#3399FF"
                                shadowColor="#999"
                                bgColor="#fff"

                            >

                                <Text style={{ fontSize: 18 }}>{this.state.data.p_total}%</Text>
                            </ProgressCircle>
                        </View>
                    </View>
                </Card>

                <Card style={{ height: 290 }}>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text>Content Progress</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{ marginLeft: 40 }}>Video/Audio</Text>
                        <Text style={{ marginLeft: 180 }}>{this.state.data.p_video}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{ marginLeft: 40 }}>Documents</Text>
                        <Text style={{ marginLeft: 190 }}>{this.state.data.p_documents}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{ marginLeft: 40 }}>Knowledge Check</Text>
                        <Text style={{ marginLeft: 150 }}>{this.state.data.p_knowledge}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{ marginLeft: 40 }}>Assessments</Text>
                        <Text style={{ marginLeft: 180 }}>{this.state.data.p_assessment}</Text>
                    </View>
                </Card>
          
        
           
              </View>



        );
    }
}
