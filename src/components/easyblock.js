import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/navbar";
import "./easyblock.css";
import Game_over from "../components/Game_over/Game_over";
import { LevelContext } from "../Context/context";

function EasyBlock() {
  const [clicked, setClicked] = useState(true);

  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (clicked) {
      //   console.log("a second passed");
      const timeout = setInterval(() => {
        setTimer(timer + 1);
      }, 1);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [clicked, timer]);

  const context = useContext(LevelContext);

  const [start_time, setStartTime] = useState(0);
  const [end_time, setEndTime] = useState(0);
  const [score, setScore] = useState(0);
  const [style, setStyle] = useState(" ");
  const [left, setLeft] = useState(Math.random() * 100 + "%");
  const [top, setTop] = useState(Math.random() * 50 + "%");

  //   var left = Math.random() * 100 + "%";
  //   var top = Math.random() * 50 + "%";
  function reset() {
    setClicked(true);
    setScore(0);
    setTimer(0);
  }
  function blockSelect(val) {
    if (val == "easy") return "easy-block";
    if (val == "medium") return "medium-block";
    if (val == "hard") return "hard-block";
    else return "no-block";
  }
  function timeSet(val) {
    if (val == "easy") return 2000;
    if (val == "medium") return 1500;
    if (val == "hard") return 1000;
    else return 2000;
  }
  useEffect(() => {
    setLeft(Math.random() * 100 + "%");
    setTop(Math.random() * 50 + "%");

    let timer1 = setTimeout(() => setClicked(false), timeSet(context.level));
    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, [score, clicked]);
  function Aimhit() {
    setClicked(true);
    setScore(score + 1);
    setStyle(left, top);
  }
  var total_time = 0;

  return clicked ? (
    <div className="easy-mode">
      <div className="score">Score : {score} </div>
      <div className="time">timer : {timer} </div>

      <div className="game-screen">
        <button
          className={blockSelect(context.level)}
          onClick={Aimhit}
          style={{ left, top, position: "absolute" }}
        ></button>
      </div>
    </div>
  ) : (
    <Game_over time={timer} score={score} reset={reset} />
  );
}

export default EasyBlock;
