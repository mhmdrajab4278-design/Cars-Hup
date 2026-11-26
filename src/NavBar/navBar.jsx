import "./index.css";
import cards from "../Data/Cards.json";
import model from "../Data/Models.json"
import { useState } from "react";
import {CarFront, Heart, Search} from "lucide-react"

function NavBar({setFilters, setShowCurt, showcurt, setSClicked, setHClicked}) {

    const card = [...cards];
    let now = [...model.Toyota, ...model.Nissan];
    console.log(now)
    const [search, setSearch] = useState("");
    const [show, setShow] = useState("");
    console.log(search)

    return(<>
    
        <div className="nav">
            <div className="logo-cnt">
                
                <CarFront className="carlogo" size={"40px"}/>
                <h3 className="cars">Cars</h3>
                <h3 className="hup">Hup</h3>
            </div>
            <div className="nav-btns">
                <Heart onClick={() => {setShowCurt(p => !p)
                    console.log(showcurt)
                    setHClicked(p => !p)
                }}/>
                <Search onClick={() => {setShowCurt(p => !p)
                    setSClicked(p => !p)
                }}/>
            </div>

        </div>
    </>)
}

export default NavBar;