import React from 'react';
import './YourTeam.css';

const YourTeam = (props) => {
    const yourTeam = props.yourTeam;
    const total = yourTeam.reduce((total, plr) => total + plr.baseprice, 0);
    const selectedPlayer = yourTeam.reduce((selectedPlayer, sp) => selectedPlayer + " " + sp.name, []);

    return (
        <div className="your-team">

            <div class="card">
                <div class="card-header">
                    Your Team
                </div>
                <div class="card-body">
                    <h5 class="card-title">Team players and cost</h5>

                    <p>Players selected: {yourTeam.length}</p>
                    <p>Selected players: {selectedPlayer}</p>
                    <p>Team budget: $10,00,000</p>
                    <p>Total Cost: ${total}</p>
                    <a href="#" class="btn btn-primary">Team Overview</a>
                </div>
            </div>

        </div>
    );
};

export default YourTeam;