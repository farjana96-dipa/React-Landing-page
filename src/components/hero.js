import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../assets/images/img-hero1.25bc79d8d10f678124f4.jpg'),
        title: 'The perfect design for your website',
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English`,
        link: 'https://www.google.com/'
    },
    {
        id: 2,
        image: require('../assets/images/img-hero3.fc13d76750b1bf1ff1e5.jpg'),
        title: 'Enjoy the Difference',
        description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source`,
        link: 'https://www.facebook.com/'
    },
    {
        id: 3,
        image: require('../assets/images/img-hero2.7a396087717d6aac698a.jpg'),
        title: 'Start Your Future Financial Plan',
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
        link: 'https://www.youtube.com/'
    }
]

export default function Hero() {
  return (
   <section id="hero">
      <Carousel>
        {heroData.map((hero) => (
        <Carousel.Item key={hero.id}>
            <div className='overlay'></div>
            <img src={hero.image} alt={"heroimage" + hero.id} />
            <div className='heroInner'>
            <Carousel.Caption>
            <h2>{hero.title}</h2>
            <p>{hero.description}</p>
            <a href={hero.link} className='btn btn-danger'>Book An Appointment</a>
            </Carousel.Caption>
            </div>
        </Carousel.Item>
        ))}
            
     
    </Carousel>
   </section>
  )
}
