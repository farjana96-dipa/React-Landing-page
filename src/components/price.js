import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';



export default class price extends Component {
  render() {
    return (
        <section id="price">
     <Container>
                <div className='price_text'>
                      <h2 className='dptitle text-center'>Our Pricing & Plans</h2>
                      <p className='dpsubtitle text-center'>--check our pricing & plans--</p>
                </div> 
        <Row>
            <Col md={4} sm={6}>
            <Table striped bordered hover  className='text-center price-table1'>
                <thead>
                    <tr>
                    <th>Basic<br/>
                    £49</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Wireframing</td>
                    </tr>
                    <tr>
                        <td>Visual Design</td>
                    </tr>
                    <tr>
                        <td>5 pages</td>
                    </tr>
                    <tr>
                        <td>Free Hosting</td>
                    </tr>
                    <tr>
                        <td>Support & Assistance</td>
                    </tr>
                    </tbody>
                </Table>
                <div className='price-button text-center'>
                <button className='btn'>Order Now</button>
                </div>
                
            </Col>
            <Col md={4} sm={6}>
            <Table striped bordered hover  className='text-center price-table2'>
                <thead>
                    <tr>
                    <th>Basic<br/>
                    £49</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Wireframing</td>
                    </tr>
                    <tr>
                        <td>Visual Design</td>
                    </tr>
                    <tr>
                        <td>5 pages</td>
                    </tr>
                    <tr>
                        <td>Free Hosting</td>
                    </tr>
                    <tr>
                        <td>Support & Assistance</td>
                    </tr>
                    </tbody>
                </Table>
                <div className='price-button text-center'>
                <button className='btn'>Order Now</button>
                </div>
            </Col>
            <Col md={4} sm={6}>
            <Table striped bordered hover  className='text-center price-table3'>
                <thead>
                    <tr>
                    <th>Basic<br/>
                    £49</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Wireframing</td>
                    </tr>
                    <tr>
                        <td>Visual Design</td>
                    </tr>
                    <tr>
                        <td>5 pages</td>
                    </tr>
                    <tr>
                        <td>Free Hosting</td>
                    </tr>
                    <tr>
                        <td>Support & Assistance</td>
                    </tr>
                    </tbody>
                </Table>
                <div className='price-button text-center'>
                <button className='btn'>Order Now</button>
                </div>
            </Col>
        </Row>
     </Container>

     </section>
    )
  }
}
