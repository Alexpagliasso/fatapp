import React from 'react';
import './Players.scss';

const Players = ({ name }) => {

    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    )
}

export default Players