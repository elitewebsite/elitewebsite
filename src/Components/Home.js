import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../images/hero_img.png';
import aboutUpper from '../images/upper_banner.png';
import lowerBanner from '../images/who_we_are.png'
import Slider from "react-slick"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//fetured product images
import feture1 from "../images/CarouselImages/feture1.png"
import feture2 from "../images/CarouselImages/feture2.png"
import feture3 from "../images/CarouselImages/feture3.png"
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (gimg) => {
        setImage(gimg);
        handleShow();

    }

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
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true
    };
    return (

        <>
            {/* Carousel Section */}
            <div>
                <Carousel >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={carouselImg1}
                            width="100vw"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 id="firstLabel">Light Style <br /> For Life Style</h1>
                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={carouselImg1}
                            width="100vw"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 id="secondLabel">The Future Of <br /> Advance Lighting</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

            {/* About Section */}
            <div className="about_main_div">
                <div className="upper">
                    <img src={aboutUpper} alt="Image" />
                </div>

                <div className="lower">
                    <div className="lower_left" >
                        <img src={lowerBanner} alt="Image" />
                    </div>

                    <div className="lower_right" >
                        <h2 className="who_title">Who we are?</h2>
                        <div className="lower_right_Second">
                            <p>The Company brings you to the most vivid and exquisite luxury lighting series you’ve ever laid your eyes on. ELITE ELECTRIC PROLIGHT Pvt. Ltd. formerly known as New Elite Electricals. Professional event lighting manufacturer and trader. </p>
                            <button className='float-end rm_button'>
                                <Link to="/">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Product section */}
            <Container className='main_slider_container mt-5 mb-5'>
                <Row className='slider_row'>
                    <Col>
                        <h1 className='text-center featured_product_title' >Our Featured Products</h1>

                        <Slider {...settings} className="slider_imgs">
                            <div>

                                <img src={feture1} alt="image" className='img-fluid' />
                            </div>

                            <div>
                                <img src={feture2} alt="image" className='img-fluid' />
                            </div>

                            <div>
                                <img src={feture3} alt="image" className='img-fluid' />
                            </div>
                            <div>
                                <img src={feture2} alt="image" className='img-fluid' />
                            </div>

                            <div>
                                <img src={feture3} alt="image" className='img-fluid' />
                            </div>

                            <div>
                                <img src={feture1} alt="image" className='img-fluid' />
                            </div>
                        </Slider>

                        <center>
                            <button id="view_all_btn">
                                <Link to="/">
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
                            <img src={feture1} onClick={() => { handleChange(feture1) }} alt="Image" />
                            <h6 className="text-center fs-4">Product Name</h6>
                        </div>

                        <div>
                            <img src={feture2} onClick={() => { handleChange(feture2) }} alt="Image" />
                            <h6 className="text-center fs-4">Product Name</h6>
                        </div>

                        <div>
                            <img src={feture3} onClick={() => { handleChange(feture3) }} alt="Image" />
                            <h6 className="text-center fs-4">Product Name</h6>
                        </div>

                        <div>
                            <img src={feture2} onClick={() => { handleChange(feture2) }} alt="Image" />
                            <h6 className="text-center fs-4">Product Name</h6>
                        </div>

                        <div>
                            <img src={feture1} onClick={() => { handleChange(feture1) }} alt="Image" />
                            <h6 className="text-center fs-4">Product Name</h6>
                        </div>

                        <div>
                            <img src={feture3} onClick={() => { handleChange(feture2) }} alt="Image" />
                            <h6 className="text-center fs-4">Product Name</h6>
                        </div>

                    </div>
                    <center>
                        <button id="see_more_btn">See More</button>
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
                                    <img className="galleryImage" src={image} onClick={() => { handleChange(feture2) }} alt="Image" />
                                    <h6 className="text-center fs-4">Product Name</h6>
                                </div>
                            </Modal.Body>

                        </Modal>
                    </Col>
                </Row>
            </Container>

            {/* Testimonial Section */}
            <Container className="testimonial_container">
                <Row className="justify-content-center">
                    <Col lg={12} md={10} sm={10}>
                        <h2 className='testimonial_title'>Testimonials</h2>
                        <div>
                            <Slider {...settings2} className="testimonial_slider">
                                <div className="testimonials_words">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolorum ea error minima deleniti voluptatum ipsam delectus ratione magni non quis reprehenderit doloremque qui, similique earum iste perspiciatis? Earum, id?</p>
                                    <h5 className='float-end'>- Sample Name</h5>
                                </div>

                                <div className="testimonials_words">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At asperiores sequi illo perspiciatis porro commodi atque iusto, libero optio sint qui vitae voluptatem, enim repellat deserunt corrupti. Neque, iure doloremque!</p>
                                    <h5 className='float-end'>- Sample Name</h5>
                                </div>

                                <div className="testimonials_words">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At asperiores sequi illo perspiciatis porro commodi atque iusto, libero optio sint qui vitae voluptatem, enim repellat deserunt corrupti. Neque, iure doloremque!</p>
                                    <h5 className='float-end'>- Sample Name</h5>
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