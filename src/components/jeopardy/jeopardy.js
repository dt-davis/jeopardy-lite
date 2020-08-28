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
      clues: [
        {
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
        {
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
        {
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
      ],
      score: 0,
      answer: "",
      isSelected: false,
      selectedClue: 0,
    };
    this.sumbitAnswer = this.sumbitAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.someFunction = this.someFunction.bind(this);
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        clues: result.data,
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

  someFunction(event) {
    this.setState({ isSelected: true, selectedClue: event.target.value });
  }

  sumbitAnswer(event) {
    event.preventDefault();
    if (
      this.state.answer ===
      this.state.clues[parseInt(this.state.selectedClue)].answer
    ) {
      this.setState({
        score:
          this.state.score +
          parseInt(
            this.state.clues[parseInt(this.state.selectedClue)].value || 100
          ),
      });
    } else {
      this.setState({
        score:
          this.state.score -
          parseInt(
            this.state.clues[parseInt(this.state.selectedClue)].value || 100
          ),
      });
    }

    this.getNewQuestion();
    this.setState({ anwser: "", isSelected: false });
  }

  render() {
    console.log(this.state.clues[parseInt(this.state.selectedClue)].answer);

    return (
      <JeopardyDisplay
        title={
          this.state.clues[parseInt(this.state.selectedClue)].category.title
        }
        question={this.state.clues[parseInt(this.state.selectedClue)].question}
        value={this.state.clues[parseInt(this.state.selectedClue)].value}
        score={this.state.score}
        clueCategories={[
          this.state.clues[0].category.title,
          this.state.clues[1].category.title,
          this.state.clues[2].category.title,
        ]}
        clueValue={[
          this.state.clues[0].value,
          this.state.clues[1].value,
          this.state.clues[2].value,
        ]}
        answer={this.state.anwswer}
        sumbitAnswerDis={this.sumbitAnswer}
        handleChangeDis={this.handleChange}
        isSelectedDis={this.state.isSelected}
        someFunctionDis={this.someFunction}
      />
    );
  }
}
export default Jeopardy;
