import React, { Component } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./Form.module.css";


class Form extends Component {

    state = {
        crendentials : {
            name : '',
            email : '',
            contactNo : '',
            imageURL : ''
        }
    }

    resetState = () => {
        this.setState({
            crendentials : {
                name : '',
                email : '',
                contactNo : '',
                imageURL : ''
            },
            enableCreate : false
        });
    }

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        this.props.add(this.state);
        this.resetState();
        
    }

    enableCreateHandler = () => {
        if(this.state.crendentials.name !== '' && this.state.crendentials.email !== '' && this.state.crendentials.contactNo !== '' && this.state.crendentials.imageURL !== '' ) {
            this.setState({enableCreate : true})
        }
    }

    onChangeHandler = async (inputName, e) => {

        const newState = {...this.state};
        switch (inputName) {
            case 'name':
                newState['name'] = e.target.value;
                break;
            case 'email':
                newState['email'] = e.target.value;
                break;
            case 'contactNo':
                newState['contactNo'] = e.target.value;
                break;
            case 'image':
                newState['imageURL'] = e.target.value;
                
                break;
            default:
                break;
        };
        this.setState(newState, () => this.enableCreateHandler());
        
    }

    render() {
        
        return (
                <form className={classes.Container} onSubmit={this.onFormSubmitHandler} >
                    <Input id="name" type="text" name="name" label='Please Enter your name' placeholder='Full Name' change={this.onChangeHandler} value={this.state.name} />
                    <Input id="email" type="email" name="email" label='Please Enter your email' placeholder='Email Address' change={this.onChangeHandler} value={this.state.email} />
                    <Input id="contactno" type="number" name='contactNo' label='Enter your Contact Number' placeholder='Contact Number' change={this.onChangeHandler} value={this.state.contactNo} />
                    <Input id="image" type="text" name="image" label='Paste your profile picture URL' placeholder="Image URL" change={this.onChangeHandler} value={this.state.imageURL} />
                    <Button id="create" type='submit' disabled={false}>Create Card</Button>
                </form>
        )
    }
}

export default Form;