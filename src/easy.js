import React, { useContext } from 'react';
import Block from './components/easyblock';
import './easy.css';
import LevelButton from './components/Level_selector/button';
import {LevelContext} from './Context/context';

function EasyGame() {
    const context = useContext(LevelContext);

    return( 
        <div className='gameborder'>
                {context.selected ? <Block /> : <LevelButton/> }
            
        </div>
    )
} 

export default EasyGame;