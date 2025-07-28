
import React, { useState } from 'react';



// used to specify the types of the parameters
type shared_props = {
    shar : number;
    onClick: () => void;
}

function SharedButton({shar, onClick}: shared_props){
    
    function click(){
        onClick();
    }  
    // const flag = false; 
    return (
        <>
            <button onClick={click}>
                shared button:  {shar} times
            </button>
        </>
    
    )
}

//className="relative z-10 w-full bg-black bg-opacity-50 py-8 border-t border-green-400"

export default SharedButton;