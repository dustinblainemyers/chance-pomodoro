import React, { useState, useEffect } from "react";

function Results(props) {
  return (
    <>
      <p>
        <span>Your pomodoro length : {props.pomodoroLength} min</span>
      </p>
      <p>Your short break length : {props.shortBreak} min</p>
      <p>Your long break length : {props.longBreak} min</p>
      <p>Pomodoro's between long break : {props.pomodoros}</p>
    </>
  );
}

export default Results;
