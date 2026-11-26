import SearchBox from "../SearchBox/SearchBox"
import Favorites from "../Favorites/Favorites";
import "./style.css"

function Curtains({showcurt, sclicked, hclicked, setShowCurt}) {

    return(<>
        <div  className={`curtains ${showcurt ? "show" : ""}`}>
            {!showcurt ? (<h3>Your Dream Ride Awaits.</h3>)
            : hclicked ? (<Favorites/>) :
            sclicked ? <SearchBox setShowCurt={setShowCurt}/> : ""}
        </div>
    </>)

}

export default Curtains;