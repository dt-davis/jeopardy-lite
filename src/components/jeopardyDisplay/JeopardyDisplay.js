import React from "react";

function JeopardyDisplay(props) {
  return (
    <div className="Display">
      <h1>Category: {props.title}</h1>
      <br />
      <h2>Question: {props.question}</h2>
      <br />
      <p>point value: {props.value || 100}</p>
      <br />
      <p>Score: {props.score}</p>
      <form onSubmit={props.sumbitAnswerDis}>
        <label>
          Your Answer:
          <input
            type="text"
            value={props.answer}
            onChange={props.handleChangeDis}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default JeopardyDisplay;
