import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class footer extends Component {
  render() {
    return (
     <footer id="footer">
        <Container fluid className='copy'>
            <Row>
                <Col sm={12}>
                    <div className='copy-text text-center'>
                       <p>@2025 All Rights Reserved. Farjana Dipa.</p> 
                    </div>
                </Col>
            </Row>
        </Container>
     </footer>
    )
  }
}
