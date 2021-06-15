import React, { Component } from 'react';

class MyForm extends Component {
    state = {  
        name: "",
        rememberMe: false
    }
    
    handleChange = (change) => {
        this.setState({ name : change.target.value})
    }

    handleCheck = (event) => {
        this.setState({ rememberMe: event.target.checked })
    }

    render() { 
        return (    
            <div>
                <input value = {this.state.name} onChange={this.handleChange}/>
                {this.state.name}
                <input type = "checkbox" checked = {this.state.rememberMe} onChange = {this.handleCheck}>
                </input>
            </div>
        );
    }
}
 
export default MyForm;