import React from "react";
import "../Styles/Header.css"
import { useTgHook } from "../Hooks/useTgHook";
const Header = () => {

    const {user , onClose} = useTgHook
    console.log(ures)
    return(
        <header className="Header">
            <span className="userName">{user?.username}</span>
            {/* <button onClick={onClose}>Close</button> */}
        </header>
    )
}
export default Header ;