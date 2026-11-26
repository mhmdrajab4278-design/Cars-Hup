import NavBar from "../NavBar/navBar";
import Cards from "../Cards/Cards";
import Curtains from "../Curtains/Curtains";
import { useState } from "react";
import cards from "../Data/Cards.json";
import model from "../Data/Models.json"
import "./index.css"

function FirstPage({filters, setFilters, sorts}) {
    const card = [...cards];
    let now = [...model.Toyota, ...model.Nissan];
    console.log(now)
    const [search, setSearch] = useState("");
    const [show, setShow] = useState("");
    const [showcurt, setShowCurt] = useState(false);
    const [hclicked, setHClicked] = useState(false);
    const [homeclicked, setHomeClicked] = useState(false);
    const [sclicked, setSClicked] = useState(false);

    let results = now.filter((name) => name.toLowerCase().includes([search.trim().toLowerCase()]));

    if(!search){
        results = false
    }

    return(<>
        <NavBar setFilters={setFilters} showcurt={showcurt} setShowCurt={setShowCurt} setHClicked={setHClicked} setSClicked={setSClicked}/>
        <Cards filters={filters} sorts={sorts}/>
        <Curtains showcurt={showcurt} hclicked={hclicked} sclicked={sclicked}/>
    </>)

}

export default FirstPage;