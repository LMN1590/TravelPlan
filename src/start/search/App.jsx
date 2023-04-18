import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Searcher from "../../components/Searcher/Searcher";
import Result from "../../components/Result/Result";

import './App.css';

export default function App() {
    const [ele,setEl]=React.useState(null);
    return (
        <main className="content">
            <NavBar />
            <div className="main-body">
                <Searcher ele={ele} setEl={setEl}/>
                <Result ele={ele} setEl={setEl}/>
            </div>
        </main>
    );
}