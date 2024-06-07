import React, { useEffect } from "react";
import Header from "./Header";
import Canvas from "./Canvas";
import Nav from "./nav";

const tg = window.Telegram.WebApp

function Home(){

    const onToggleButton = () =>{
        if(tg.MainButton.isVisivle){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }

    useEffect(() => {
        tg.ready();
      }, [ ])

    return(
        <>
            <Header />
            <Nav />
            {/* <Canvas /> */}
            <button onClick={onToggleButton}>Toggle</button>
        </>
    )
}
export default Home;