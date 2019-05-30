import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Container from "./components/Container";
// import ToggleButton from 'react-bootstrap/ToggleButton'
// import Button from 'react-bootstrap/Button'
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import About from "./pages/About";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";


class App extends Component {
  render(){
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
          <Route exact path="/" component={Landing} />
          <Route exact path="/HOME" component={Landing} />
          <Route exact path="/PROFILE" component={Profile} />
          <Route exact path="/UPLOAD" component={Upload} />
          <Route exact path="/ABOUT" component={About} />

        </Wrapper>


  </div>
  <Footer/>
  </Router>
  )}}

export default App;
