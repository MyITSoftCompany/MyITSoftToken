import React, { useEffect } from "react";
import Header from "./Header";

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
            <button onClick={onToggleButton}>Toggle</button>
        </>
    )
}
export default Home;