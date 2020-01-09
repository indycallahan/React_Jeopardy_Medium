import React, { Component } from 'react';
//import our service
import JeopardyService from "./jeopardyService";
import JeopardyDisplay from "../jeopardyDisplay/JeopardyDisplay";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    // this client talks to the jeopardyService and that talks as a client to axios.
    this.state = {
      data: {},
      score: 0,
      submitted: false,
      formData: {
        answer: "",

      }
    }
  }

  handleChange = (event) => {
    let formData = this.state.formData;
    // brackets are used to let the program know you want any of the three properties to be targeted.
    formData[event.target.name] = event.target.value;
    this.setState({ formData });


  }

  // start handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.answer.value);
    this.setState({
      submitted: true
    })

    let score = this.state.score;

    if (this.state.data.answer === event.target.answer.value) {
      // let score = this.state.score;
      score = score + this.state.data.value;

    }
    else {
      score = score - this.state.data.value;

    }
    this.setState({ score });
    this.getNewQuestion()
    event.target.answer.value = ""
  }
  // end handleSubmit



  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      console.log(result.data[0]);
      console.log(result.data[0].answer);
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }





  //display the results on the screen called string-ify
  render() {
return(
  
    <JeopardyDisplay 

    data = {this.state.data}
    score={this.state.score}
    answer={this.state.formData.answer}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    
    // name={this.props.visitingTeam.name}
    //                     logo={this.props.visitingTeam.logoSrc}
    //                     stats={this.state.visitingTeamStats}
    
    />

)
    

    // if (this.state.data.category) {
    //   return (
    //     <div>
    //       <table className="jeopardyTable">
    //         <tbody>
    //           <tr>
    //             <td>Category:</td>
    //             <td>{this.state.data.category.title}</td>
    //           </tr>
    //           <tr>
    //             <td>Question:</td>
    //             <td>{this.state.data.question}</td>
    //           </tr>

    //           <tr>
    //             <td>Point Value:</td>
    //             <td>{this.state.data.value}</td>
    //           </tr>

    //           <tr>
    //             <td>Score:</td>
    //             <td>{this.state.score}</td>
    //           </tr>
    //         </tbody>


    //       </table>
    //       <br />


    //       <form onSubmit={this.handleSubmit}>
    //         <div className="formData">
    //           <label>What is ...?</label>
    //           <input onChange={this.handleChange}
    //             type="text" name="answer"
    //           // value={this.state.data.answer} 
    //           />
    //         </div>



    //         <button>Submit Answer</button> <br />

    //         {/* {this.state.data.answer} */}
    //         <br />
    //         {/* {this.state.formData.lastName} */}
    //       </form>



    //     </div>

    //   )

    // }
    // else {
    //   return (
    //     <div></div>
    //   )
    // }






  }
  // end render


}


export default Jeopardy;