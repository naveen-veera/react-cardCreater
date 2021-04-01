import React from "react";
import classes from "./Button.module.css";

const Button =props => {

    return (
        <button data-testid={props.id} disabled={props.disabled} onClick={props.click} className={classes.Button}>{props.children}</button>
    )
}

export default Button;