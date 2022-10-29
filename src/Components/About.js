import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutBanner from '../images/about_us_banner.png'
import aboutImg from '../images/our_aim.png'
const About = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='about_col'>
            <img src={aboutBanner} alt="Image" className='img-fluid' style={{margin:"0",padding:"0"}}/>
            <h2 className='aboutus_title'>About Us</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={aboutImg} alt="Images" class="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About