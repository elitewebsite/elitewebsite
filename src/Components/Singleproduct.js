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
import arrowIcon from '../images/right-arrow.png';
// import backBtn from '../images/back.png'
import leftBtn from '../images/left.png'
import fbIcon from '../images/facebook.png'
import instaIcon from '../images/instagram.png'
import linkedinIcon from '../images/linkedin.png'
import twitterIcon from '../images/twitter.png'
import pinterestIcon from '../images/pinterest.png'

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
            <div className="backBtn" onClick={() => { navigate(-1) }}>
                <img src={leftBtn} alt="Image" className='mb-2' /> <span className='fs-5 fw-bold back_text'>Previous Page</span>
            </div>


            {/* Product mg carousel */}
            <Container fluid className="mt-5">
                <Row className="carousel_row">
                    <Col xs={12} sm={12} lg={2} className="product-name" >
                        <div>
                            <hr />
                            <div>
                                <h3 className='text-center mt-2 mb-3 fs-2'>{state.oneproduct.product_name}</h3>
                            </div>

                            <hr />

                            <div>
                                <p className='text-center mb-5 fs-5'> {state.oneproduct.model_no}</p>
                            </div>

                        </div>
                    </Col>

                    <Col xs={12} sm={11} lg={9}>
                        <center>
                            <Carousel showStatus={false} thumbWidth={window.innerWidth <= 380 ? 60 : 95} centerMode={true} centerSlidePercentage={99} showArrows={true} infiniteLoop={true} autoPlay={true} interval={4000} showIndicators={true}>
                                {
                                    state.oneproduct.images?.map((val) => {
                                        return (
                                            <div className="carousel_imgs">
                                                <img src={val.url} className="img-fluid" />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </center>
                    </Col>

                    <Col xs={12} sm={1} lg={1} className="media-links">

                        <a href="https://www.facebook.com/EliteElectricals/" target="_blank"> <img src={fbIcon} alt="Image" /> </a>
                        <a href="https://www.instagram.com/elite_electrics_/" target="_blank"> <img src={instaIcon} alt="Image" /> </a>
                        <a href="https://www.linkedin.com/company/elite-shinde-electrics/" target="_blank"> <img src={linkedinIcon} alt="Image" /> </a>
                        <a href="https://twitter.com/Elite19920401" target="_blank"> <img src={twitterIcon} alt="Image" /> </a>
                        <a href="https://in.pinterest.com/socialelite6637/" target="_blank"> <img src={pinterestIcon} alt="Image" /> </a>

                    </Col>
                </Row>

                <Row className='mt-4 mb-3 pills_heading_row'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row >
                            <Col sm={3}>
                                <Nav variant="tabs" className="flex-column" >
                                    <Nav.Item className='new_item'>
                                        <Nav.Link eventKey="first">Description</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='new_item'>
                                        <Nav.Link eventKey="second">Parameters</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='new_item'>
                                        <Nav.Link eventKey="fourth">News</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='new_item'>
                                        <Nav.Link eventKey="sixth">Download</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='new_item'> 
                                        <Nav.Link eventKey="fifth">Video</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9} style={{ border: "1px solid black", padding: "20px", margin: "18px auto 40px", borderRadius: "15px" }}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p style={{ textAlign: "justify", padding: "20px" }}>
                                            {state.oneproduct.product_description}
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        {
                                            state.oneproduct.info?.map((value) => {
                                                return (
                                                    <div style={{ padding: "20px" }}>
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

                                    <Tab.Pane eventKey="fourth" >
                                        <p style={{ padding: "20px" }}>{state.oneproduct.news}</p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fifth" >
                                        <Container>
                                            <Row style={{padding:"20px"}}>
                                                {
                                                    state.oneproduct.youtube?.map((values, indx) => {
                                                        return (
                                                            <Col xs={12} sm={6} lg={6} >
                                                                <iframe width="100%" height="400px" frameborder="0" allowFullScreen
                                                                    src={`https://www.youtube.com/embed/${values.split('=')[1]}`}>
                                                                </iframe>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="sixth">
                                        <div className='d-flex flex-column' style={{padding:"20px"}}>
                                            {
                                                state.oneproduct.pdflink?.map((val, indnx) => {
                                                    return (
                                                        <div>
                                                            <h5 className='text-black'>{`${indnx + 1}. ${val.title ? val.title : 'Downloadable File'}`}</h5>
                                                            <a id="downloadable_pdf" href={val.url} download target="_blank">{
                                                                val.url.split('/').pop().replaceAll("%20", " ").replaceAll("%28", " ").replaceAll("%29", " ")
                                                            }</a>
                                                        </div>
                                                    )

                                                })
                                            }
                                        </div>
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