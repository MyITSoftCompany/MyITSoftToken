import React from "react";
import "../Styles/Header.css"
const Header = (props) => {

    const tg = window. Telegram.WebApp;
    const onClose = () => {
        tg. close ()
    }
    return(
        <header className="Header">
            <button>Close</button>
            <span className="userName">{tg.initDataUnsafe?.user?.username}</span>
        </header>
    )
}
export default Header ;