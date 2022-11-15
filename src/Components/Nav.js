import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EliteLogo from '../images/elite_black_logo.png'

function NavBar() {

    const [main, setMain] = useState([])

    useEffect(() => {
        axios.get('https://elitebackend-sage.vercel.app/admincrud/getlightcategory').then((res) => {
            setMain(res.data)
        })
    }, [])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container >
                    <Navbar.Brand className="header_nav">

                        <Nav.Link> <Link to="/">
                            <img src={EliteLogo} alt="Logo" height="58px" width="165px" />
                        </Link></Nav.Link>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="pe-4 fs-5" eventKey="1">
                                <Link to="/" > Home </Link>
                            </Nav.Link>

                            <Nav.Link className="pe-4 fs-5" eventKey="2" >
                                <Link to="/about" >
                                    About
                                </Link>
                            </Nav.Link>

                            <NavDropdown title="Products" id="collasible-nav-dropdown" className="pe-4 fs-5">
                                {
                                    main.map((value, index) => {
                                        return (
                                            <div className='d-flex g-4 '>
                                                <img src={value.url} alt="Image" style={{ width: "30px", height: "30px", borderRadius: "80px", marginLeft: "9px", marginTop: "8px" }} />
                                                <NavDropdown.Item eventKey="3">

                                                    <Link id="mainlight_name" to={`/series/${value.name}`} >
                                                        {value.name}
                                                    </Link>
                                                </NavDropdown.Item>
                                            </div>
                                        )
                                    })
                                }
                            </NavDropdown>

                            <Nav.Link className="pe-4 fs-5" eventKey="4">
                                <Link to="/gallery" >
                                    Gallery
                                </Link>
                            </Nav.Link>

                            {/* <Nav.Link className="pe-4 fs-5">
                                <Link to="/blogs">
                                    Blogs
                                </Link>
                            </Nav.Link> */}

                            <Nav.Link className="pe-4 fs-5" eventKey="5">

                                <Link to="/contact" >
                                    Contact
                                </Link>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;