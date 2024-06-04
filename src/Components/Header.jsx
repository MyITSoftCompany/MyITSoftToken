import React from "react";
import "../Styles/Header.css"
import useTgHook from "../Hooks/useTgHook";

const Header = () => {

    const {user , onClose} = useTgHook
    return(
        <header className="Header">
            <span className="userName">{user?.username}wfdgbfvs</span>
            {/* <button onClick={onClose}>Close</button> */}
        </header>
    )
}
export default Header ;