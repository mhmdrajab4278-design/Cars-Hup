
import './index.css'



function CustomSelectSort({show, setSorts}) {

    return(<>
        <div className={`cstm-sort-slct ${show ? "open" : ""}`}>
            <div onClick={() => setSorts("Year")}>
                Year
            </div>
            <div onClick={() => setSorts("Price")}>
                Price
            </div>
        </div>
    </>)
}

export default CustomSelectSort;