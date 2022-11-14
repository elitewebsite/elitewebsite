import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import arrowIcon from '../images/right-arrow.png'
import mainlightBanner from '../images/mainlightBanner.png'
import backBanner from '../images/upper_banner.png'

export const Singleproduct = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {

        if (state) {

        }
        else {
            navigate('/')
        }
    }, [state])

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="singleProduct_banner">
                        <img src={mainlightBanner} alt="Image" />
                        <center>
                            <h2 className='singleProduct_title text-center mt-4 mb-5 text-uppercase'>{state.oneproduct.product_name}</h2>
                        </center>
                    </Col>
                </Row>
            </Container>
            
            <Container fluid>
                <Row className="carousel_row">
                    <center>
                        <h2 className="mt-4 mb-4">{state.oneproduct.product_name}</h2>
                    </center>
                    <Col>
                        <center>
                            <Carousel showStatus={false} thumbWidth={window.innerWidth <= 380 ? 60 : 95} centerMode={true} centerSlidePercentage={99} showArrows={false} infiniteLoop={true} autoPlay={true} interval={4000} showIndicators={false}>
                                {
                                    state.oneproduct.images?.map((val) => {
                                        return (
                                            <div className="carousel_imgs">
                                                <img src={val} className="img-fluid" />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </center>
                    </Col>
                </Row>

                <Row className='mt-4 mb-3 pills_heading_row'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row >
                            <Col sm={3}>
                                <Nav variant="tabs" className="flex-column" >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Description</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Parameters</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">News</Nav.Link>
                                    </Nav.Item>


                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth">Download</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Video</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>

                            <Col sm={9} style={{ border: "1px solid black", padding: "15px", margin:"18px auto 40px", borderRadius:"15px" }}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p style={{ textAlign: "justify" }}>
                                            {state.oneproduct.product_description}
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        {
                                            state.oneproduct.info?.map((value) => {
                                                return (
                                                    <div>
                                                        <h4 className="product_desc_title "> <img src={arrowIcon} alt="Icon" /> {value.title}</h4>

                                                        <p>{value.desc.split(",").map((val) => {
                                                            return (
                                                                <>
                                                                    <span> - {val}</span>
                                                                    <br />
                                                                </>
                                                            )
                                                        })}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fourth">
                                        <p>{state.oneproduct.news}</p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fifth">
                                        <iframe width="100%" height="400px" frameborder="0" allowfullscreen
                                            src={`https://www.youtube.com/embed/${state.oneproduct.youtube.split('=')[1]}`}>
                                        </iframe>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="sixth">
                                        <a id="downloadable_pdf" href={state.oneproduct.pdflink} download target="_blank">Details PDF </a>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Row>
            </Container>

        </>
    )
}
