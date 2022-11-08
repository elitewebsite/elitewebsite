import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Gallerybanner from '../images/CarouselImages/gallerybanner.png'

//Static LED Wash series
import staticLedWash1 from '../images/GalleryImages/static LED wash series/BLINDER400.webp'
import staticLedWash2 from '../images/GalleryImages/static LED wash series/PAR_150_RGB.webp'
import staticLedWash3 from '../images/GalleryImages/static LED wash series/PAR_160_RGB.webp'
import staticLedWash4 from '../images/GalleryImages/static LED wash series/PAR_160_WW.webp'
import staticLedWash5 from '../images/GalleryImages/static LED wash series/PAR_200_COB_WW.webp'
import staticLedWash6 from '../images/GalleryImages/static LED wash series/PAR_200RGBW.webp'
import staticLedWash7 from '../images/GalleryImages/static LED wash series/PAR_300_RGBW.webp'
import staticLedWash8 from '../images/GalleryImages/static LED wash series/PAR_300_RGBW_IP.webp'
import staticLedWash9 from '../images/GalleryImages/static LED wash series/PAR_300_WW.webp'

//Static Halogen Wash
import staticHalogenWash1 from '../images/GalleryImages/Static Halogen Wash Series/BLINDER_4650.webp'
import staticHalogenWash2 from '../images/GalleryImages/Static Halogen Wash Series/PAR_38_120.webp'
import staticHalogenWash3 from '../images/GalleryImages/Static Halogen Wash Series/PAR_64_1000.webp'
import staticHalogenWash4 from '../images/GalleryImages/Static Halogen Wash Series/PAR_64_1000_ALUMINIUM.webp'
import staticHalogenWash5 from '../images/GalleryImages/Static Halogen Wash Series/PAR_VS_1000.webp'

//Strobe Series
import strobeSeries1 from '../images/GalleryImages/strobe series/STROBE_1000_RGB.webp'

//Discharge Lamp Moving head series
import dischargeLamp1 from '../images/GalleryImages/DischargeLampMvingHeadSeries/BSW350.webp'
import dischargeLamp2 from '../images/GalleryImages/DischargeLampMvingHeadSeries/Raimbow300.webp'
import dischargeLamp3 from '../images/GalleryImages/DischargeLampMvingHeadSeries/Rainbow350.webp'
import dischargeLamp4 from '../images/GalleryImages/DischargeLampMvingHeadSeries/Rainbow400.webp'

//Spot light series
import spotLight1 from '../images/GalleryImages/SpotLightSeries/FOLLOW_SPOT_230.webp'
import spotLight2 from '../images/GalleryImages/SpotLightSeries/HALOGEN_PROFILE750.webp'
import spotLight3 from '../images/GalleryImages/SpotLightSeries/LED_PROFILE200.webp'

//Effect Series
import effectSeries1 from '../images/GalleryImages/EffectSeries/BUBBLE_BIG.webp'
import effectSeries2 from '../images/GalleryImages/EffectSeries/CONFEITTI_CO2.webp'
import effectSeries3 from '../images/GalleryImages/EffectSeries/ConfityBloar.webp'
import effectSeries4 from '../images/GalleryImages/EffectSeries/FireMachine.webp'
import effectSeries5 from '../images/GalleryImages/EffectSeries/FOG_BUBBLE_2000.webp'
import effectSeries6 from '../images/GalleryImages/EffectSeries/HAZE_2000.webp'

//Laser Light Series
import laserLight1 from '../images/GalleryImages/LaserLightSeries/LASER_BATTAN_RED3000.webp'
import laserLight2 from '../images/GalleryImages/LaserLightSeries/LASER_BATTAN_RGB1800.webp'
import laserLight3 from '../images/GalleryImages/LaserLightSeries/LASER_G12000.webp'
import laserLight4 from '../images/GalleryImages/LaserLightSeries/LASER_RGB3000.webp'
import laserLight5 from '../images/GalleryImages/LaserLightSeries/LASER_RGB5000.webp'
import laserLight6 from '../images/GalleryImages/LaserLightSeries/LASER_RGB10000.webp'

