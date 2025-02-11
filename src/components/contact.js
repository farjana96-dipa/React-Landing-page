import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Map from './google_map.js'




export default class contact extends Component {
  render() {
    return (
        <section id="contact">
     <Container>
                <div className='contact_text'>
                      <h2 className='dptitle text-center'>Contact us</h2>
                      <p className='dpsubtitle text-center'>--get connected with us--</p>
                </div> 
                <Row>
                <Col sm={12} md={6}>
                <Map />
                   
                    </Col>
                    <Col sm={12} md={6}>
                        <Form className='contact-form'>

                        <Row className="mb-4">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                            </Row>

                           

                         


                            <Row className="mb-4">
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Row>

                           

                            <Button className='btn contact-btn' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                   
                </Row>
                
     </Container>

     </section>
    )
  }
}
