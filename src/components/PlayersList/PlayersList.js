import React, {useState, useEffect} from 'react';
import playersData from '../../data/data.json'
import Players from '../Players/Players';
import YourTeam from '../YourTeam/YourTeam';
import './PlayersList.css';

const PlayersList = () => {
  const [players, setPlayers] = useState([]);
  const [yourTeam, setYourTeam] = useState([]);

  const handleAddPlayer = (players) =>{
    const newYourTeam = [...yourTeam, players];
    setYourTeam(newYourTeam);
  }

  useEffect(() => {
    setPlayers(playersData);
    console.log(playersData);
  }, [])

    return (

        <div>
          <h1 className="heading">Make your own team and participate in the RCPL</h1>
          <div className="players-list-container">
            <div className="players-container">
              {
                players.map(pl => <Players 
                  handleAddPlayer = {handleAddPlayer}
                  players={pl}
                  ></Players>)
              }
            </div>
            <div className="your-team-container">
                <YourTeam yourTeam={yourTeam}></YourTeam>
            </div>
          </div>
        </div>
    );
};

export default PlayersList;