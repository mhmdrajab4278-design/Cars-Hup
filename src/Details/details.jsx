

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {Fuel, Zap, Gauge, DoorClosed, RulerDimensionLine} from "lucide-react";
import "./index.css";

function Details() {

    const [favorite, setFavorite] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
    console.log(favorite)

    const location = useLocation();
    const car = location.state;

    useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
    }, [favorite]);

    return(<>
        <div className="cnt">

            <button className={`heart ${favorite.includes(car.id) ? "selected" : ""}`} onClick={() => {
                    if(!favorite.includes(car.id)){
                        setFavorite(p => [...p, car.id])
                    } else if(favorite.includes(car.id)){
                        setFavorite(prev => prev.filter(favid => favid !== car.id))
                    }
                    /*JSON.stringify(localStorage.setItem("favorites", favorite))*/
            }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart preview-icon"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg></button>

            <h1 className="car-nm">{car.company} {car.model}</h1>
            <div className="dtl-bg-cnt">

                <div className="dtl-cnt">
                    <p>{car.details.fuelTankCapacity}</p>
                    <Fuel style={{marginLeft: "5px"}}/>
                </div>

                <div className="dtl-cnt">
                    <p>{car.details.horsepower}</p>
                    <Zap style={{marginLeft: "5px"}}/>
                </div>
                
                <div className="dtl-cnt">
                    <p>{car.details.maxSpeed}</p>
                    <Gauge style={{marginLeft: "5px"}}/>
                </div>
                
                <div className="dtl-cnt">
                    <p>{car.details.doors}</p>
                    <DoorClosed style={{marginLeft: "5px"}}/>
                </div>
                
                <div className="dtl-cnt">
                    <p>{car.details.length}</p>
                    <RulerDimensionLine style={{marginLeft: "5px"}}/>
                </div>
                
                <div className="dtl-cnt">
                    <p>{car.details.width}</p>
                    <RulerDimensionLine style={{marginLeft: "5px"}}/>
                </div>
            </div>

            <div className="sfty">
                <h2>Safety Features</h2>
                <ol>
                    {car.details.safetyFeatures.map((name, index) => (<li key={index}>{name}</li>) )}
                </ol>
            </div>

            <button className="btn-price">Just For {car.price}$</button>

        </div>
    </>)
}

export default Details;