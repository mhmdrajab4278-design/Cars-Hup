

function SearchBox({results, show, setFilters}) {

    return(<>
        <div className={`searchcustom ${show ? "open" : ""}`}>
            {results ? results.map((result, index) =>
                <div key={index} onMouseDown={() => setFilters(c => ({...c, model: result}))}>{index + 1}-{result}</div>) || [] : []}

        </div>
    </>)
}

export default SearchBox;