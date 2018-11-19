import React from "react";
import ReactDOM from "react-dom";
import Board from "./BoardComponent/board.js";
//import "./style/style.css";
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        
      </div>
    );
  }
}
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
