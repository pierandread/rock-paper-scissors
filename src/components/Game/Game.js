import React from 'react';
import {useParams} from 'react-router';

function Game({match}) {

  const {points} = useParams();
  
  return (
    <div>
      <p>I'm the Game, we will play until {points}</p>
    </div>
  );
}

export default Game;
