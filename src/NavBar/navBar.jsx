import "./index.css";
import cards from "../Data/Cards.json";
import model from "../Data/Models.json"
import { useState } from "react";
import {CarFront, Heart, Search, HomeIcon, Home} from "lucide-react";
import { useNavigate } from "react-router-dom";

function NavBar({setFilters, sclicked, hclicked, setShowCurt, showcurt, setSClicked, setHClicked}) {

    const card = [...cards];
    let now = [...model.Toyota, ...model.Nissan];
    console.log(now)
    const navigate = useNavigate()
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
                <Home onClick={() => navigate("/")}/>
                <Heart onClick={() => {
                    
                    if(showcurt && hclicked)
                    {

                        setShowCurt(false)
                        setHClicked(false)
                    } else{
                        setShowCurt(true)
                        setHClicked(true)
                        setSClicked(false)
                    }
                }}/>
                <Search onClick={() => {
                    
                    if(showcurt && sclicked)
                    {

                        setShowCurt(false)
                        setSClicked(false)
                    } else{
                        setShowCurt(true)
                        setSClicked(true)
                        setHClicked(false)
                    }
                }}/>
            </div>

        </div>
    </>)
}

export default NavBar;