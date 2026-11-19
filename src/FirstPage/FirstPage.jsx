import NavBar from "../NavBar/navBar";
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";
import Favorites from "../Favorites/Favorites";
import { useState } from "react";
import "./index.css"

function FirstPage({filters, setFilters, sorts, setSorts}) {

    const [show, setShow] = useState(false);
    const [showFav, setShowFav] = useState(false);

    return(<>
        <NavBar setFilters={setFilters}/>
        <Cards filters={filters} sorts={sorts}/>
    </>)

}

export default FirstPage;