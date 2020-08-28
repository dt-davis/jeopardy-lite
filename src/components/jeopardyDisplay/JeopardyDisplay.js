import React from "react";

function JeopardyDisplay(props) {
  if (!props.isSelectedDis) {
    return (
      <div>
        <h1 className="categoryHeader">Please click a Category</h1>
        <button
          className="categoryBox"
          onClick={props.someFunctionDis}
          value="0"
        >
          <i>Category: </i>
          {props.clueCategories[0]} <i>Value: </i> {props.clueValue[0]}
        </button>
        <br />
        <button
          className="categoryBox"
          onClick={props.someFunctionDis}
          value="1"
        >
          <i>Category: </i>
          {props.clueCategories[1]} <i>Value: </i> {props.clueValue[1]}
        </button>
        <br />
        <button
          className="categoryBox"
          onClick={props.someFunctionDis}
          value="2"
        >
          <i>Category: </i>
          {props.clueCategories[2]} <i>Value: </i> {props.clueValue[2]}
        </button>
        <br />
        <p>Score: {props.score}</p>
      </div>
    );
  } else
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
