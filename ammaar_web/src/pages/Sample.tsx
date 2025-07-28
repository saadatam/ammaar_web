import SampleComponent from "../components/SampleComponent"
import SharedButton from "../components/SharedButton"
import Footer from "../components/Footer";
import { useState } from "react"


export default function Sample(){

    function sharedClick(){
        setShar(shar+1);
    }
    // testing shared button 
    const [shar, setShar] = useState(0);


    return (
        <>
            <SampleComponent/>
            <Footer/>
        </>

    )
}