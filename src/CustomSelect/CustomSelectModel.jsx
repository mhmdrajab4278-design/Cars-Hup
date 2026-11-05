


import models from "../Data/Models.json";
import './index.css';



function CustomSelectModel({filters, show, setFilters}) {

    console.log(filters.company)

    return(<>
        <div className={`cstm-mdl-slct ${show ? "open" : ""}`}>
            {(filters.company ? models[filters.company] || [] : []).map((name, index) => (
                <div key={index} onClick={() => setFilters(c => ({...c, model: name}))}>
                    {name}
                </div>
            ))}
        </div>
    </>)
}

export default CustomSelectModel;