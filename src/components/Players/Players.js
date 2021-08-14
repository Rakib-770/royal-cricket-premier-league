import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    //console.log(props);
    const {image, name, baseprice} = props.players;
    return (
        <div className="players">
            <div>
                <img className="player-image" src={image} alt="" />
            </div>
            <div className="name-price-btn">
                <h2 className="player-name">{name}</h2>
                <p>Base Price: ${baseprice}</p>

                <button 
                    className="add-button" onClick={() => props.handleAddPlayer(props.players)}>
                        <FontAwesomeIcon icon={faPlusSquare}/>  Add to your team
                </button>

            </div>
            
        </div>
    );
};

export default Players;