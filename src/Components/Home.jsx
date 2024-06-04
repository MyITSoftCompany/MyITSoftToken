import React from "react";
import useTgHook from "../Hooks/useTgHook";
import Header from "./Header";

function Home(){
    const {onToggleButton , tg} = useTgHook

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