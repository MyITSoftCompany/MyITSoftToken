import React from "react";
import "../Styles/Header.css"

function Header () {
    
    const tg = window.Telegram.WebApp

    const onClose = () =>{
        tg.close()
    }

    return(
        <header className="Header">
            <span className="userName">{tg.initDataUnsafe?.user?.username}</span>
            <button onClick={onClose} className="button">X</button>
        </header>
    )
}
export default Header ;