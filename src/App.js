import React from 'react';
// things with a dot infront of it are what we created in our src folder
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact'
import "./App.css"
import Navigation from './components/navigation/Navigation';
import { Route } from "react-router-dom";
import Jeopardy from "./components/jeopardy/Jeopardy";

// import JeoBoard from "./components/jeopardy/JeopardyBoard";



function App() {
  return (
    <div className="App">
      {/* name is the props alex is the .name form the welcome.js */}
      {/* <Welcome name="Alex" />
      <Welcome name="Michael" />

      <Clock />
      <Contact /> */}


      {/* define our routes */}
      <Navigation/>
      <Route exact path="/" render={(props) => <Welcome {...props} name="eric" />} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/jeopardy" component={Jeopardy} />
      {/* <Route path="/jeoboard" component={JeoBoard} /> */}

    </div>
  );
}



export default App;
