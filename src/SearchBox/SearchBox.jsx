

function SearchBox({results, show, setFilters, sclicked}) {

    return(<>
        <input type="text"></input>
        <div className={`searchcustom ${sclicked ? "open" : ""}`}>
            {results ? results.map((result, index) =>
                <div key={index} onMouseDown={() => setFilters(c => ({...c, model: result}))}>{index + 1}-{result}</div>) || [] : []}

        </div>
    </>)
}

export default SearchBox;