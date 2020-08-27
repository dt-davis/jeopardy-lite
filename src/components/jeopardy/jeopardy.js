import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../jeopardyDisplay/JeopardyDisplay";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        id: null,
        answer: "",
        question: "",
        value: 100,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      score: 0,
      answer: "",
    };
    this.sumbitAnswer = this.sumbitAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen

  handleChange(event) {
    this.setState({ answer: event.target.value });
  }

  sumbitAnswer(event) {
    event.preventDefault();
    if (this.state.answer === this.state.data.answer) {
      this.setState({
        score: this.state.score + parseInt(this.state.data.value || 100),
      });
    } else {
      this.setState({
        score: this.state.score - parseInt(this.state.data.value || 100),
      });
    }

    this.getNewQuestion();
    this.setState({ anwser: "" });
  }

  render() {
    console.log(this.state.data.answer);

    return (
      <JeopardyDisplay
        title={this.state.data.category.title}
        question={this.state.data.question}
        value={this.state.data.value}
        score={this.state.score}
        answer={this.state.anwswer}
        sumbitAnswerDis={this.sumbitAnswer}
        handleChangeDis={this.handleChange}
      />
    );
  }
}
export default Jeopardy;
