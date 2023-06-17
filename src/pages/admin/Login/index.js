import React from "react";
import './login.scss';
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { CustomStaticCarousel } from "components/AdvanceUI/Carousels/Staticcarousel";
// import { Button, Input, Layout } from "antd";
// import { Controller, useForm } from "react-hook-form";
// import logo from '../../assets/Dala_2.png'
// import truckImg from '../../assets/truck.png'

// const SignInPage = () => {
// 	const { control, handleSubmit } = useForm({
// 		defaultValues: {
// 			email: "",
// 			password: "",
// 		},
// 	});
// 	const onSubmit = (data) => console.log(data);

// 	/**
// 	 * Use Signin Component from the template
// 	 * src\components\Custompages\Signin\Signin.js
// 	 * This is the path for the component
// 	 */

// 	return <Custom />

// 	return (
// 		<div className="login-main">
// 			<div className="login-container">
// 				<div className="login-form">
// 					<img className="dala-logo" src={require('../../../assets/dala-assets/img/Dala_2.png')} alt="" />
// 					<form
// 					// onSubmit={handleSubmit(onSubmit)}
// 					>
// 						<h1 className="welcome">WELCOME BACK</h1>
// 						<h1 className="sign-in-font">SIGN IN</h1>
// 						<div className="login-field">
// 							<Form>
// 								<Form.Group className="text-start form-group" controlId="formEmail">
// 									<Form.Label>Email</Form.Label>
// 									<Form.Control
// 										placeholder="Enter your email"
// 										type="email"
// 									/>
// 								</Form.Group>
// 								<Form.Group
// 									className="text-start form-group"
// 									controlId="formpassword"
// 								>
// 									<Form.Label>Password</Form.Label>
// 									<Form.Control
// 										placeholder="Enter your password"
// 										type="password"
// 									/>
// 								</Form.Group>
// 							</Form>
// 							<Button>
// 								SIGN IN
// 							</Button>
// 						</div>
// 						<p className="register">Don't have an account? <Link to={`${process.env.PUBLIC_URL}/admin/signup`}>Register Here</Link></p>
// 					</form>
// 				</div>
// 				<div className="login-image">
// 					<img className="login-truck-img" src={require('../../../assets/img/pngs/16.png')} alt="" />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

const SignInPage = () => {
	const navigate = useNavigate();
	return (
		<div className="page main-signin-wrapper dala-login-wrapper-bg" >
			<Row className="signpages text-center">
				<Col md={12} className="col-md-12">
					<Card className="dala-login-card-wrapper">
						<Row className="row-sm">
							<Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
								<Container fluid>
									<Row className=" row-sm">
										<Card.Body className="mt-2 mb-2">
											<Col
												// lg={6}
												// xl={5}
												className="d-none d-lg-block text-center"
											>
												<img
													src={require("../../../assets/dala-assets/img/Dala_2.png")}
													className="header-brand-img mb-4"
													alt="logo"
													style={{ scale: "0.5" }}
												/>
												<div className="clearfix"></div>
											</Col>
											<img
												src={require("../../../assets/dala-assets/img/Dala_2.png")}
												className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
												alt="logo"
												style={{ scale: "0.5" }}
											/>
											<img
												src={require("../../../assets/dala-assets/img/Dala_2.png")}
												className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
												alt="logo"
												style={{ scale: "0.5" }}
											/>
											<div className="clearfix"></div>
											<h5 className="text-start mb-2">Login</h5>
											<Form>
												<Form.Group className="text-start form-group" controlId="formEmail">
													<Form.Label>Email</Form.Label>
													<Form.Control
														placeholder="Enter your email"
														type="email"
													/>
												</Form.Group>
												<Form.Group
													className="text-start form-group"
													controlId="formpassword"
												>
													<Form.Label>Password</Form.Label>
													<Form.Control
														placeholder="Enter your password"
														type="password"
													/>
												</Form.Group>

												<button className="btn ripple btn-main-primary btn-block mt-2" onClick={() => {
													navigate('/dashboard/');
												}}>
													Login
												</button>
											</Form>
											<div className="text-start mt-3 ms-0">
												<p className="mb-0">
													<Link
														to={`${process.env.PUBLIC_URL}/admin/forgot-password`}> Forgot Password
													</Link>
												</p>
											</div>
											<div className="text-start mt-3 ms-0">
												<p className="mb-0">
													Don't have an account?
													<Link
														to={`${process.env.PUBLIC_URL}/admin/signup`}> SignUp
													</Link>
												</p>
											</div>
										</Card.Body>
									</Row>
								</Container>
							</Col>
							<Col
								lg={6}
								xl={5}
								className="d-none d-lg-block text-center"
							>
								{/* <img className="login-truck-img" src={require('../../../assets/img/pngs/16.png')} alt="" /> */}
								<CustomStaticCarousel img={[
									require('../../../assets/dala-assets/login/i1.png'),
									require('../../../assets/dala-assets/login/i2.png'),
									require('../../../assets/dala-assets/login/i3.png'),
									require('../../../assets/dala-assets/login/i4.png'),
								]} />
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default SignInPage