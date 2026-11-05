
import CustomSelect from "../CustomSelect/CustomSelectCompany";
import CustomSelectModel from "../CustomSelect/CustomSelectModel";
import CustomSelectSort from "../CustomSelect/CustomSelectSort";
import { useState } from "react";
import "./index.css"

function Filters({filters, setFilters, sorts, setSorts}) {

    const [show, setShow] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const [showSort, setShowSort] = useState(false);

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
                <div className="mm">

                    <div className="companies">

                        <p>Companies</p>
                        <div className="cmpny-slct">
                            <button onClick={() => {setShow(p => !p);
                                setShowModel(false);
                                setShowSort(false);
                            }} className="com-btn">Filter Companies</button>
                            <CustomSelect show={show} filters={filters} setFilters={setFilters}/>
                        </div>

                    </div>
                    <div className="models">
                        <p>Model</p>
                        <div className="mdl-slct">
                            <button onClick={() => {setShowModel(p => !p);
                                setShowSort(false);
                                setShow(false);
                            }} className="mdl-btn">Filter Models</button>
                            <CustomSelectModel filters={filters} show={showModel} setFilters={setFilters}/>
                        </div>

                    </div>

                    <div className="year">
                        <p>Year</p>
                        <button onClick={iYear}>+</button>
                        <input type="number" value={filters.year} readOnly ></input>
                        <button onClick={dYear}>-</button>
                    </div>

                    <div className="sort">
                        <p>Sort</p>
                        <div className="sort-slct">
                            <button onClick={() => {setShowSort(p => !p);
                                setShowModel(false);
                                setShow(false);
                            }} className="sort-btn">Sort Results</button>
                            <CustomSelectSort filters={filters} show={showSort} setFilters={setFilters} sorts={sorts} setSorts={setSorts}/>
                        </div>
                    </div>

                </div>
                <button className="reset" onClick={() => {setFilters(p => ({...p, company: "", model: ""}));
                                                        setSorts(false);
                                                        setShow(false);
                                                        setShowModel(false);
                                                        setShowSort(false)}}>Reset</button>
            </div>
        </div>
    </>)

}

export default Filters;