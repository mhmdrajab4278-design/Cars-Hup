import "./index.css"
import {Search} from "lucide-react"

function NavBar() {

    return(<>
    
        <div className="nav">
            <div className="search-cnt">

                <input className="search"></input>
                <Search />
            </div>

            <div className="nav-category">

                <p>Home Page</p>
                <p>Services</p>
                <p>Location</p>
                <p>Contact Us</p>
            </div>
        </div>
    </>)
}

export default NavBar;