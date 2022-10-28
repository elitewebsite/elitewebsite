import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../images/hero_img.png';
import aboutUpper from '../images/upper_banner.png';
import lowerBanner from '../images/who_we_are.png'

function IndividualIntervalsExample() {
    return (
        <>
            <div>
                <Carousel indicators={false}>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={carouselImg1}
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
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 id="secondLabel">The Future Of <br /> Advance Lighting</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

            <div className="about_main_div">
                <div className="upper">
                    <img src={aboutUpper} alt="Image" height="170px" width="100%" />
                </div>

                <div className="lower">
                    <div className="lower_left" style={{ height: "50%", width: "50%" }}>
                        <img src={lowerBanner} alt="Image" height="100%" width="100%" />
                    </div>

                    <div className="lower_right" style={{ height: "50%", width: "50%" }}>
                        <h2 className="who_title">Who we are?</h2>
                        <div className="lower_right_Second">
                            <p>The Company brings you to the most vivid and exquisite luxury lighting series you’ve ever laid your eyes on. ELITE ELECTRIC PROLIGHT Pvt. Ltd. formerly known as New Elite Electricals. Professional event lighting manufacturer and trader. </p>
                            <button className='float-end rm_button'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndividualIntervalsExample;