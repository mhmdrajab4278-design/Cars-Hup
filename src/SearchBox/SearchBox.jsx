

function SearchBox({results, show}) {

    return(<>
        <div className={`searchcustom ${show ? "open" : ""}`}>
            {results ? results.map((result, index) =>
                <div key={index}>{result}</div>) || [] : []}

        </div>
    </>)
}

export default SearchBox;