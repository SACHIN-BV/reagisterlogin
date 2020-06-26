import React, { Component } from "react";
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar
} from "react-native";
import Category from '../Components/Category';
import { Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome'
const { height, width } = Dimensions.get('window')
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSource1: [],
      dataSource2: [],
      isLoading: true,
      Course: [{
        "id": "1",
        "title": "React Native - The Practical Guide",
        "sub_title": "Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps",
        "students": "76,000",
        "image": "http://184.171.246.212/~afrodigitals/Online%20Course/upload/header.jpg",
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
            "title": "Quiz 1",
            "no_of_qn": "10",
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
            "title": "Quiz 2",
            "no_of_qn": "10",
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
  }
  componentDidMount = async () => {
    this.coursehome();
    this.mycourse();
    // this.count();

  }
  count() {
    return fetch('https://bvaws.000webhostapp.com/react/count.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: 'sachin@gmail.com',
      })

    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource2: responseJson.data,
        })

      })
      .catch((error) => {
        console.error(error);
      });
  }
  coursehome() {
    return fetch('https://sachinbv96.000webhostapp.com/react/coursehome.php')
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
  mycourse() {

    return fetch('https://sachinbv96.000webhostapp.com/react/myCourse.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: 'sachin@gmail.com',



      })

    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource1: responseJson.data,
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

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#4f493a"
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', height: 70, width: '100%' }}>
            <View style={{ width: '70%', backgroundColor: '#4f493a', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', marginTop: 10, marginLeft: '30%' }}>HOME</Text>
            </View>
            <View style={{ width: '30%', flexDirection: 'row', backgroundColor: '#4f493a', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="chat" size={25} style={{ color: 'white', }} onPress={() => this.props.navigation.navigate('Chat')} />
              <Icon name="notifications" size={25} style={{ color: 'white', marginLeft: 10 }} onPress={() => this.props.navigation.navigate('Notification')} />
            </View>

          </View>
          <ScrollView
            scrollEventThrottle={16}
          >
            <View style={{ alignItems: 'center' }}>
              <Card style={{ height: 100, width: '80%', backgroundColor: '#ffffff' }}>
                {/* <FlatList
                                data={this.state.dataSource2}
                                renderItem={({ item }) => */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                  <View style={{ alignItems: 'center' }}>
                    <Icon2 name="circle-o-notch" size={20} style={{ color: '#ffd103' }} />
                    <Text>1</Text>
                    <Text style={{ fontSize: 9 }}>Course In Progress</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Icon2 name="circle-o" size={20} style={{ color: '#ffd103' }} />
                    <Text>2</Text>
                    <Text style={{ fontSize: 9 }}>Course Completed</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Icon1 name="award" size={20} style={{ color: '#ffd103' }} />
                    <Text>0</Text>
                    <Text style={{ fontSize: 9 }}>certificate</Text>
                  </View>
                </View>
                {/* }
                                /> */}
              </Card>

            </View>
            <View style={{ alignItems: 'center', height: 50, backgroundColor: '#4f493a' }}>

              <Text style={{ color: 'white', marginTop: 10 }}>TOP COURSE</Text>
            </View>
            <View style={{ height: 140, marginTop: 10 }}>

              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.dataSource}
                renderItem={({ item }) =>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Courses1', ({ data: item.id }))}>
                    <View style={{ height: 150, width: 150, marginLeft: 2 }}>

                      <Card style={{ height: 130, width: '100%', backgroundColor: '#ffffff', borderRadius: 10 }}>
                        <Image style={{ height: '60%', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.image }} />
                        <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                      </Card>

                    </View>
                  </TouchableOpacity>
                }
              />

            </View>
            <View style={{ alignItems: 'center', height: 50, backgroundColor: '#4f493a' }}>

              <Text style={{ color: 'white', marginTop: 10 }}>MY COURSE</Text>
            </View>
            <View style={{ height: 140, marginTop: 10 }}

            >


              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.dataSource1}
                renderItem={({ item }) =>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Contents', ({ data: item.id }))}>
                    <View style={{ height: 150, width: 150, marginLeft: 2 }}>

                      <Card style={{ height: 130, width: '100%', backgroundColor: '#ffffff', borderRadius: 10 }}>
                        <Image style={{ height: '60%', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.image }} />
                        <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                      </Card>

                    </View>
                  </TouchableOpacity>
                }
              />





            </View>


          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,

    color: 'white',
    fontStyle: 'italic'
  }
});