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

    console.log(state)
    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center mt-4 mb-5'>{state.oneproduct.product_name}</h2>
                        <center>
                            <Carousel showStatus={false} thumbWidth={window.innerWidth <= 400 ? 70 : 120} centerMode={true} centerSlidePercentage={99} showArrows={true} infiniteLoop={true} autoPlay={true} interval={2000}>
                                {
                                    state.oneproduct.images?.map((val) => {
                                        return (
                                            <div style={{ margin: "auto" }} className="carousel_imgs">
                                                <img src={val} className="img-fluid" />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </center>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Description</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Parameters</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Blogs</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">News</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Video</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                            <Col sm={9} style={{border:"1px solid black", padding:"15px",marginBottom:"40px"}}>
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
                                                        <h4 className="product_desc_title"> <img src={arrowIcon} alt="Icon" /> {value.title}</h4>

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

                                    <Tab.Pane eventKey="third">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eaque illo qui, debitis explicabo nam iste repellendus ipsa inventore sint!</p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fourth">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eaque illo qui, debitis explicabo nam iste repellendus ipsa inventore sint!</p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fifth">
                                        <iframe width="100%" height="400px" frameborder="0" allowfullscreen
                                            src={`https://www.youtube.com/embed/${state.oneproduct.youtube.split('=')[1]}`}>
                                        </iframe>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Row>
            </Container>

            {/* <h1>Singleproduct info</h1>
            <h1>{state.oneproduct.product_name}</h1>
            <h1>{state.oneproduct.model_no}</h1>
            <h1>{state.oneproduct.youtube}</h1>
            <iframe width="420" height="315" frameborder="0" allowfullscreen
                src={`https://www.youtube.com/embed/${state.oneproduct.youtube.split('=')[1]}`}>
            </iframe> */}
        </>
    )
}
