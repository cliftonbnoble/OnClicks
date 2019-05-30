import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Modal from "react-bootstrap/Modal"
import { userInfo } from "os";


function Profile (){ 
    return(
    <Container style = {{ marginTop: 50, justifyContent:'center', display: 'flex' }}>
    <Card border="info" style={{ width: '18rem' }} style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/user.png" />
  <Card.Body>
    <Card.Title>Welcome {userInfo} </Card.Title>
    <Card.Text>
      <span>Translate a photo document into a WORD DOC or PDF.</span>
    </Card.Text>
    <Button variant="outline-info">Upload and Translate</Button>
    <Card.Text><br></br>
        <span>Search for previous documents</span>
    </Card.Text>
    <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-info"
      title="Format"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">PDF</Dropdown.Item>
      <Dropdown.Item href="#">WORD DOC</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Both</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup> 
   </Card.Body>
</Card>
</Container>

    )}

export default Profile;




