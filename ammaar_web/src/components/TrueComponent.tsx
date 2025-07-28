
import React, { useState } from 'react';


function TrueComponent(){
    const [count, setCount] = useState(0);


    // each component gets it's own state variable
    function handleClick(){
        // alert("you clicked the true button!");
        // set update to + 2 to the count
        setCount(count + 2);
    };
    // const flag = false; 
    return (
        <>
            <div className='flex items-center rounded-lg'>
                <h1 className='text-green-500 '>I'm True!! </h1>  
                <button onClick={handleClick}>True Button with count {count}</button>
            </div>
        </>
    
    )
}

//className="relative z-10 w-full bg-black bg-opacity-50 py-8 border-t border-green-400"

export default TrueComponent;