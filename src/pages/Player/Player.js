import React from "react";
import './Player.css';
import ReactPlayer from 'react-player'

function Player() {
    return (
        <div className="player">
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                height={'100vh'}
                width={'100vw'} 
            />
        </div>
    )
}

export default Player;