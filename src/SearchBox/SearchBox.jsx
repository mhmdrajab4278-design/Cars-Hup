
import "./style.css"

function SearchBox({results, show, setFilters, sclicked}) {

    return(<>
    <div className="srch-cnt">
        <input type="text" className="srch-input"></input>

        {!results ? (<h2>Search for any Car.</h2>) : ""}

    </div>

    </>)
}

export default SearchBox;