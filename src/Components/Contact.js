import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/esm/Container';
import { ToastContainer, toast } from 'react-toastify';
import locationIcon from "../images/location.png";
import callIcon from "../images/call.png";
import mailIcon from "../images/mail.png"
import enquiryBtn from "../images/help.png"
// import Modal from "react-bootstrap/Modal";
// import Button from 'react-bootstrap/Button';

const Contact = () => {
  const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata.entries());

    if (data.contact.length === 10 || data.contact.length === 13) {
      axios.post('https://elitebackend-sage.vercel.app/getfomdata/getformdetails', data).then
        ((res) => {
          notify(1, "Details Submitted Successfully..");

        }).catch((err) => {
          notify(0, "Something went wrong please try again..!")
        })
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.contact.value = "";
      event.target.message.value = "";
    }
    else {
      window.alert("Please Enter Valid mobile Number")
    }

  }

  const [branchdata, setBranchdata] = useState([])

  useEffect(() => {
    axios.get('https://elitebackend-sage.vercel.app/branch/getbranches').then((res) => {
      setBranchdata(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="contact_cards">
        <Container fluid>
          <h2 className='text-center mt-3 fw-bold' style={{ marginBottom: "50px" }}>Reach Us At</h2>
          <Row className='gx-4 gy-3'>

            {
              branchdata?.map((val, index) => {
                return (
                  <Col sm={6} md={6} lg={3} xl={3} style={{ order: `${val.sequence_no}`,margin:"3px" }}>
                    <div className='contact_card' >
                      <p className='title pt-1' style={{ backgroundColor: `${val.branch_city == "Head Office" ? "#fde7dc" : "#bbbec0"}`, color: "black" }}>{val.branch_city}</p>
                      <div className="lower_details">

                        <p className='lower-title text-uppercase' style={{ color: '#012e4d' }}>{val.branch_name}</p>

                        <p className='others text-capitalize'>
                          <img src={locationIcon} alt="Icon" />&emsp;<span>{val.address}</span>
                        </p>
                        <p className='others'>
                          <img src={mailIcon} alt="icon" />&emsp;<span>{val.email}</span>
                        </p>
                        <p className='others'>
                          <img src={callIcon} alt="Icon" />&emsp;
                          {
                            val.contact?.map((value, index) => {
                              return (
                                <span>{value} | </span>
                              )
                            })
                          }
                        </p>
                      </div>
                    </div>
                  </Col>
                )
              })
            }

          </Row>
        </Container>
      </div>

      <div className="form_and_map mt-4" >
        <ToastContainer position="top-center" hideProgressBar="true" autoClose="6000" />
        <Container fluid>
          <Row className='gy-3 '>
            <Col>
              <iframe width="100%" height="400" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=New%20Elite%20Electricals,%201847,c,Opp%20Muttan%20Market,%20Khatik%20Chowk,,%20Kolhapur,%20Maharashtra%20Kolhapur+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='#'>.</a>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <p className='inquiry'>Send us inquiry</p> */}
              <button className="enquiryBtn fw-bold"> <img src={enquiryBtn} alt="Image" className='newImage' />Send Us Enquiry</button>

              <div className='myform'>
                <form onSubmit={handleSubmit} className="form mt-4" autocomplete="off">
                  <input type="text" name="name" pattern="^(?!.*\d)(?!.*\s).*$" title='Name should not contain numbers' placeholder='Your Name' id="" required />
                  <input type="email" name="email" placeholder='Your Email' id="" required />
                  <input type="number" pattern='[-+] ? [0-9]' name="contact" placeholder='Your Mobile Number' id="contact" />
                  <input type="text" name="message" placeholder="Type your message" id="message" required />
                  <button type='submit'>Submit Details</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <button className="enquiryBtn fw-bold" onClick={handleShow}> <img src={enquiryBtn} alt="Image" /> Send Us Enquiry</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tell Us Your Requirements..!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <form onSubmit={handleSubmit} className="form mt-4" autocomplete="off">
              <input type="text" pattern="^(?!.*\d)(?!.*\s).*$" title='Name should not contain numbers' name="name" placeholder='Your Name' id="" required />
              <input type="email" name="email" placeholder='Your Email' id="" required />
              <input type="number" pattern='[-+] ? [0-9]' name="contact" placeholder='Your Mobile Number' id="contact" />
              <input type="text" name="message" placeholder="Type your message" id="message" required />
              <button type='submit'>Submit Details</button>
            </form>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  )
}

export default Contact