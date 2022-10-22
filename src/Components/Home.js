import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../images/hero1.png'
// import carouselImg2 from '../images/hero2.png'

function IndividualIntervalsExample() {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={carouselImg1}
                            alt="First slide" 
                        />
                        <Carousel.Caption>
                            <h1 id="firstLabel">First slide label</h1>
                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={carouselImg1}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 id="secondLabel">Second slide label</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                   
                </Carousel>
            </div>
            
            <div className="about_section">

            </div>
        </>
    );
}

export default IndividualIntervalsExample;