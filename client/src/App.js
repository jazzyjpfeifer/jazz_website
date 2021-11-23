import './App.scss';
import TopNavbar from "./components/TopNavbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Biography from "./components/Biography";
import "./App.scss";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import GigsContainer from "./components/GigsContainer";
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(response => setData(response.data))
        console.log(data)
    })


        return (
            <div className='App' id="/">
                <TopNavbar/>
                <Hero/>
                <ScrollButton/>
                <Biography/>
                <GigsContainer/>
                <Resources/>
                <ContactForm/>
                <Footer/>
            </div>
        );
}

    export default App;