const Gallery = () => {
  return (
    <div>
      <div className="gallery_banner_background">
        <img src={Gallerybanner} alt="Image" />
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="Discharge Lamp Moving Head Series" transition={false}>
        <Container fluid={1}  >
          <Row>
            <Col sm={3}>
              <Nav variant="tabs" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="Discharge Lamp Moving Head Series">Discharge Lamp Moving Head Series</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Static LED Wash Series">Static LED Wash Series</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Static Halogen Wash Series">Static Halogen Wash Series</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Spot Light Series">Spot Light Series</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Strobe Series">Strobe Series</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                  <Nav.Link eventKey="Effect Series">Effect Series</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Laser Light Series">Laser Light Series</Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content >

                <Tab.Pane eventKey="Discharge Lamp Moving Head Series">
                  <div className="tabs_gallery">
                    <div>
                      <img src={dischargeLamp1} alt="no_image" className='img-fluid' />
                      <h1>
                        BSW 350
                      </h1>
                    </div>

                    <div>
                      <img src={dischargeLamp2} alt="no_image" className='img-fluid' />
                      <h1>
                        BSW 350
                      </h1>
                    </div>

                    <div>
                      <img src={dischargeLamp3} alt="no_image" className='img-fluid' />
                      <h1>
                        BSW 350
                      </h1>
                    </div>

                    <div>
                      <img src={dischargeLamp4} alt="no_image" className='img-fluid' />
                      <h1>
                        BSW 350
                      </h1>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Static LED Wash Series">
                  <div className="tabs_gallery">
                    <div>
                      <img src={staticLedWash1} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 150 RGB
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash2} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 160 RGB
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash3} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 150 WW
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash4} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 200 COB WW
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash5} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 200 RGBW
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash6} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 300 RGBW
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash7} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 300 RGBW IP
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash8} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 300 WW
                      </h1>
                    </div>

                    <div>
                      <img src={staticLedWash9} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 300 WW IP
                      </h1>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Static Halogen Wash Series">
                  <div className="tabs_gallery">
                    <div>
                      <img src={staticHalogenWash1} alt="no_image" className='img-fluid' />
                      <h1>
                        Blinder 4650
                      </h1>
                    </div>

                    <div>
                      <img src={staticHalogenWash2} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 38 120
                      </h1>
                    </div>

                    <div>
                      <img src={staticHalogenWash3} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 64 1000
                      </h1>
                    </div>

                    <div>
                      <img src={staticHalogenWash4} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR 64 1000 ALUMINIUM
                      </h1>
                    </div>

                    <div>
                      <img src={staticHalogenWash5} alt="no_image" className='img-fluid' />
                      <h1>
                        PAR VS 1000
                      </h1>
                    </div>

                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Strobe Series">
                  <div className="tabs_gallery">
                    <div>
                      <img src={strobeSeries1} alt="no_image" className='img-fluid' />
                      <h1>
                        STROBE 1000 RGB
                      </h1>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Spot Light Series">
                  <div className="tabs_gallery">
                    <div>
                      <img src={spotLight1} alt="no_image" className='img-fluid' />
                      <h1>
                        Follow Spot 230
                      </h1>
                    </div>

                    <div>
                      <img src={spotLight2} alt="no_image" className='img-fluid' />
                      <h1>
                        Halogen Profile 750
                      </h1>
                    </div>

                    <div>
                      <img src={spotLight3} alt="no_image" className='img-fluid' />
                      <h1>
                        LED Profile 200
                      </h1>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Effect Series">
                  <div className="tabs_gallery">
                    <div>
                      <img src={effectSeries1} alt="no_image" className='img-fluid' />
                      <h1>
                        BUBBLE BIG
                      </h1>
                    </div>

                    <div>
                      <img src={effectSeries2} alt="no_image" className='img-fluid' />
                      <h1>
                        CONFEITTI CO2
                      </h1>
                    </div>

                    <div>
                      <img src={effectSeries3} alt="no_image" className='img-fluid' />
                      <h1>
                        Confity Bloar
                      </h1>
                    </div>

                    <div>
                      <img src={effectSeries4} alt="no_image" className='img-fluid' />
                      <h1>
                        Fire Machine
                      </h1>
                    </div>

                    <div>
                      <img src={effectSeries5} alt="no_image" className='img-fluid' />
                      <h1>
                        FOG BUBBLE 2000
                      </h1>
                    </div>

                    <div>
                      <img src={effectSeries6} alt="no_image" className='img-fluid' />
                      <h1>
                        HAZE 2000
                      </h1>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Laser Light Series">
                  <div className="tabs_gallery">
                    <div>
                      <img src={laserLight1} alt="no_image" className='img-fluid' />
                      <h1>
                        LASER BATTAN RED 3000
                      </h1>
                    </div>

                    <div>
                      <img src={laserLight2} alt="no_image" className='img-fluid' />
                      <h1>
                        LASER BATTAN RGB 1800
                      </h1>
                    </div>

                    <div>
                      <img src={laserLight3} alt="no_image" className='img-fluid' />
                      <h1>
                        LASER G 12000
                      </h1>
                    </div>

                    <div>
                      <img src={laserLight4} alt="no_image" className='img-fluid' />
                      <h1>
                        LASER RGB 3000
                      </h1>
                    </div>

                    <div>
                      <img src={laserLight5} alt="no_image" className='img-fluid' />
                      <h1>
                        LASER RGB 5000
                      </h1>
                    </div>

                    <div>
                      <img src={laserLight6} alt="no_image" className='img-fluid' />
                      <h1>
                        LASER RGB 10000
                      </h1>
                    </div>
                  </div>
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