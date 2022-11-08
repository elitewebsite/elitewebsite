import Carousel from 'react-bootstrap/Carousel';
import aboutUpper from '../images/upper_banner.png';
import Slider from "react-slick"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//fetured product images
import featuredProd1 from "../images/featuredProducts/BSW350.png"
import featuredProd2 from "../images/featuredProducts/matrix300.png"
import featuredProd3 from "../images/featuredProducts/PAR64.png"
import featuredProd4 from "../images/featuredProducts/PAR200.png"
import featuredProd5 from "../images/featuredProducts/RAINBOW350.png"
import featuredProd6 from "../images/featuredProducts/WASH300.png"


import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ homeInfo }) => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (gimg) => {
        setImage(gimg);
        handleShow();
    }

    // Setting for featured products carousel
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Setting for testimonals section
    const settings2 = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        // centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        autoplay: true
    };

    return (

        <>
            {/* Carousel Section */}
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Carousel>
                            {
                                homeInfo?.map((value, index) => {
                                    return (
                                        <Carousel.Item interval={2500} className='first_Carousel_row'>
                                            <img className="d-block w-100" src={value.url} alt="Second slide" />
                                            <Carousel.Caption>
                                                <h1 id="secondLabel" className='text-capitalize'>
                                                    {
                                                        value.title.split(',').map((myvalue, index1) => {
                                                            return (
                                                                <>
                                                                    <span>{myvalue}</span>
                                                                    <br />
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </h1>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            {/* About Section */}
            <Container fluid>
                <Col>
                    <div className="about_main_div">
                        <div className="upper">
                            <img src={aboutUpper} alt="Image" />
                        </div>

                        <Container className="lower">
                            <div className="lower_left"></div>

                            <div className="lower_right">
                                <h2 className="who_title">Who we are?</h2>
                                <p>The Company brings you to the most vivid and exquisite luxury lighting series you’ve ever laid your eyes on. ELITE ELECTRIC PROLIGHT Pvt. Ltd. formerly known as New Elite Electricals. Professional event lighting manufacturer and trader. </p>
                                <button className='float-end rm_button'> <Link to="/about"> Read More</Link></button>
                            </div>

                        </Container>
                    </div>
                </Col>
            </Container>

            {/* Featured Product section */}
            <Container className='main_slider_container mt-5 mb-5'>
                <Row className='slider_row'>
                    <Col>
                        <h1 className='text-center featured_product_title' >Our Featured Products</h1>

                        <Slider {...settings} className="slider_imgs">
                            <div>
                                <img src={featuredProd1} alt="image" className='img-fluid' />
                                <h4>BSW 350</h4>
                            </div>

                            <div>
                                <img src={featuredProd2} alt="image" className='img-fluid' />
                                <h4>Matrix 300</h4>
                            </div>

                            <div>
                                <img src={featuredProd3} alt="image" className='img-fluid' />
                                <h4>PAR 64</h4>
                            </div>

                            <div>
                                <img src={featuredProd4} alt="image" className='img-fluid' />
                                <h4>PAR 200</h4>
                            </div>

                            <div>
                                <img src={featuredProd5} alt="image" className='img-fluid' />
                                <h4>Rainbow 350</h4>
                            </div>

                            <div>
                                <img src={featuredProd6} alt="image" className='img-fluid' />
                                <h4>Wash 300</h4>
                            </div>
                        </Slider>

                        <center>
                            <button id="view_all_btn">
                                <Link to="/gallery">
                                    View All
                                </Link>
                            </button>
                        </center>

                    </Col>
                </Row>
            </Container>

            {/* Gallery Section */}
            <Container className="gallery_container">
                <Row>
                    <h2 className='text-center mt-4' style={{ color: "#012e4d" }}>Gallery</h2>
                    <div className='image_gallery mt-4'>
                        <div>
                            <img src={featuredProd1} onClick={() => { handleChange(featuredProd1) }} alt="Image" />
                            <h6 className="text-center fs-4 mt-2">BSW 350</h6>
                        </div>

                        <div>
                            <img src={featuredProd3} onClick={() => { handleChange(featuredProd3) }} alt="Image" />
                            <h6 className="text-center fs-4 mt-2">PAR 64</h6>
                        </div>

                        <div>
                            <img src={featuredProd4} onClick={() => { handleChange(featuredProd4) }} alt="Image" />
                            <br />
                            <h6 className="text-center fs-4 mt-2">PAR 200</h6>
                        </div>

                        <div>
                            <img src={featuredProd6} onClick={() => { handleChange(featuredProd6) }} alt="Image" />
                            <h6 className="text-center fs-4 mt-2">Wash 300</h6>
                        </div>

                        <div>
                            <img src={featuredProd2} onClick={() => { handleChange(featuredProd2) }} alt="Image" />
                            <h6 className="text-center fs-4 mt-2">Matrix 300</h6>
                        </div>

                        <div>
                            <img src={featuredProd5} onClick={() => { handleChange(featuredProd5) }} alt="Image" />
                            <h6 className="text-center fs-4 mt-2">Rainbow 350</h6>
                        </div>

                    </div>
                    <center>
                        <button id="see_more_btn">
                            <Link to="/gallery">
                                See More
                            </Link>
                        </button>
                    </center>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={6} sm={6}>
                        <Modal show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}>
                            <Modal.Body>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <div>
                                    <img className="galleryImage" src={image} onClick={() => { handleChange(featuredProd2) }} alt="Image" />
                                    <h6 className="text-center fs-4 mt-2">Product Name</h6>
                                </div>
                            </Modal.Body>

                        </Modal>
                    </Col>
                </Row>
            </Container>

            {/* Testimonial Section */}
            <Container className="testimonial_container">
                <Row className="justify-content-center">
                    <Col lg={12} md={10} sm={10} >
                        <h2 className='testimonial_title'>Testimonials</h2>
                        <div >
                            <Slider {...settings2} className="testimonial_slider">
                                <div className="testimonials_words">
                                    <p> We have been very happy with the lights from New Elite have supplied us, their design and quality are excellent, and at a price comparable to other products. The staff are friendly and helpful, and always ready to listen to customer suggestions and input. We will most definitely be purchasing more of their products!</p>
                                    <h5 className='float-end'>- Prakash</h5>
                                </div>

                                <div className="testimonials_words">
                                    <p > We have purchased lights and lasers from these guys, brilliant quality with prompt staff that fix any issues in a heartbeat. Highly Recommend. The New Elite lights are great to deal with. We have 30 lights so far and plan for more in the future. Lights are well made and perform very well on every event we use them on.</p>
                                    <h5 className='float-end'>- Paul</h5>
                                </div>

                                <div className="testimonials_words">
                                    <p >Great products, we've purchased somewhere around 30 light products and couldn't be happier. The prices are great compared to other suppliers but they haven't skimped on the quality. We installed some of the lights into a venue and they asked us to turn them down!  </p>
                                    <h5 className='float-end'>- Rohit</h5>
                                </div>

                                <div className="testimonials_words">
                                    <p >Great communication, quick turnaround of equipment” “This year has been a challenge for all, and New Elite has ensured that I have had a stock of materials needed to help me keep my contracts running. No delays, and good communication. Always on time,</p>
                                    <h5 className='float-end'>- Priti</h5>
                                </div>

                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;