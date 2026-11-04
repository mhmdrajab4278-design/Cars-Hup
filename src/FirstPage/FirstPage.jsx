import NavBar from "../NavBar/navBar";
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";

function FirstPage({filters, setFilters, sorts, setSorts}) {

    return(<>
        <NavBar/>
        <Filters filters={filters} setFilters={setFilters} sorts={sorts} setSorts={setSorts}/>
        <Cards filters={filters} sorts={sorts}/>
    </>)

}

export default FirstPage;