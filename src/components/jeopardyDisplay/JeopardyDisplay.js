import React from 'react';

function JeopardyDisplay(props) {
    

    if (props.data.category) {
        return (
            <div>
                <table className="jeopardyTable">
                    <tbody>
                        <tr>
                            <td>Category:</td>
                            <td>{props.data.category.title}</td>
                        </tr>
                        <tr>
                            <td>Question:</td>
                            <td>{props.data.question}</td>
                        </tr>

                        <tr>
                            <td>Point Value:</td>
                            <td>{props.data.value}</td>
                        </tr>

                        <tr>
                            <td>Score:</td>
                            <td>{props.score}</td>
                        </tr>
                    </tbody>


                </table>
                <br />


                <form onSubmit={props.handleSubmit}>
                    <div className="formData">
                        <label>What is ...?</label>
                        <input onChange={props.handleChange}
                            type="text" name="answer"
                        // value={this.state.data.answer} 
                        />
                    </div>



                    <button>Submit Answer</button> <br />

                    {/* {this.state.data.answer} */}
                    <br />
                    {/* {this.state.formData.lastName} */}
                </form>



            </div>

        )

    }
    else {
        return (
            <div></div>
        )
    }


}

export default JeopardyDisplay;