import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';

const ThankYou = () => {
	return (
		<div id="page">
			<nav className="colorlib-nav" role="navigation">
				<div className="top-menu">
					<div className="container">
						<Header />
						<NavBar />
					</div>
				</div>
				<Sale />
			</nav>

			<div className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col">
							<p className="bread">
								<span>
									<Link to="/">Home</Link>
								</span>{' '}
								/ <span>Contact</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div id="colorlib-contact">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h3>
								Thank you for contacting us! We've received your message and one of our representatives
								will get back to you soon. Have a nice day {':)'}
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThankYou;
