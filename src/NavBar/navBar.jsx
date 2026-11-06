import "./index.css";
import {Search} from "lucide-react";
import SearchBox from "../SearchBox/SearchBox";
import cards from "../Data/Cards.json";
import model from "../Data/Models.json"
import { useState } from "react";

function NavBar() {

    const card = [...cards];
    let models = [...model.Toyota] + [...model.Nissan];
    console.log(models);
    const now = models.split(",");
    console.log(now)
    const [search, setSearch] = useState("");
    const [show, setShow] = useState("");
    console.log(search)

    let results = now.filter((name) => name.toLowerCase().includes([search.trim().toLowerCase()]));

    if(!search){
        results = false
    }

    console.log(results)

    return(<>
    
        <div className="nav">
            <div className="search-cnt">

                <div className="searchbox">
                    <input className="search" onFocus={() => setShow(true)} onBlur={() => setShow(false)} onChange={(e) => {setSearch(() => (e.target.value.toLowerCase().trim()));}}></input>
                    <SearchBox card={card} results={results} show={show}/>
                </div>
                <Search/>
            </div>

            <div className="nav-category">

                <p>Home</p>
                <p>Location</p>
                <p>Contact</p>
            </div>
        </div>
    </>)
}

export default NavBar;