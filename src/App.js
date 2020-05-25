import React, { useState, useEffect } from "react";
import "./App.css";
import Results from "./components/Results";
import Calculating from "./components/Calculating";

function App() {
  const [workValue, setWorkValue] = useState(1);
  const [pomodoroLength, setPomodoroLength] = useState("__");
  const [shortBreak, setShortBreak] = useState("__");
  const [longBreak, setLongBreak] = useState("__");
  const [pomodoros, setPomodoros] = useState("__");
  const [calculating, setCalculating] = useState(false);

  function handleChange(event) {
    setWorkValue(event.target.value);
  }

  function takeChances(workValue) {
    setCalculating(true);
    setPomodoroLength(calculatePomLength(workValue));
    setShortBreak(calculateshortBreak(workValue));
    setLongBreak(calculatelongBreak(workValue));
    setPomodoros(4);
    setTimeout(() => setCalculating(false), 1000);
  }

  function calculatePomLength(workValue) {
    let pomLength = 50;

    for (let count = 0; count < workValue; count++) {
      let results = Math.floor(Math.random() * 10 + 1);
      console.log(results);
      if (
        (results === 1 || results === 10 || results === 5) &&
        pomLength > 17
      ) {
        pomLength = pomLength - 8;

        if (workValue > 5) {
          pomLength = pomLength - 1;
        }

        if (workValue > 7) {
          pomLength = pomLength - 1;
        }

        if (workValue === 10) {
          pomLength = pomLength - 3;
        }
      }
    }

    return pomLength;
  }

  function calculateshortBreak(workValue) {
    let shortBreak = 3;
    for (let count = 0; count < workValue; count++) {
      let results = Math.floor(Math.random() * 10 + 1);
      console.log(results);
      if (
        (results === 1 || results === 10 || results === 5) &&
        shortBreak < 15
      ) {
        shortBreak = shortBreak + 2;

        if (workValue > 5) {
          shortBreak = shortBreak + 1;
        }

        if (workValue > 7) {
          shortBreak = shortBreak + 1;
        }

        if (workValue === 10) {
          shortBreak = shortBreak + 3;
        }
      }
    }

    return shortBreak;
  }

  function calculatelongBreak(workValue) {
    let longBreak = 15;
    for (let count = 0; count < workValue; count++) {
      let results = Math.floor(Math.random() * 10 + 1);
      console.log(results);
      if (
        (results === 1 || results === 10 || results === 5) &&
        longBreak < 40
      ) {
        longBreak = longBreak + 2;

        if (workValue > 5) {
          longBreak = longBreak + 1;
        }

        if (workValue > 7) {
          longBreak = longBreak + 1;
        }

        if (workValue === 10) {
          longBreak = longBreak + 3;
        }
      }
    }
    return longBreak;
  }
  return (
    <div className='App'>
      <div className='container'>
        <h1>Chance Pomodoro !</h1>
        <div className='work-div'>
          <p>Today I worked: </p>
          <label htmlFor='volume'>Not Much</label>
          <input
            type='range'
            min='1'
            max='10'
            id='volume'
            value={workValue}
            onChange={handleChange}
          />
          <label htmlFor='volume'>A ton !</label>
          <div>
            <button
              className='takeChances'
              onClick={() => takeChances(workValue)}
            >
              Take My Chances !
            </button>
          </div>
        </div>
        {!calculating && (
          <Results
            workValue={workValue}
            pomodoroLength={pomodoroLength}
            shortBreak={shortBreak}
            longBreak={longBreak}
            pomodoros={pomodoros}
          />
        )}

        {calculating && <Calculating />}
      </div>
    </div>
  );
}

export default App;
