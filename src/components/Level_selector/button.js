import React, { useState, useContext } from 'react'
//import { FaDivide } from 'react-icons/fa'
import './button.css';
import '../navbar.css';
import { LevelContext } from '../../Context/context'

function LevelButton() {
    const context = useContext(LevelContext);
   
    const [hovered, setHovered] = useState(0);
    const toggleHover = (x) => {
        setHovered(x);
    }
    /*function class_switcher(hovered) {
        console.log('i entered functlevel-easy')
    case 1 : return('btn-level btn-changer')    
    case 2 : return('btn-level btn-changer-2')s
    default : return('btn-level')
    }}*/
    function class_switcher(hovered) {
        if (hovered == 0)
            return ('btn-level btn-level-easy')
        else if (hovered == 1)
            return ('btn-level btn-level-changer')
        else if (hovered == 2)
            return ('btn-level btn-level-changer-2')
    }
 
console.log(context.level)
    return (
        <div className = 'Select-level'>
                 <nav class="navbar navbar-light bg-light">
          <div class="container-fluid" style={{textAlign : 'center'}}>
            <a class="navbar-brand" href="#">
        
            <h3 className = "nav-text">Are you fast?</h3> 
            </a>
          </div>
        </nav>
            <button className={class_switcher(hovered)} onClick ={ () => {context.selectLevel('easy');  context.toggleDisplay() }}> </button>
            <button className={class_switcher(hovered)} onMouseEnter={() => toggleHover(1)} onMouseLeave={() => toggleHover(0)} onClick ={ () => {context.selectLevel('medium');  context.toggleDisplay() }}>  </button>
            <button className='btn-level btn-level-hard' onMouseEnter={() => toggleHover(2)} onMouseLeave={() => toggleHover(0)} onClick ={() => {context.selectLevel('hard'); context.toggleDisplay() }}> </button>
        </div>
    )

}

export default LevelButton;