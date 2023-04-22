import React from "react";

import Searcher from "../../components/Searcher/Searcher";
import Result from "../../components/Result/Result";

import './Search_Page.css';

export default function Search_Page() {
    const [ele,setEl]=React.useState(null);
    return (
        <main className="content">
            <div className="main-body">
                <Searcher ele={ele} setEl={setEl}/>
                <Result ele={ele} setEl={setEl}/>
            </div>
        </main>
    );
}