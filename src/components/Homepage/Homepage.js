import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Homepage.css';


function Homepage() {

  const [points, setPoints] = useState(5);

  return (
    <div>
      <div className="title">
        <p>Welcome to Rock, Paper and Scissors</p>
      </div>
      <div className="content-homepage">
        <p>Let's play a game:</p>
        {points<=10? 
          <div className="buttons-container">
            <Link to={`/playing/${points}`} className="href-button">
              <button className="button-game">You vs the computer</button>
            </Link>
            <Link to={`/simulation/${points}`} className="href-button">
              <button className="button-game">Computer vs computer</button>
            </Link>
          </div> :
          <p>Value too high, please select a value between 1 and 10!</p>
        }
        <div>
          <label htmlFor="points">How many points to win (between 1 and 10):</label>
          <input type="number" name="points" id="points" min="1" max="10" defaultValue={points} onChange={e =>setPoints(e.target.value)} className="input-games"/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
