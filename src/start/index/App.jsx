import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import Picture from "../../components/Picture/Picture";

export default function App() {
    const end=3;
    const index=Math.floor(Math.random()*end)+1
    const [link,setLink]=React.useState('');
    React.useEffect(()=>{
        setLink(`/RandPic/travel${index}.jpg`);
    },[])
    return (
        <main className="content">
            <NavBar />
            <Menu />
            <Picture linkin={link}/>
            {/*<Ranking/>
            <Ranking/>
            <Footer/>*/}
        </main>
    );
}