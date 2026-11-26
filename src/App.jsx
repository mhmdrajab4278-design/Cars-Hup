
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from './FirstPage/FirstPage';
import SecondPage from "./Second-Page/Second-Page";
import {useState} from 'react';

function App() {

    const [filters, setFilters] = useState({
        company: "",
        model: "",
        year: 2020
    })

    
    const [showcurt, setShowCurt] = useState(false);
    const [hclicked, setHClicked] = useState(false);
    const [sclicked, setSClicked] = useState(false);

    const [sorts, setSorts] = useState("")

    console.log(filters)
    console.log(sorts)

    return(<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstPage filters={filters} setFilters={setFilters} sorts={sorts} setSorts={setSorts}  showcurt={showcurt} hclicked={hclicked} sclicked={sclicked} setShowCurt={setShowCurt} setHClicked={setHClicked} setSClicked={setSClicked}/>}></Route>
            <Route path="/second" element={<SecondPage filters={filters} showcurt={showcurt} hclicked={hclicked} sclicked={sclicked} setShowCurt={setShowCurt} setHClicked={setHClicked} setSClicked={setSClicked}></SecondPage>}></Route>
            
        </Routes>
    
    </BrowserRouter>
    </>)

}

export default App
