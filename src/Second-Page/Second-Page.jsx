
import NavBar from "../NavBar/navBar";
import Curtains from "../Curtains/Curtains";
import { useLocation } from "react-router-dom";
import "./index.css";
import Details from "../Details/details";

function SecondPage({filters, showcurt, hclicked, sclicked, setShowCurt, setHClicked, setSClicked}) {

    const location = useLocation()

    console.log(location.state)

    const state = location.state;

    console.log(filters)

    return(<>
        <NavBar
            showcurt={showcurt} hclicked={hclicked} sclicked={sclicked}
            setShowCurt={setShowCurt} setHClicked={setHClicked} setSClicked={setSClicked}
        />
        <img src={state.image}></img>
        <Details/>
        <Curtains
            showcurt={showcurt} hclicked={hclicked} sclicked={sclicked}
            setShowCurt={setShowCurt} setHClicked={setHClicked} setSClicked={setSClicked}
        />
    </>)
}

export default SecondPage;