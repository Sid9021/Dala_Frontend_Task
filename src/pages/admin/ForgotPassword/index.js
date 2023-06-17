import React, { useState } from "react";
import '../Login/login.scss';
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { CustomStaticCarousel } from "components/AdvanceUI/Carousels/Staticcarousel";
import Forgotpassword from "components/Custompages/Forgotpassword/Forgotpassword";
import { PopupExample } from "utilityComponents/popUp";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();
  const val = (e)=> console.log("working", e)
  // const submit = (event) => { console.log('working',event); event.preventDefault(); setShowPopUp(true)};
  return (
    <div className="page main-signin-wrapper dala-login-wrapper-bg" >
      <Row className="signpages text-center">
        <Col md={12} className="col-md-12">
          <Card className="dala-login-card-wrapper">
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center"
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <img className="login-truck-img" src={require('assets/dala-assets/img/Dala_2.png')} alt="" style={{ width: "50%", height: 'auto' }} />
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                <Container fluid>
                  <Row className=" row-sm">
                    <Card.Body className="card-body mt-2 mb-2">
                      <img
                        src={require("assets/dala-assets/img/Dala_2.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={require("assets/dala-assets/img/Dala_2.png")}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      <h5 className="text-start mb-2">Forgot Password</h5>
                      <p className="mb-4 text-muted tx-13 ms-0 text-start">
                        It's free to signup and only takes a minute.
                      </p>
                      <Form>
                        <Form.Group
                          className="text-start"
                          controlId="from email"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            className="form-control"
                            placeholder="Enter your email"
                            type="text"
                            defaultValue=""
                          />
                        </Form.Group>
                        <button className="btn ripple btn-main-primary btn-block mt-4" onClick={(event)=>{
                             event.preventDefault();
                              toast('New Password will be sent to the Registered Email Address', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                })
                        }}>
                          Submit
                        </button>
                        <div >
                           <div><PopupExample popupshow = {setShowPopUp} isShow= {showPopUp} value ={val}/></div>
                        </div>
                      </Form>
                      <div className="card-footer border-top-0 ps-0 mt-3 text-start ">
                        <p>Did you remembered your password?</p>
                        <p className="mb-0">
                          Try to
                          <Link
                            to={`${process.env.PUBLIC_URL}/admin/login/`}> Signin
                          </Link>
                        </p>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div >

  )
}

export default ForgotPassword