import { useState } from "react";
import Favorites from "../Favorites/Favorites";
import "./style.css"

function Curtains({showcurt, sclicked, hclicked}) {

    return(<>
        <div  className={`curtains ${showcurt ? "show" : ""}`}>
            {!showcurt ? (<h3>Your Dream Ride Awaits.</h3>)
            : hclicked ? (<Favorites/>) : 
            ""}
        </div>
    </>)

}

export default Curtains;