
import cards from "../Data/Cards.json";
import "./index.css"
import {CircleDollarSign} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cards({filters, sorts}) {
    let filteredcards = cards;

    const navigate = useNavigate();
    
    if(filters.company){
        
        filteredcards = filteredcards.filter((e) => e.company == filters.company)
    }

    if(filters.model){
        filteredcards = filteredcards.filter((e) => e.model === filters.model)
    }

    if(!filters.company && !filters.model) {
        filteredcards = cards
    }

    if(sorts) {
        
        if(sorts == "Price"){
            filteredcards.sort((a, b) => a.price - b.price)
        }

        else if(sorts == "Year"){
            filteredcards.sort((a, b) => a.year - b.year)
        }
    }
    
    return(<>
        <div className="cards">
            {(filteredcards || []).map((name, index) => (
                <div key={index} id={name} className="card" onClick={() => navigate("/second", {state: name})}>
                    <h1>{name.company}</h1>
                    <img src={name.image} alt={name.name}></img>
                    <p style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "5px"}}>{name.model} {name.year} {name.price}$ {name.fuel}</p>
                </div>
            ))}
        </div>
    </>)
}

export default Cards;