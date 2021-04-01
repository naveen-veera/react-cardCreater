import React from "react";
import Button from "../Button/Button";
import classes from "./Card.module.css";

const Card = (props) => {

    return (
        <div className={classes.Card}>
            <div className={classes.ImageContainer}>
                <img data-testid="imageurl" className={classes.Img} src={props.url} />
            </div>
            <p data-testid="cardname">Name : <span>{props.name}</span></p>
            <p data-testid="cardemail">Email : <span>{props.email}</span></p>
            <p data-testid="contactnumber">Contact number : <span>{props.contactNumber}</span></p>
            <div>
                <Button id="delete" type="text" click={props.remove}>Delete</Button>
            </div>
        </div>
    )
}

export default Card;