import React from "react";
import classes from "./Input.module.css";

const Input = props => {

    return (
        <div className={classes.Container}>
            <label className={classes.Label} htmlFor={props.name}>{props.label}</label>
            <input data-testid={props.id} type={props.type} className={classes.Input} onChange={(event) => props.change(props.name, event)} value={props.value} id={props.name} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;