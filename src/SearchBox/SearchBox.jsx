import { useState } from "react";
import cards from "../Data/Cards.json";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./style.css"

function SearchBox({setShowCurt}) {

    const navigate = useNavigate()
    const [result, setResult] = useState("");

    const newcards = cards.filter(car =>
        car.model.toLowerCase().includes(result.toLowerCase())
    );

    const displaycards = newcards.slice(0, 10);

    return(<>
        <div className="srch-cnt">

            <input
                type="text"
                className="srch-input"
                placeholder="Search your dream car..."
                value={result}
                onChange={(e) => setResult(e.target.value)}
            />

            {!result ? (
                <h2>Search for any Car.</h2>
            ) : (
                <div className="results">

                    {displaycards.length > 0 ? (
                        displaycards.map((car) => (
                            <div
                                key={car.id}
                                className="r-cards"
                                onClick={() => {
                                    navigate("/second", { state: car });
                                    setShowCurt(false);
                                }}
                            >
                                <img src={car.image} alt={car.model}/>

                                <div className="r-info">
                                    <span>{car.company}</span>
                                    <h3>{car.model}</h3>
                                    <p>{car.year}</p>
                                </div>

                                <div className="r-price">
                                    <h3>${car.price.toLocaleString()}</h3>
                                    <ArrowUpRight size={20}/>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p className="no-results">No cars found.</p>
                    )}

                </div>
            )}

        </div>
    </>)
}

export default SearchBox;