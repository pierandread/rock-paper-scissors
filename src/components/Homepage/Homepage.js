import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Homepage.css';


function Homepage() {

  const [points, setPoints] = useState(5);

  return (
    <div >
      <p>I'm the homepage </p>
      {points<=10? 
        <div>
          <Link to={`/playing/${points}`}>
            <button>You vs the computer</button>
          </Link>
          <Link to={`/simulation/${points}`}>
            <button>Computer vs computer</button>
          </Link>
          <p>Just sit back and relax!</p>
        </div> :
        <p>Value too high, please select a value between 1 and 10!</p>
      }
      <label htmlFor="points">How many points to win (between 1 and 10):</label>
      <input type="number" name="points" id="points" min="1" max="10" defaultValue={points} onChange={e =>setPoints(e.target.value)}/>
      <p>{points}</p>
    </div>
  );
}

export default Homepage;
