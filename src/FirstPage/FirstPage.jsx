import NavBar from "../NavBar/navBar";
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";
import { useState } from "react";
import "./index.css"

function FirstPage({filters, setFilters, sorts, setSorts}) {

    const [show, setShow] = useState(false);

    return(<>
        <NavBar setFilters={setFilters}/>
        <button onClick={() => setShow(p => !p)} className="show-btn">Filters</button>
        {show && (
            <Filters filters={filters} setFilters={setFilters} sorts={sorts} setSorts={setSorts}/>

        )}
        <Cards filters={filters} sorts={sorts}/>
    </>)

}

export default FirstPage;