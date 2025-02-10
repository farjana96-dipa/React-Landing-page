import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

var portfolioData = [
    {
     id: 1,
     image: require('../assets/images/img1.jpg'),
     title: 'Lonely Path',
     subtitle: 'Web Design'
    },
    {
        id: 2,
        image: require('../assets/images/img2.jpg'),
        title: 'Photographer Girl',
        subtitle: 'Branding'
       },
       {
        id: 3,
        image: require('../assets/images/img3.jpg'),
        title: 'The Difference',
        subtitle: 'Marketing'
       },
       {
        id: 4,
        image: require('../assets/images/img4.jpg'),
        title: 'Nature Patterns',
        subtitle: 'Digital Agency'
       },
       {
        id: 5,
        image: require('../assets/images/img5.jpg'),
        title: 'The Difference',
        subtitle: 'Web Design'
       },
       {
        id: 6,
        image: require('../assets/images/img6.jpg'),
        title: 'Lonely Path',
        subtitle: 'Branding'
       },
       {
        id: 7,
        image: require('../assets/images/img7.jpg'),
        title: 'WordPress Development',
        subtitle: 'Search Engine Optimization'
       },
       {
        id: 8,
        image: require('../assets/images/img8.jpg'),
        title: 'Lonely Path',
        subtitle: 'Marketing'
       },
       {
        id: 9,
        image: require('../assets/images/img9.jpg'),
        title: 'The Difference',
        subtitle: 'Branding'
       }
]

export default class gallery extends Component {
  render() {
        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
          items.push(
            <Pagination.Item key={number} active={number === active}>
              {number}
            </Pagination.Item>,
          );
        }
    return (
     <section id="gallery">
      <Container>
                <div className='gallery-text'>
                      <h2 className='dptitle text-center'>Our Works</h2>
                      <p className='dpsubtitle text-center'>--our awesome works--</p>
                </div> 
                
                <Row className='portfolio-list'>
                   
                        { portfolioData.map((port)=> (
                            <Col sm={6} md={4}>
                            <div className='portfolio-wrapper'>
                               <a href="#">
                                <Image src={port.image} alt={"portfolio"+port.id}/>
                                <div className='label text-center'>
                                    <h3>{port.title}</h3>
                                    <p>{port.subtitle}</p>
                                </div>
                               </a>
                            </div>
                            </Col>
                            ))}

                </Row>

                <Pagination className='text-center'>{items}</Pagination>
            </Container>
     </section>
    )
  }
}
