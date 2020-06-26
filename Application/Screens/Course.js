import React,{Component} from 'react';
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
  SafeAreaView,
  StatusBar
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import ProgressCircle from 'react-native-progress-circle';
import { Container,  Tab, Tabs, ScrollableTab, DeckSwiper, Header, Card, CardItem, Body, Content, H1, H2, H3, Text, Thumbnail, Left,  } from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-ratings';
import StepIndicator from 'react-native-step-indicator'
import dummyData from './data';
import { Colors } from './Colors';
import Contents from './Content';
import Ratings from './Rating';
const { width: WIDTH } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
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

HEADER_MAX_HEIGHT = 130
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 140
PROFILE_IMAGE_MIN_HEIGHT = 60

//call me

export default class Course extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarSource: null,
      pic:null,
      sectionno:0,
      dataSource: [],
      currentPage: 0,
      isLoading: true,
      Course: [{
        "id": "1",
        "title": "React Native - The Practical Guide",
        "sub_title": "Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps",
        "students": "76,000",
        "image": "../assets/feed_images/1.jpg",
        "preview": "https://bvaws.000webhostapp.com/videos/1.mp4",
        "will_learn": "Build native mobile apps with JavaScript and React Dive deeper into React Native Develop cross-platform (iOS and Android) mobile apps without knowing Swift, ObjectiveC or Java/ Android",
        "Requirements": "React knowledge is a must (but you absolutely DON'T have to be an expert) JavaScript knowledge is a must, next-gen JavaScript knowledge (i.e. ES6+) is recommended NO Android/ Java or iOS (Swift, ObjectiveC) development experience is required",
        "Description": "Build native mobile apps with JavaScript and React Dive deeper into React Native Develop cross-platform (iOS and Android) mobile apps without knowing Swift, ObjectiveC or Java/ Android' No need to learn Java, Android, Swift, ObjectiveC or anything of that - React and JavaScript is all you need to create awesome native mobile apps that work on both Android and iOS. That's probably the reason why Instagram, AirBnB, Skype and many other global companies are using it to build their mobile apps! With this course, you can join this league. I'll teach you all you need to create your own React Native apps, publish them to the Google Play Store and Apple App Store and dive really deep into the React Native ecosystem. You'll learn all about the theory behind React Native, its core concepts, how to build responsive designs that work on different device sizes, how to animate React Native apps, how to navigate around, use maps and the camera and so much more!",
        "section": [{
            "id": 1,
            "title": "section one",
            "Videos": [{
                "title": "Card One",
                "duration": "09:25:00",
                "video": "https://bvaws.000webhostapp.com/videos/1.mp4"
              },
              {
                "title": "Card Two",
                "duration": "08:30:00",
                "video": "https://bvaws.000webhostapp.com/videos/1.mp4"
              },
              {
                "title": "Card Tree",
                "duration": "18:30:00",
                "video": "https://bvaws.000webhostapp.com/videos/2.mp4"
              },
              {
                "title": "Card Four",
                "duration": "10:30:00",
                "video": "https://bvaws.000webhostapp.com/videos/3.mp4"
              },
              {
                "title": "Card Four",
                "duration": "10:30:00",
                "video": "https://bvaws.000webhostapp.com/videos/4.mp4"
              }
            ],
            "Quiz": {
              "title":"Quiz 1",
              "no_of_qn":"10",
              "response_code": 0,
              "results": [{
                  "type": "boolean",
                  "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
                  "correct_answer": "true",
                  "incorrect_answers": [
                    "false"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "On a dartboard, what number is directly opposite No. 1?",
                  "correct_answer": "19",
                  "incorrect_answers": [
                    "20",
                    "12",
                    "15"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
                  "correct_answer": "Subscriber",
                  "incorrect_answers": [
                    "Single",
                    "Secure",
                    "Solid"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "Which of the following card games revolves around numbers and basic math?",
                  "correct_answer": "Uno",
                  "incorrect_answers": [
                    "Go Fish",
                    "Twister",
                    "Munchkin"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "What is Tasmania?",
                  "correct_answer": "An Australian State",
                  "incorrect_answers": [
                    "A flavor of Ben and Jerry&#039;s ice-cream",
                    "A Psychological Disorder",
                    "The Name of a Warner Brothers Cartoon Character"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "Which candy is NOT made by Mars?",
                  "correct_answer": "Almond Joy",
                  "incorrect_answers": [
                    "M&amp;M&#039;s",
                    "Twix",
                    "Snickers"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "Which of the following is the IATA code for Manchester Airport?",
                  "correct_answer": "MAN",
                  "incorrect_answers": [
                    "EGLL",
                    "LHR",
                    "EGCC"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "What is Cynophobia the fear of?",
                  "correct_answer": "Dogs",
                  "incorrect_answers": [
                    "Birds",
                    "Flying",
                    "Germs"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "If you are caught &quot;Goldbricking&quot;, what are you doing wrong?",
                  "correct_answer": "Slacking",
                  "incorrect_answers": [
                    "Smoking",
                    "Stealing",
                    "Cheating"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "When someone is cowardly, they are said to have what color belly?",
                  "correct_answer": "Yellow",
                  "incorrect_answers": [
                    "Green",
                    "Red",
                    "Blue"
                  ]
                }
              ]
            }
          },
          {
            "id": 2,
            "title": "section two",
            "Videos": [{
              "title": "Card One",
              "duration": "09:25:00",
              "video": "https://bvaws.000webhostapp.com/videos/1.mp4"
            },
            {
              "title": "Card Two",
              "duration": "08:30:00",
              "video": "https://bvaws.000webhostapp.com/videos/1.mp4"
            },
            {
              "title": "Card Tree",
              "duration": "18:30:00",
              "video": "https://bvaws.000webhostapp.com/videos/2.mp4"
            },
            {
              "title": "Card Four",
              "duration": "10:30:00",
              "video": "https://bvaws.000webhostapp.com/videos/3.mp4"
            },
            {
              "title": "Card Four",
              "duration": "10:30:00",
              "video": "https://bvaws.000webhostapp.com/videos/4.mp4"
            }
          ],
            "Quiz": {
              "title":"Quiz 2",
              "no_of_qn":"10",
              "response_code": 0,
              "results": [{
                  "type": "boolean",
                  "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
                  "correct_answer": "true",
                  "incorrect_answers": [
                    "false"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "On a dartboard, what number is directly opposite No. 1?",
                  "correct_answer": "19",
                  "incorrect_answers": [
                    "20",
                    "12",
                    "15"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
                  "correct_answer": "Subscriber",
                  "incorrect_answers": [
                    "Single",
                    "Secure",
                    "Solid"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "Which of the following card games revolves around numbers and basic math?",
                  "correct_answer": "Uno",
                  "incorrect_answers": [
                    "Go Fish",
                    "Twister",
                    "Munchkin"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "What is Tasmania?",
                  "correct_answer": "An Australian State",
                  "incorrect_answers": [
                    "A flavor of Ben and Jerry&#039;s ice-cream",
                    "A Psychological Disorder",
                    "The Name of a Warner Brothers Cartoon Character"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "Which candy is NOT made by Mars?",
                  "correct_answer": "Almond Joy",
                  "incorrect_answers": [
                    "M&amp;M&#039;s",
                    "Twix",
                    "Snickers"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "Which of the following is the IATA code for Manchester Airport?",
                  "correct_answer": "MAN",
                  "incorrect_answers": [
                    "EGLL",
                    "LHR",
                    "EGCC"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "What is Cynophobia the fear of?",
                  "correct_answer": "Dogs",
                  "incorrect_answers": [
                    "Birds",
                    "Flying",
                    "Germs"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "If you are caught &quot;Goldbricking&quot;, what are you doing wrong?",
                  "correct_answer": "Slacking",
                  "incorrect_answers": [
                    "Smoking",
                    "Stealing",
                    "Cheating"
                  ]
                },
                {
                  "type": "multiple",
                  "question": "When someone is cowardly, they are said to have what color belly?",
                  "correct_answer": "Yellow",
                  "incorrect_answers": [
                    "Green",
                    "Red",
                    "Blue"
                  ]
                }
              ]
            }
          }
        ]
      }]
    }
    this.viewabilityConfig = { itemVisiblePercentThreshold: 40 }
  }
  state = {
    // We don't know the size of the content initially, and the probably won't instantly try to scroll, so set the initial content height to 0
    screenHeight: 0,
  };
  componentDidMount= async()=> {
    let user = await AsyncStorage.getItem('user');
    return fetch('https://sachinbv96.000webhostapp.com/react/Course.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				course_id: this.props.navigation.state.params.data
			})
			
		})
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.Course,
        })
       
      })
      .catch((error) => {
        console.error(error);
      });
  }

  

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }
  
  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
 
  render() {

    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={({ item }) =>
          <View style={{flexDirection:'column'}}>
        <StatusBar
           translucent = {true}
           backgroundColor="transparent"
          />
           <View style={{flex:1}}>
        
              <ImageBackground source={{ uri: item.image }} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'blue',
                height: HEADER_MAX_HEIGHT * 1.5

              }}>
                <View style={{
                  flex: 1, justifyContent: 'flex-start',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  backgroundColor: 'rgba(0,0,0,0.75)'
                }}>
                  <Text style={[styles.textStyle, { backgroundColor: 'transparent', marginTop: 40 }]}>{item.cname}</Text>
                  <AirbnbRating
                    count={5}
                    reviews={["", "", "", "", ""]}
                    defaultRating={4}
                    size={25}
                  />

                </View>
              </ImageBackground>
              </View>
          <View style={{marginTop:190}}>
            <Tabs renderTabBar={() => <ScrollableTab />}>
              <Tab heading="Will I Learn">
                <Card style={{ marginTop: 10 }}>
                  <CardItem>
                    <Body>

                      <Text style={{ fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('Questions')}>Will I Learn</Text>
                      <Text>{item.Will_learn}</Text>

                    </Body>
                  </CardItem>
                </Card>
              </Tab>
              <Tab heading="Description">
                <ScrollView>
                  <Card style={{ marginTop: 10 }} >
                    <CardItem>
                      <Body>

                        <Text style={{ fontWeight: 'bold' }} >Description</Text>

                        <ReadMore
                          numberOfLines={3}
                          renderTruncatedFooter={this._renderTruncatedFooter}
                          renderRevealedFooter={this._renderRevealedFooter}
                          onReady={this._handleTextReady}>
                          <Text >
                            {item.Description}
                          </Text>
                        </ReadMore>

                      </Body>
                    </CardItem>
                  </Card>
                </ScrollView>
              </Tab>
              <Tab heading="Requirements">
                <Card style={{ marginTop: 10 }}>
                  <CardItem>
                    <Body>

                      <Text style={{ fontWeight: 'bold' }}>Requirements</Text>
                      <Text>{item.Requirement}</Text>

                    </Body>
                  </CardItem>
                </Card>
              </Tab>
              <Tab heading="Content">
                {/* <ScrollView>
                  <FlatList
                    data={item.section}
                    renderItem={({ item }) =>

                      <Card style={{ height: 80, marginTop: 5 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Section', ({ data: item }))} >
                          <CardItem>
                            <Body style={styles.row1}>

                              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>

                            </Body>
                          </CardItem>
                        </TouchableOpacity>
                      </Card>



                    }
                  />
                </ScrollView> */}
                
                <View style={styles.container1}>
        <View style={{
      marginVertical: 20,
      paddingHorizontal: 20,
      height:item.section.length*100
    }}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={item.section.length}
            direction='vertical'
            currentPosition={item.section.length}
          />
        </View>

        <FlatList
          style={{ flexGrow: 1,marginTop:20,marginRight:5 }}
          data={item.section}
          renderItem={({item}) =>  
          <Card style={{height:85}}> 
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Section', ({ data: item }))} >
            <CardItem>
              <Body>
                
              <Text style={{fontWeight:'bold'}}>{item.name}</Text>
               
               
                
              </Body>
              </CardItem>           
              </TouchableOpacity>
          </Card>
           }
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={this.viewabilityConfig}
        />
      </View>


              </Tab>
              <Tab heading="Feedback">
               <ScrollView>

                      <Ratings />
                      </ScrollView>
              </Tab>
            </Tabs>
          </View>
          </View>
        }
      />
      
    );
  }
 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container1: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ffffff'
    },

    schoolImage: {
      height: PROFILE_IMAGE_MAX_HEIGHT,
                    width: PROFILE_IMAGE_MAX_HEIGHT*2,
                    borderRadius: PROFILE_IMAGE_MAX_HEIGHT /8,
                    borderColor: 'white',
                    borderWidth: 3,
                    overflow: 'hidden',
                    marginTop: HEADER_MAX_HEIGHT*3 - 50,
                    marginLeft: 0
    },
    title:{
      fontSize: 14,
      fontWeight:'bold',
      color: Colors.DARKGRAY,
  },
  row:{
      flexDirection: 'row',
      justifyContent:'space-between',
      height:56,
      paddingLeft:25,
      paddingRight:18,
      alignItems:'center',
      backgroundColor: Colors.CGRAY,
  },
  row1:{
    flexDirection: 'row',
    justifyContent:'space-between',
    height:26,
    paddingLeft:25,
    paddingRight:18,
    alignItems:'center',
  
},
  parentHr:{
      color: Colors.WHITE,
      width:'100%'
  },
  child:{
      backgroundColor: Colors.LIGHTGRAY,
      padding:16,
  },
    header:{
        backgroundColor: "#1E90FF",
      },
      headerContent:{
        padding:30,
        alignItems: 'center',
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      bodyContent: {
        flex: 1,
        alignItems:'center',
        padding:10,
      },
      editContent: {
        flex: 0.1,
        alignItems:'flex-end',
        padding:20,
      },
      textInfo:{
        fontSize:18,
        marginTop:5,
        color: "#696969",
      },
      edit:{
        marginTop:5,
        alignItems:'flex-end',
        color: "#696969",
      },
      textStyle: {
        fontSize:25,
        color:'white',
        fontStyle:'italic'
      }
})  