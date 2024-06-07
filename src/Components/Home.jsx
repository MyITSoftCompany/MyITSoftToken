import React, { useEffect } from "react";
import Header from "./Header";
import Canvas from "./Canvas";

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
            {/* <Canvas /> */}
            <button onClick={onToggleButton}>Toggle</button>
        </>
    )
}
export default Home;