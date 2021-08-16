import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const Players = (props) => {
    //console.log(props);
    const {image, name, baseprice, stats, team} = props.players;
    return (
        <div className="players">
            <div>
                <img className="player-image" src={image} alt="" />
            </div>
            <div className="name-price-btn">
                <h2 className="player-name">{name}</h2>
                <h6>Stats: {stats}</h6>
                <h6>Team: {team}</h6>
                <h4>Base Price: ${baseprice}</h4>

                <button 
                    className="add-button" onClick={() => props.handleAddPlayer(props.players)}>
                        <FontAwesomeIcon icon={faPlusSquare}/>  Add to your team
                </button>

            </div>
            
        </div>
    );
};

export default Players;