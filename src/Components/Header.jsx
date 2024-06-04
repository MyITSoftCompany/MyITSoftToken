import React from "react";
import "../Styles/Header.css"
const Header = () => {

    const tg = window. Telegram.WebApp;
    return(
        <header className="Header">
            <span className="userName">{tg.initDataUnsafe?.user?.username}</span>
        </header>
    )
}
export default Header ;