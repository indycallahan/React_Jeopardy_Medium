
import React, { Component } from "react";

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
    }

    handleChange = (event) => {
        let formData = this.state.formData;
        // brackets are used to let the program know you want any of the three properties to be targeted.
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }

    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        })
    }

    render() {
        //show the thank you message if the form has been submitted
        // this if or is called conditional rendering.
        if (this.state.submitted) {
            return (
                <div>
                    Thank you, {this.state.formData.firstName}, for submitting the form <br />
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="formData">
                        <label>First Name:</label>
                        <input onChange={this.handleChange} 
                        type="text" 
                        name="firstName" 
                        value={this.state.formData.firstName} />
                    </div>
                    <div className ="formData">
                        <label>Last Name:</label>
                        <input onChange={this.handleChange} 
                        type="text" 
                        name="lastName" 
                        value={this.state.formData.lastName} />
                    </div>
                    <div className ="formData">
                        <label>Email:</label>
                        {/* you can add a required trait */}
                        <input required onChange={this.handleChange} 
                        type="email" 
                        name="Email" 
                        value={this.state.formData.Email} />
                    </div>
                    {/* as you type, you create a virtual DOM.  State constantly updates with each keystroke. */}

                    {/* you can add an email field or even a phone and then you have to add it above in formData */}
                    <button>Submit Form</button> <br />
                    {this.state.formData.firstName}
                    <br />
                    {this.state.formData.lastName}
                </form>
            </div>
        );
    }
}

export default Contact;