import React from "react"
import Jumbotron from "../../components/layout/Jumbotron"
import Background from "../../assets/images/Jumbotron_3.jpg";
import Form from "react-bootstrap/Form"

export const Contact = () => {

    const submit = () => {}


    return (
        <div>
            <Jumbotron 
            h1={"Send us a message"}
            p={"“The only mystery in life is why the kamikaze pilots wore helmets.”"}
            background={Background}
            />
            <div className="contactForm">
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <button className=" btn btn-block loginButton" onClick={() => submit()}>Submit</button>
            </Form>
            </div>
        </div>
    )
}
