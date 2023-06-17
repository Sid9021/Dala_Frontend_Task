import React from 'react';
import { Link } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => (

	<div className="main-footer text-center">
		<Container>
			<Row className="row-sm">
				<Col md={12} className="col-md-12">
					<span>For DALA Technologies © 2023, Designed & Developed by <Link href='https://www.stacksnova.com/'>Stacksnova Globalcorp</Link></span>
				</Col>
			</Row>
		</Container>
	</div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
