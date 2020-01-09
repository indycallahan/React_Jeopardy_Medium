import React from 'react';
import JeopardyService from "./jeopardyService";

class JeoBoard extends Component {
    constructor(props) {

    
    return (
        <div id="jeo-column">

            <table className="jeopardyTable">
                <table>
                    <thead>
                        <tr>
                            <td>Category</td>
                            <td>{this.state.data.category.title}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Category:</td>

                            <td>{this.state.data.category.title}</td>
                        </tr>
                        <tr>
                            <td>Question:</td>
                            <td>{this.state.data.question}</td>
                        </tr>

                        <tr>
                            <td>Point Value:</td>
                            <td>{this.state.data.value}</td>
                        </tr>

                        <tr>
                            <td>Score:</td>
                            <td>{this.state.score}</td>
                        </tr>
                    </tbody>


                </table>
                {/* <div><h3>Title</h3></div>
            <div><h3>$200</h3></div>
            <div><h3>$400</h3></div>
            <div><h3>$600</h3></div>
            <div><h3>$800</h3></div>
            <div><h3>$1000</h3></div> */}
        </div>

            )
        }
    }
        export default JeoBoard;
        
        
