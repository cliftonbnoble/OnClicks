import React, {Component} from "react";
import Container from "../components/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Row from '../components/Row';
import axios from "axios";
import { Document, Paragraph, Packer } from "docx";
import jsPDF from "jspdf";
import FileSaver from 'file-saver';
// import ModalSearch from "../components/ModalSearch";
// import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

class Upload extends Component {
    
    state = {
        file: null,
        return: null
    }

    onChange = e => {
        this.setState(
            {
                file: e.target.files[0]
            }
            )
        }
        
        fileUpload = file => {
            const url = "http://localhost:3000";
            const formData = new FormData();
            formData.append('file', file);
            const config = {
                method: "post",
                body: formData
            }
            return fetch(url, config).then(res => {
                return res.json()
            }).then(data => {
                console.log('data', data);
                return data;
            })
        }

        handleSubmit = e => {
            e.preventDefault();
            console.log('ready to submit');
            this.fileUpload(this.state.file).then(response => {
                this.setState({
                    return: response.return
                })
            });
        }

        saveToDB = () => {
            axios.post('http://localhost:3000/add-to-db', 
            {data: this.state.return})
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        generateDoc = () =>{
            
            const doc = new Document();
            const paragraph = new Paragraph(this.state.return);
            doc.addParagraph(paragraph);
            const packer = new Packer();
            packer.toBlob(doc).then(blob => {
                FileSaver.saveAs(blob, "results.docx");
                console.log("Document created successfully");
            });
        }

        generatePDF = () => {
            var doc = new jsPDF(this.state.return)
            doc.setFontSize(14)
            doc.text(this.state.return, 10, 10)
            doc.save('results.pdf')
        }

        render() {
            return (
                <div>
            {/* website description */}
            <Container border='light' style = {{ marginTop: 10, justifyContent:'center'}}>
            <div>
                <h1>Upload Your File to be Scanned</h1>
                <p>Allow our App to read the text off of your image and translate it into a useable format to either save for later retrieval.  Edit to make it more readable.  Or you can save it to a document or PDF.</p>
            </div>
            <div>
            <img className="img-thumbnail rounded mx-auto d-block" src = "./images/uploadimg.png" alt = "scan-doc" />

            </div>
            </Container>

            <div>
            <Container style = {{ marginTop: 10, justifyContent:'center' }}>
            <Card style={{ width: '40rem', margin: 'auto' }}>
                <Card.Img variant="top" src="./images/ai-upload.gif" />
                <Card.Body>
                    <Card.Title>Choose Your Image to Upload</Card.Title>
                    <Card.Text>
                    <Form onSubmit={this.handleSubmit}>
                {/* <label className="up_styles"> */}
                <input type="file" name="upload" onChange={this.onChange} />    
                {/* </label>     */}
            <Button className="outline-info btn-md mt-2" type="submit" value="Upload" >Upload</Button>
            </Form>
                    {/* Some quick example text to build on the card title and make up the bulk of
                    the card's content. */}
                    </Card.Text>
                    {/* <Button className="outline-info btn-md mt-2" type="submit" value="Upload" >Upload</Button> */}
                </Card.Body>
                </Card>
            {/* <div>
                <h4>Choose Your Image to Upload</h4>
            <Form onSubmit={this.handleSubmit}>
                {/* <label className="up_styles"> */}
                {/* <input type="file" name="upload" onChange={this.onChange} />     */}
                {/* </label>     */}
            {/* <Button className="outline-info btn-md" type="submit" value="Upload" >Upload</Button> */}
            {/* </Form> */}
            {/* </div> */}
            
            {this.state.return != null && 
            <Card style= {{ marginTop: 10, marginLeft: 20, marginRight: 20}}>
                <Card.Header>Your Results</Card.Header>
                <Card.Body>
                    {/* <Card.Title>2nd Title Goes Here</Card.Title> */}
                    <Card.Text>
                        {this.state.return}
                    </Card.Text>
                    </Card.Body>
                <Card.Footer inline>
                <Button variant="primary" className="col-2 m-1" onClick={this.generateDoc}>Save to Word</Button>
                <Button variant="danger" className="col-2 m-1" onClick={this.saveToDB}>Save for Later</Button>
                <Button variant="success" className="col-2 m-1" onClick={this.generatePDF}>Save as PDF</Button>
                </Card.Footer>
            </Card>
            // <Button onClick={this.saveToDB} >Save</Button>
            }
            </Container>
            </div>
            </div>
        )
    }
}

export default Upload;