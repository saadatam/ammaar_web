
import React, { useState } from 'react';

import FalseComponent from './FalseComponent';
import TrueComponent from './TrueComponent';
import SharedButton from './SharedButton';

function SampleComponent(){
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    let flag = true; 

    // state variable. in this case, int of 0 is initialized for the state variable of "count"
    // setCount is the update function. you pass in the new value you want to set the state variable to
    const [count, setCount] = useState(0); // init to 0, can be either a string or other ADT
    const [incount, setIncount] = useState(0); // init to 0, can be either a string or other ADT
    // state variables are hooks 
    // anything usages starting with "use" are called hooks. Can create own hooks by using existing one
    // always call state variables outside of scope. aka at the top of components
    // for if-statement is required, then declare state variable in a separate component 
    // and conditionally (if-statement here) render the  components. as show below.

    const MySpot = {
        location: "SanFran",
        url: "/photography/NYC12.jpeg",
        dimensions: 400
    };


    function handleClick(){
        // alert("you clicked me!");
        // updates respective components state variables
        setCount(count + 2);
    };
    function handleInCount(){
        // alert("you clicked me!");
        // updates respective components state variables
        setIncount(incount + 2);
    };

    const MySpots = [
        {name: "Cherry Hill Village", location: "Canton MI", id: 1, isFavorite: true},
        {name: "Golden Gate Bridge", location: "San Francisco, CA", id: 2, isFavorite: true},
        {name: "Wayne County Jail", location: "", id: 3, isFavorite: false},
        {name: "H-Mart", location: "Chicago, IL", id: 4, isFavorite: true},
    ]
    const list = MySpots.map( loc =>
        // id is required fro mapping and indexing 
        <li 
            key={loc.id}
            style={{
                color: loc.isFavorite ? 'lightgreen' : 'red'
            }}
            > 
            <span>{loc.name} is located in {loc.location}</span>
        </li>
    );

    let cond; 
    if (flag){
        cond = <TrueComponent/>}
    else {
        cond = <FalseComponent/>}


    // return
    return (
        <div className=''>
            <h1>Hello this is a samle {currentTime}</h1>
            <h1>Hello this is a samle {currentTime}</h1>
            <h1>Hello this is a samle {currentTime}</h1>
            <h1>Hello this is a samle {MySpot.location}</h1>
            <h1
            // this is how to declare a css class for a tag
            className="relative bg-blue-800 hover:bg-red-500 button:active:bg-green-500"
            >Hello this is a samle {currentTime}
            </h1>
            <img
                src= {MySpot.url}
                alt={'picture of ' + MySpot.location}
                className='flex center' 
                style={{
                    width: MySpot.dimensions,
                    height: MySpot.dimensions
                }}
            />

            {/* independent shared state */}
            {cond}
            {cond}

            
            {flag ? 
            (<TrueComponent/>) : 
            (<FalseComponent/>)
            }

            <div id='inlineConditional'>
                {flag && <h1>true</h1>}
            </div>

            <h2> list mapping</h2>
            <div id='listMap' className="flex grid mb-4">
                <ul>
                    {list}
                </ul>
            </div>

            <h1>parent variable </h1>
            <button
                id='singleState'
                className='hover:bg-purple-400 active:bg-sky-500 active:outline-green-500'
                onClick={handleInCount}>
                    state var: {incount}
            </button>

            <h1>shared buttons</h1>
            <SharedButton shar={count} onClick={handleClick}/>
            <SharedButton shar={count} onClick={handleClick}/>
            
        </div>
    )
}

//className="relative z-10 w-full bg-black bg-opacity-50 py-8 border-t border-green-400"

export default SampleComponent;