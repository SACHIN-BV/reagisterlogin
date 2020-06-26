import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import { Link } from "react-router-native";
import Question from "../Components/Question";
import { Rating, AirbnbRating } from 'react-native-ratings';
export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      questions: [],
      questions1:this.props.navigation.state.params.data1,
      current: 0,
      correctScore: 5,
      totalScore: 50,
      dialogVisible:false,
      results: {
        score: 0,
        correctAnswers: 0
      },
      completed: false
    };
    
  }
  
  fetchQuestions = async () => {
    // await this.setState({ loading: true });
    // const response = await fetch(
    //   `https://bvaws.000webhostapp.com/react/quiz.json`
    // );
   const questions =  this.state.questions1;
    const { results } = questions;

    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });

    await this.setState({ questions: results, loading: false });
  };

  reset = () => {
    this.setState(
      {
        questions: [],
        current: 0,
        results: {
          score: 0,
          correctAnswers: 0
        },
        completed: false
      },
      () => {
        this.fetchQuestions();
      }
    );
  };

  submitAnswer = (index, answer) => {
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };
    results.score = isCorrect ? results.score + 5 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;
    this.setState({
      current: index + 1,
      results,
      completed: index === this.state.questions.length-1 ? true : false
    });
  };

  componentDidMount() {
    this.fetchQuestions();
  }
  
  _scoreMessage=(score)=>{
  
    if((score*100)/this.state.questions.length <= 40){
    //  const { navigate } = this.props.navigation;
      return (              <Button title="Restart Quiz" onPress={this.reset} />
      )
    }else {
      return (              <Button title="Congrats" onPress={this.rating} />
      )
    }
  }
  rating(){
   


  }
  render() {
//  alert(this.state.questions.length)
    return (
      <View style={styles.container}>
         <View style={{ alignItems:'center', height: 60, backgroundColor: '#4f493a' }}>

<Text style={{ color: 'white',  marginTop: 30 }}>Quiz</Text>
</View>
        {!!this.state.loading && (
          <View style={styles.loadingQuestions}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Please wait while we are loading questions for you</Text>
          </View>
        )}

        {!!this.state.questions.length > 0 &&
          this.state.completed === false && (
            <Question
              onSelect={answer => {
                this.submitAnswer(this.state.current, answer);
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
              total={this.state.questions.length}
            />
          )}

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
              <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
              <Text>
                Incorrect Answers: {this.state.questions.length - this.state.results.correctAnswers}
              </Text>
              <Text>Total Score: {this.state.questions.length*5}</Text>
              <Text>Obtained Score: {this.state.results.score}</Text>
             { this._scoreMessage(this.state.results.score) }
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },

  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
