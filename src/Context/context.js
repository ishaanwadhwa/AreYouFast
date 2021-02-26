import React, { useState, createContext } from 'react'

export const LevelContext = createContext();

export const LevelProvider = ({children}) =>   {
    const [level,setLevel] = useState(' ');
    const [selected,setSelected] = useState(false);

    const toggleDisplay = () => { setTimeout(setSelected(!selected), '1500')  }
    const selectLevel = (value) =>  setLevel(value);




return (
<LevelContext.Provider value ={{level, selectLevel, selected, toggleDisplay}}>
            {children}
</LevelContext.Provider>            



)

}

