
import cards from "../Data/Cards.json";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Fuel, Settings2, ArrowUpRight } from "lucide-react";

function Cards({ filters, sorts }) {
    let filteredcards = [...cards];

    const navigate = useNavigate();

    if (filters.company) {
        filteredcards = filteredcards.filter(
            (e) => e.company === filters.company
        );
    }

    if (filters.model) {
        filteredcards = filteredcards.filter(
            (e) => e.model === filters.model
        );
    }

    if (sorts === "Price") {
        filteredcards.sort((a, b) => b.price - a.price);
    } else if (sorts === "Year") {
        filteredcards.sort((a, b) => b.year - a.year);
    }

    return (
        <div className="cards">
            {filteredcards.map((car) => (
                <article
                    key={car.id}
                    className="car-card"
                    onClick={() =>
                        navigate("/second", { state: car })
                    }
                >
                    <div className="car-image">
                        <span className="car-company">
                            {car.company}
                        </span>

                        <img
                            src={car.image}
                            alt={`${car.company} ${car.model}`}
                        />

                        <span className="car-year">
                            {car.year}
                        </span>
                    </div>

                    <div className="car-info">
                        <div className="car-heading">
                            <div>
                                <h2>{car.model}</h2>
                                <p>{car.company} · {car.year}</p>
                            </div>

                            <ArrowUpRight
                                className="car-arrow"
                                size={22}
                            />
                        </div>

                        <div className="car-divider"></div>

                        <div className="car-specs">
                            <span>
                                <Settings2 size={16} />
                                {car.transmission}
                            </span>

                            <span>
                                <Fuel size={16} />
                                {car.fuel}
                            </span>
                        </div>

                        <div className="car-bottom">
                            <div>
                                <p className="price-label">Starting price</p>
                                <h3>
                                    ${car.price.toLocaleString("en-US")}
                                </h3>
                            </div>

                            <span className="view-details">
                                View details
                            </span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Cards;
