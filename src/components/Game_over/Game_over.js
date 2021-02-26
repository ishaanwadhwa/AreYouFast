import React, { Component } from 'react'
import './gameover.css';
import {useContext} from 'react';
import {LevelContext} from '../../Context/context';

const Game_over = (props) => {
    const context = useContext(LevelContext);
return(
<div className ='card' style={{width : '20rem', height : '20rem'}}>
    <h3 className ='game_over_heading'> Game Over </h3>
        <div className ='game_over_content'>
            <br />
            <p> Your score is : {props.score}</p> 
            <button className='btn btn-primary' style={{margin : '20px'}} onClick ={() => props.reset(true)}> Play Again </button>
            <button className = 'btn btn-primary' style={{margin : '20px'}} onClick ={() => {context.toggleDisplay(); context.selectLevel(' ')} }> Home </button>
            
            </div>
</div>



) 



}


export default Game_over;