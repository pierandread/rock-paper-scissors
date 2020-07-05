import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import {randomNumber, play} from '../../logics/gameLogic';
import { Link } from "react-router-dom";
import { gifSources } from './gifSource';
import './Game.css'

function Game() {
  const {points} = useParams();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [endOfGame, setEndOfGame] = useState();
  const [userWon, setUserWon] = useState();
  const [computerWon, setComputerWon] = useState();
  const [disableButtons, setDisableButtons] = useState();
  const [gifSource, setGifSource] = useState("");
  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [games,setGames] = useState(0)

  useEffect(()=>{
    if(window.location.pathname.includes("simulation")) {
       if (games===0) {
         window.setTimeout(()=>{playing(randomNumber(0,3))}, 1000);
      } else if (userScore!==+points && computerScore!==+points) {        
         setTimeout(()=>{playing(randomNumber(0,3))}, 3000);
      }
    };
  }, [games])

  const choices = ["rock", "paper", "scissors"];

  function playing (input) {
    const pcInput = randomNumber(0, 3);
    const result = play(pcInput, input);
    console.log(result);
    setGifSource(gifSources[input][pcInput]);
    setPlayerChoice(choices[input]);
    setComputerChoice(choices[pcInput]);
    setDisableButtons(true);
    setTimeout(()=>setDisableButtons(false), 500)
    if (result==="win") {setUserScore(userScore+1);};
    if (result==="lost") {setComputerScore(computerScore+1)};
    setGames(games+1);
    return null;
  }

  function resetGame() {
    setUserScore(0);
    setComputerScore(0);
    setEndOfGame();
    setUserWon();
    setComputerWon();
    setDisableButtons();
    setGifSource("");
    setPlayerChoice();
    setComputerChoice();
    setGames(0);
  }
  
  if(userScore===+points && !disableButtons) {
    setDisableButtons(true);
    setTimeout(()=> setEndOfGame(true),2000);
    setUserWon(true);
  }

  if(computerScore===+points && !disableButtons) {
    setDisableButtons(true);
    setTimeout(()=> setEndOfGame(true),2000);
    setComputerWon(true);
  };

  //to avoid user manipulating url manually
  if (points>10 || points<=0) return (
    <div>
      <p className="nav-bar">Number of games too high or low, please go back to the homepage.</p>
      <div className="homepage-button">
        <Link to={'/'}>
          <button className="button-choice">We can help.</button>
        </Link>
      </div>
    </div>
  )

  if(endOfGame) return (
    <div>  
    <div className="nav-bar"></div>
    <div className="end-container" style={{}}>
      <img src={computerWon? "https://media.giphy.com/media/7MezEc0TOaMlW/giphy.gif" : "https://media.giphy.com/media/cQNRp4QA8z7B6/giphy.gif"} alt="end of game" className="ending-gif"/>
      {userWon && <h2>You won</h2>}
      {computerWon && <h2>Computer won</h2>}
      <p>Final score: You {userScore} vs Computer {computerScore}</p>
      <div>
        <button onClick={()=>resetGame()} className="button-redirect" style={{margin: "1em"}}>Start a new game.</button>
        <Link to={'/'} style={{margin: "1em"}}>
          <button className="button-redirect">Go back to the homepage.</button>
        </Link>
      </div>
    </div>

    </div>
  );

  return (
    <div>
      <div className="nav-bar">
        <p>I'm the Game, we will play until {points} points!</p>   
      </div>
      <div className="scores-container">
        <p>Your Score: {userScore}</p>
        <p>Computer Score: {computerScore}</p>
      </div>
      <div className="game-zone">
        <div className="gif-container">
          {gifSource && <img src={gifSource} alt="gif of the game" className="gif-img"></img>}
        </div>
        <div className="button-container-game">
          <button onClick={()=>playing(0)} disabled={window.location.pathname.includes("simulation")? true : disableButtons} className="button-choice"><i className="fa fa-hand-rock-o" aria-hidden="true"></i> Rock</button>
          <button onClick={()=>playing(1)} disabled={window.location.pathname.includes("simulation")? true : disableButtons} className="button-choice"><i className="fa fa-hand-paper-o" aria-hidden="true"></i> Paper</button>
          <button onClick={()=>playing(2)} disabled={window.location.pathname.includes("simulation")? true : disableButtons} className="button-choice"><i className="fa fa-hand-scissors-o" aria-hidden="true"></i> Scissor</button>
        </div>
        <div className="chosing-options">
          {playerChoice? <div><p>You chose {playerChoice} </p> <p>Computer chose {computerChoice}</p> </div> : <p>Please, choose an option</p> }
        </div>
      </div>
    </div>
  );
}


export default Game;
