import React from 'react';
import './Players.scss';

const Players = ({ name, image }) => {

    return (
        <div className="card">
            <div className="img-box">
                <img alt={name} src={image} />
            </div>
            <div className="content">
                <div className="details">
                    <h2>{name}</h2>
                </div>
            </div>
        </div>



    )
}

export default Players