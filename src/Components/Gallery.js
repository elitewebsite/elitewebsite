import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

//moving head series
import movinghead1 from "../images/GalleryImages/movingHeadseries/moving1.webp"
import movinghead2 from "../images/GalleryImages/movingHeadseries/moving2.webp"
import movinghead3 from "../images/GalleryImages/movingHeadseries/moving3.webp"
import movinghead4 from "../images/GalleryImages/movingHeadseries/moving4.webp"
import Gallerybanner from '../images/CarouselImages/gallerybanner.png'

const Gallery = () => {
  return (
    <div>
      <div className="gallery_banner_background">
        <img src={Gallerybanner} alt="Image" />
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="Moving Head Series" transition={false}>
        <Container fluid={1}  >
          <Row>
            <Col sm={3}>
              <Nav variant="tabs" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="Moving Head Series">Moving Head Series</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Static LED Wash Series">Static LED Wash Series</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Static Halogen Wash Series">Static Halogen Wash Series</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Strobe Series">Strobe Series</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Spot Light Series">Spot Light Series</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content >
                <Tab.Pane eventKey="Moving Head Series">
                  <div className="tabs_gallery">
                    <div >

                      <img src={movinghead1} alt="no_image" className='img-fluid' />

                      <h1>BSW350</h1>
                    </div>
                    <div >
                      <img src={movinghead2} alt="no_image" className='img-fluid' />
                      <h1>
                        Rainbow 300
                      </h1>
                    </div>
                    <div >
                      <img src={movinghead3} alt="no_image" className='img-fluid' />
                      <h1>
                        Rainbow 350
                      </h1>
                    </div>
                    <div >

                      <img src={movinghead4} alt="no_image" className='img-fluid' />
                      <h1>
                        Rainbow 400
                      </h1>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="LED Moving Head Series">
                  <h1>LED Moving Head Series</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="Static LED Wash Series">
                  <h1>Static LED Wash Series</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="Static Halogen Wash Series">
                  <h1>Static Halogen Wash Series</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="Strobe Series">
                  <h1>Strobe Series</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="Spot Light Series">
                  <h1>Spot Light Series</h1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Container>
      </Tab.Container>
    </div>
  )


}

export default Gallery