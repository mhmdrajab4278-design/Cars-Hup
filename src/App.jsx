
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from './FirstPage/FirstPage';
import SecondPage from "./Second-Page/Second-Page";
import React, {useState} from 'react';

function App() {

    const [filters, setFilters] = useState({
        company: "",
        model: "",
        year: 2020
    })

    const [sorts, setSorts] = useState("")

    console.log(filters)
    console.log(sorts)

    return(<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstPage filters={filters} setFilters={setFilters} sorts={sorts} setSorts={setSorts}/>}></Route>
            <Route path="/second" element={<SecondPage filters={filters}></SecondPage>}></Route>
            
        </Routes>
    
    </BrowserRouter>
    </>)

}

export default App
