import React, { useContext } from "react";
import "./App.css";
import LevelButton from "./components/Level_selector/button";
import { LevelProvider, LevelContext } from "./Context/context";
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Game from "./easy";
import Footer from "./components/footer";
import Game_over from "./components/Game_over/Game_over";

function App() {
  return (
    <LevelProvider>
      <LevelButton />
      <Game />

      <Footer />
    </LevelProvider>
  );
}

export default App;
