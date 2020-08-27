import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import { Route } from "react-router-dom";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
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
        score: this.state.score + parseInt(this.state.data.value),
      });
    } else {
      this.setState({
        score: this.state.score - parseInt(this.state.data.value),
      });
    }

    this.getNewQuestion();
    this.setState({ anwser: "" });
  }
  render() {
    console.log(this.state.data.answer);
    return (
      <div>
        Category: {this.state.data.category.title} <br />
        Question: {this.state.data.question}
        <br />
        <form onSubmit={this.sumbitAnswer}>
          <label>
            Your Answer:
            <input
              type="text"
              value={this.state.answer}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br />
        Point Vaule : {this.state.data.value} <br />
        Score : {this.state.score}
      </div>
    );
  }
}
export default Jeopardy;
