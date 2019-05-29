import React from "react";
import Container from "../components/Container";
import Button from 'react-bootstrap/Button'


function Landing () {
    return (
<div>
{/* website description */}
<Container style = {{ marginTop: 10, justifyContent:'center' }}>

<img src = "./images/mainBlurb.png" alt = "description" />

</Container>

{/* Buttons */}
<div>
<Container style = {{ marginTop: 10, justifyContent:'center' }}>
<Button variant="outline-warning" size="lg">Sign Up</Button>
</Container>
</div>

<div>
<Container style = {{ marginTop: 10, justifyContent:'center' }}>
<Button variant="outline-danger" size="lg">Log In</Button>
</Container>
</div>
</div>
    );
}

export default Landing;