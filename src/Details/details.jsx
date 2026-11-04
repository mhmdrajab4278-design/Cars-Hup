


let car = {
        "id": 1,
        "company": "Toyota",
        "model": "Corolla",
        "year": 2019,
        "price": 14000,
        "image": "/imgs/Corolla.png",
        "transmission": "CVT",
        "fuel": "Petrol",
        "details": {
            "engineDisplacement": "2.0 L",
            "engineType": "Naturally aspirated inline",
            "cylinders": 4,
            "horsepower": "169 hp",
            "torque": "205 Nm",
            "maxSpeed": "190 km/h",
            "zeroTo100": "8.5 seconds",
            "fuelTankCapacity": "50 L",
            "combinedFuelConsumption": "6.8 L/100 km",
            "drivetrain": "FWD",
            "seatingCapacity": 5,
            "doors": 4,
            "bodyType": "Sedan",
            "length": "4630 mm",
            "width": "1780 mm",
            "height": "1435 mm",
            "curbWeight": "1370 kg",
            "wheelbase": "2700 mm",
            "cargoCapacity": "470 L",
            "safetyFeatures": [
                "ABS",
                "Electronic stability control",
                "Traction control",
                "Multiple airbags",
                "Rear-view camera"
            ],
            "specificationNote": "Representative model-level estimate; exact specifications vary by year, market and trim."
        }
    }

import { useLocation } from "react-router-dom";
import {Fuel, Zap, Gauge, DoorClosed, RulerDimensionLine} from "lucide-react";
import "./index.css";

function Details({filters}) {

    const location = useLocation();
    const car = location.state;

    return(<>
        <div className="cnt">
            <h1 className="car-nm">{car.company} {car.model}</h1>
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
    </>)

}

export default Details;