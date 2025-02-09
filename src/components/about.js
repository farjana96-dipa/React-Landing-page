import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.69259de9db0d2c31ef01.jpg'

export default class About extends Component {
  render() {
    const html = 80;
    const php = 60;
    const wordpress = 90;
    return (
     <section id="about" class="block about-block">
        <Container>
            <div className='about-title'>
                <h2 className='text-center'>About Us</h2>
            </div>
            <div className='about-subtitle'>
                <p className='text-center'>--Learn More About Us--</p>
            </div>
            <Row className='py-5'>
                <Col sm={6}>
                    <Image src={img1} />
                </Col>
                <Col sm={6}>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text, or randomised words which don't look even slightly believable.</p>

                <br />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                <div className='about-progressbar'>
                    <h4>WordPress Development</h4>
                    <ProgressBar now={wordpress} label={`${wordpress}%`} />
                    <h4>HTML, CSS, Javascript</h4>
                    <ProgressBar now={html} label={`${html}%`} />
                    <h4>PHP, Laravel</h4>
                    <ProgressBar now={php} label={`${php}%`} />
                </div>

                </Col>
            </Row>
        </Container>
     </section>
    )
  }
}
