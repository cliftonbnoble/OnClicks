import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function About () {
    return (
        <Container style = {{ marginTop: 30, justifyContent:'center' }}>
  <Row>
    <Col>
    <img src="./images/aboutimg.png"></img>
    </Col>
    <Col>Although it is good practice, the answer is no. 
From receipts to your Uncle Johns hand written short story, On-Clicks is designed with Googles Optical Character Recognition (OCR) to pick up each text character and format it into a digital file. 
We are always looking to improve technology. Please let us know how we can get there with a kind email.</Col>
  </Row>
  <br></br>
  <br></br>
  <Row>
    <Col><img src="./images/textsamplepickup.png"/></Col>
    <Col><img src="./images/textsample.png" alt="photo-of-text" /></Col>
    <Col><img src="./images/textconverted.png"/></Col>
  </Row>
</Container>
    
    )
    }
export default About