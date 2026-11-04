
import NavBar from "../NavBar/navBar";
import { useLocation } from "react-router-dom";
import "./index.css";
import Details from "../Details/details";

function SecondPage({filters}) {

    const location = useLocation()

    console.log(location.state)

    const state = location.state;

    console.log(filters)

    return(<>
        <NavBar/>
        <img src={state.image}></img>
        <Details/>
    </>)
}

export default SecondPage;