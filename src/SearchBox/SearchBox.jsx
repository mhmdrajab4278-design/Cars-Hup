import { useState } from "react";
import cards from "../Data/Cards.json";
import { useNavigate } from "react-router-dom";
import "./style.css"

function SearchBox({setShowCurt}) {

    const navigate = useNavigate()

    const [result, setResult] = useState("");

    const newcards = cards.filter(car =>
        car.model.toLowerCase().includes(result.toLowerCase())
    );

    const dispaycards = newcards.slice(0, 10)

    console.log(newcards)

    return(<>
    <div className="srch-cnt">
        <input type="text" className="srch-input" onChange={(e) => {setResult(e.target.value)}}></input>

        {!result ? (<h2>Search for any Car.</h2>) : 
        (<div className="results">{dispaycards.map((name, index) => (
            <div key={index} className="r-cards" onClick={() => {navigate("/second", { state: name })
            setShowCurt(false)}}>
                {name.company}
                {name.model}
                </div>
        ))}</div>)}

    </div>

    </>)
}

export default SearchBox;