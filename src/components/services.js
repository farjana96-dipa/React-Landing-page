import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var serviceData = [
    {
        id: 1,
        icon: 'fa-solid fa-copy',
        title: 'Responsive Design',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.`,
      
    },
    {
        id: 2,
        icon: 'fa-solid fa-snowflake',
        title: 'Creative Design',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.`, 
    },
    {
        id: 3,
        icon: 'fa-solid fa-plug',
        title: 'SEO Optimize',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.`,
    },
    {
        id: 4,
        icon: 'fa-solid fa-laptop',
        title: 'Retina Ready',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.`,
    },
    {
        id: 5,
        icon: 'fa-solid fa-trophy',
        title: 'Brower Compatibility',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.`,
    },
    {
        id: 6,
        icon: 'fa-solid fa-life-ring',
        title: 'Customer Support',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.`,
    }
]

export default class services extends Component {
  render() {

    return (
        <section id="services">
            <Container>
                <div className='services-text'>
                      <h2 className='dptitle text-center'>Our services</h2>
                      <p className='dpsubtitle text-center'>--services we provide--</p>
                </div> 
                
                <Row>
                   
                        { serviceData.map((ser)=> (
                            <Col sm={6} md={4} className='py-3'>
                            <div className='service py-3'>
                                <i className={ser.icon}></i>
                                <h2>{ser.title}</h2>
                                <p>{ser.description}</p>
                            </div>
                            </Col>
                            ))}

                </Row>
            </Container>

        </section>
    )
  }
}
