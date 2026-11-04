
import models from "../Data/Models.json"
import companies from "../data/companies.json";
import "./index.css"

function Filters({filters, setFilters, sorts, setSorts}) {


    function iYear() {
        setFilters(prev => ({...prev, 
            year: prev.year >= 2027 ? prev.year : prev.year + 1
        }))
    }

    function dYear() {
        setFilters(prev => ({...prev, 
            year: prev.year <= 2000 ? prev.year : prev.year - 1
        }))}

    return(<>
        <div>
            <div className="filters">
                <div className="companies">

                <p>Companies</p>
                <select value={filters.company} onChange={(e) => {setFilters((prev) => ({
                    ...prev,
                    company: e.target.value,
                    model: ""
                }));
                }}>
                    <option value={""}>Select a Company</option>
                    {companies.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                </div>
                <div className="model">
                    <p>Model</p>
                    <select value={filters.model} onChange={(e) => setFilters(prev => ({
                        ...prev,
                        model: e.target.value
                    }))}>
                        <option value="">Select a Model!</option>
                        {(models[filters.company] || []).map((name, index) => (
                            <option key={index} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="year">
                    <p>Year</p>
                    <button onClick={iYear}>+</button>
                    <input type="number" value={filters.year} readOnly ></input>
                    <button onClick={dYear}>-</button>
                </div>

                <div className="sort">
                    <p>Sort</p>
                    <select value={sorts} onChange={(e) => setSorts(e.target.value)}>
                        <option value="">How to Sort?</option>
                        <option value={"Year"}>Year</option>
                        <option value={"Price"}>Price</option>
                    </select>
                </div>
            </div>
        </div>
    </>)

}

export default Filters;