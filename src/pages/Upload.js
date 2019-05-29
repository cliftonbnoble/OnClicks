import React, {Component} from "react";
import Container from "../components/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Row from '../components/Row';
import axios from "axios";


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
            // fetch('/add-to-db', {
            // method: 'POST',
            // // body: JSON.stringify(this.state.return),
            // body: {"key1": "Hello"},
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json',
            // }
            // })
            // .then(response => {
            // return response.json()
            // })
            // .then(data => {
            // console.log(data);
            // })
            // .catch(message => {
            // console.log(message);
            // })
        }
        
        render() {
            return (
                <div>
            {/* website description */}
            <Container style = {{ marginTop: 10, justifyContent:'center' }}>
            <div>
                <h1>Upload Your File to be Scanned</h1>
                <p>Allow our App to read the text off of your image and translate it into a useable format to either save for later retrieval.  Edit to make it more readable.  Or you can save it to a document or PDF.</p>
            </div>
            <div>
            <img className="img-thumbnail rounded mx-auto d-block" src = "./images/ai-upload.gif" alt = "scan-doc" />

            </div>
            </Container>

            <div>
            <Container style = {{ marginTop: 10, justifyContent:'center' }}>
            <div>
                <h4>Choose Your Image to Upload</h4>
            <Form onSubmit={this.handleSubmit}>
                {/* <label className="up_styles"> */}
                <input type="file" name="upload" onChange={this.onChange} />    
                {/* </label>     */}
            <Button className="sub outline-success btn-lg" type="submit" value="Upload">Upload</Button>
            </Form>
            </div>
            <div><h2>{this.state.return}</h2></div>
            {this.state.return != null && 
            <Button onClick={this.saveToDB} >Save</Button>
            }
            </Container>
            </div>
            </div>
        );
    }
}

export default Upload;