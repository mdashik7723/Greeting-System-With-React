import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return(

        <Routes>
                <Route path = "/" component = {<Home/>}/>
            <Route path = "/about" component = {<About/>}/>
            <Route path = "/service" component = {<Service/>}/>
            <Route path = "/contact" component = {<Contact/>}/>

        </Routes>

    )
}

export default App;
