

import { useLocation } from "react-router-dom";
import {Fuel, Zap, Gauge, DoorClosed, RulerDimensionLine} from "lucide-react";
import "./index.css";

function Details() {

    const location = useLocation();
    const car = location.state;

    return(<>
        <div className="cnt">
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