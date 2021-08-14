import React from 'react';
import './YourTeam.css';

const YourTeam = (props) => {
    const yourTeam = props.yourTeam;
    const total = yourTeam.reduce((total, plr) => total + plr.baseprice, 0);
    const selectedPlayer = yourTeam.reduce((selectedPlayer, sp) => selectedPlayer + " " + sp.name, []);

    return (
        <div className="your-team">
            <h2>This is your team</h2>
            <p>Players selected: {yourTeam.length}</p>
            <p>Selected players: {selectedPlayer}</p>
            <p>Team budget: $10,00,000</p>
            <p>Total Cost: ${total}</p>
        </div>
    );
};

export default YourTeam;