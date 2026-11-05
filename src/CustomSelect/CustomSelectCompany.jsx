
import companies from "../Data/Companies.json";
import './index.css'



function CustomSelect({show, setFilters}) {

    return(<>
        <div className={`cstm-slct ${show ? "open" : ""}`}>
            {companies.map((name, index) => (
                <div key={index} onClick={() => setFilters(c => ({...c, company: name}))}>
                    {name}
                </div>
            ))}
        </div>
    </>)
}

export default CustomSelect;