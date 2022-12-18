import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import EliteLogo from '../images/elite_black_logo.png'
import EliteLogo from '../images/elite_logo.webp'

function NavBar() {

    const [main, setMain] = useState([])
    useEffect(() => {
        axios.get('https://elitebackend-sage.vercel.app/admincrud/getlightcategory').then((res) => {
            setMain(res.data)
        })
    }, [])

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-black text-white">
                <Container >
                    <Navbar.Brand className="header_nav">
                        <Nav.Link>
                            <Link to="/" style={{ color: "#fff" }}>
                                <img src={EliteLogo} alt="Logo" height="58px" width="165px" />
                            </Link>
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link className="pe-4 fs-5" eventKey="1">
                                <Link to="/" > Home </Link>
                            </Nav.Link>

                            <Nav.Link className="pe-4 fs-5" eventKey="2" >
                                <Link to="/about" >
                                    About Us
                                </Link>
                            </Nav.Link>

                            <NavDropdown title="Products" id="collasible-nav-dropdown new_nav_item" className="pe-4 fs-5">
                                {
                                    main.map((value, index) => {
                                        return (
                                            <div className='d-flex g-4 main_nabaritem'>
                                                <img src={value.url} alt="Image" style={{ width: "50px", height: "60px", borderRadius: "80px", marginLeft: "9px", marginTop: "8px" }} />
                                                <NavDropdown.Item eventKey="3" className=''>
                                                    <Link id="mainlight_name" to={`/series/${value.name}`} style={{ color: "black !important" }}>
                                                        <span className="inner_tags">{value.name}</span>
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
                                    Contact Us
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