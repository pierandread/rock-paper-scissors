import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import {randomNumber, play} from '../../logics/gameLogic';
import { Link } from "react-router-dom";
import { gifSources } from './gifSource';

function Game() {
  const {points} = useParams();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [endOfGame, setEndOfGame] = useState();
  const [userWins, setUserWins] = useState();
  const [computerwins, setComputerWins] = useState();
  const [disableButtons, setDisableButtons] = useState();
  const [gifSource, setGifSource] = useState("");
  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [games,setGames] = useState(0)

  useEffect(()=>{
    if(window.location.pathname.includes("simulation")) {
      if(games===0) {
        const simulation = setTimeout(()=>playing(randomNumber(0,3)), 1000);
        endOfGame && clearTimeout(simulation)
      } else {
        const simulation = setTimeout(()=>playing(randomNumber(0,3)), 3000);
        endOfGame && clearTimeout(simulation)
      }
    };
  }, [games, endOfGame])

  const choices = ["rock", "paper", "scissors"];

  function playing (input) {
    const pcInput = randomNumber(0, 3);
    const result = play(pcInput, input);
    console.log(result);
    setGifSource(gifSources[input][pcInput]);
    setPlayerChoice(choices[input]);
    setComputerChoice(choices[pcInput]);
    setGames(games+1);
    if (result==="win") {setUserScore(userScore+1);};
    if (result==="lost") {setComputerScore(computerScore+1)};
    return null;
  }

  function resetGame() {
    setUserScore(0);
    setComputerScore(0);
    setEndOfGame();
    setUserWins();
    setComputerWins();
    setDisableButtons();
    setGifSource("");
    setPlayerChoice();
    setComputerChoice();
    setGames(0);
  }
  
  if(userScore===+points && !disableButtons) {
    setDisableButtons(true);
    setTimeout(()=> setEndOfGame(true),2000);
    setUserWins(true);
  }

  if(computerScore===+points && !disableButtons) {
    setDisableButtons(true);
    setTimeout(()=> setEndOfGame(true),2000);
    setComputerWins(true);
  };

  //to avoid user manipulating url manually
  if (points>10 || points<=0) return (
    <div>
      <p>Number of games too high or low, please go back to the homepage.</p>
      <Link to={'/'}>
        <button>We can help.</button>
      </Link>
    </div>
  )

  if(endOfGame) return (
    <div>
      <img src={computerwins? "https://media.giphy.com/media/7MezEc0TOaMlW/giphy.gif" : "https://media.giphy.com/media/cQNRp4QA8z7B6/giphy.gif"} alt="end of game"/>
      {userWins && <p>You wins</p>}
      {computerwins && <p>Computer wins</p>}
      <p>Final score: You {userScore} vs Computer {computerScore}</p>
      <Link to={'/'}>
        <button>Go back to the homepage.</button>
      </Link>
      <button onClick={()=>resetGame()}>Start a new game.</button>
    </div>
  );

  return (
    <div>
      <p>I'm the Game, we will play until {points}</p>
      <p>Your Score: {userScore}</p>
      <p>Computer Score: {computerScore}</p>
      <div>
        {gifSource && <img src={gifSource} alt="gif of the game"></img>}
      </div>
      <div>
        {playerChoice? <div><p>You chose {playerChoice} </p> <p>Computer chose {computerChoice}</p> </div> : <p>Please, choose an option</p> }
      </div>
      <div>
        <button onClick={()=>playing(0)} disabled={disableButtons}>Rock</button>
        <button onClick={()=>playing(1)} disabled={disableButtons}>Paper</button>
        <button onClick={()=>playing(2)} disabled={disableButtons}>Scissor</button>
      </div>
    </div>
  );
}


export default Game;
