import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import Picture from "../../components/Picture/Picture";
import Ranking from "../../components/Ranking/Ranking";
import Footer from "../../components/Footer/Footer";

export default function App() {
    const end=3;
    const index=Math.floor(Math.random()*end)+1;
    const [link,setLink]=React.useState('');
    React.useEffect(()=>{
        setLink(`/RandPic/travel${index}.jpg`);
    },[])

    const countryRank='countries';
    const actRank='activities';
    return (
        <main className="content">
            <NavBar />
            <Menu />
            <Picture linkin={link}/>
            <Ranking src={countryRank}/>
            <Ranking src={actRank}/>
            <Footer/>
        </main>
    );
}