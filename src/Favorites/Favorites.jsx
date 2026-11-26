
import Cards from "../Data/Cards.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import "./index.css"

function Favorites() {

    const [favorites, setFavorites] = useState(
        () => JSON.parse(localStorage.getItem("favorites")) || []
    );

    const navigate = useNavigate();

    const favoriteCards = Cards.filter(
        (car) => favorites.includes(car.id)
    );

    return (
        <div className="favorites-page">

            <div className="favorites-header">
                <Heart size={25} />
                <div>
                    <h1>My Favorites</h1>
                    <p>{favoriteCards.length} saved cars</p>
                </div>
            </div>

            {favoriteCards.length > 0 ? (

                <div className="cards">
                    {favoriteCards.map((car) => (
                        <article
                            key={car.id}
                            className="car-card"
                            onClick={() => navigate("/second", { state: car })}
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
                                    <h2>{car.model}</h2>
                                </div>

                                <div className="car-divider"></div>

                                <div className="car-bottom">
                                    <h3>
                                        ${car.price.toLocaleString("en-US")}
                                    </h3>

                                    <Heart
                                        size={20}
                                        fill="var(--accent)"
                                        color="var(--accent)"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            ) : (
                <div className="empty-favorites">
                    <Heart size={50} />
                    <h2>No favorites yet</h2>
                    <p>Cars you save will appear here.</p>
                </div>
            )}

        </div>
    );
}

export default Favorites;