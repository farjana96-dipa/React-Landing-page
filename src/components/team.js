import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


var teamData = [
    {
        id: 1,
        image: require ('../assets/images/team1.jpg'),
        title: 'Gabriel Hart',
        subtitle: 'CEO',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 1,
        image: require ('../assets/images/team2.jpg'),
        title: 'David Antony',
        subtitle: 'Manager',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 1,
        image: require ('../assets/images/team3.jpg'),
        title: 'Nicholas Perry',
        subtitle: 'UI/UX Designer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 1,
        image: require ('../assets/images/team4.jpg'),
        title: 'Sarah Wills',
        subtitle: 'Software Developer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 1,
        image: require ('../assets/images/team5.jpg'),
        title: 'Sophia Pitt',
        subtitle: 'Web Developer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 1,
        image: require ('../assets/images/team6.jpg'),
        title: 'Taylor Lopez',
        subtitle: 'Graphics Designer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 1,
        image: require ('../assets/images/team7.jpg'),
        title: 'Ryan Giggs',
        subtitle: 'Content Writter',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 1,
        image: require ('../assets/images/team8.jpg'),
        title: 'David Smith',
        subtitle: 'SEO Expert',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    }
]

export default class team extends Component {
  render() {
    return (
     <section id="team">
        <Container>
                <div className='team_text'>
                      <h2 className='dptitle text-center'>Our Teams</h2>
                      <p className='dpsubtitle text-center'>--some of our experts--</p>
                </div> 
            <Row>
                {teamData.map((team)=>(
                    <Col md={3} sm={6}>
                       <div className='team'>
                            <div className='team_inner'>
                                 <Image src={team.image} />
                            
                            <div className='teamlabel'>
                                <div className='icons'>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-instagram"></i>
                                </div>
                            </div>

                            </div>
                            <div className='team-text'>
                                <h3>{team.title}</h3>
                                <p className='team-sub'>{team.subtitle}</p>
                                <p>{team.desc}</p>
                            </div>
                         </div>
                    </Col>

                ))}
                
            </Row>
        </Container>
     </section>
    )
  }
}
