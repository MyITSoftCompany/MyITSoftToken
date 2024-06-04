import React from "react";
import "../../Styles/Buttons/Buttons.css"
const Button = (props) => {
    return(
        <button {...props} className={"button" + props.className}/>
    )
}
export default Button;