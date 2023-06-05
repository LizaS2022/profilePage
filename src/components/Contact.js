import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Container id='contact' className='mt-5 pt-5'>
        <Form>
            <div>
            <h1>Message Me</h1>
            </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="John Smith" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
    </Container>
      </div>
    )
  }
}
