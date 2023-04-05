import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';

function Contact() {
	return (
		<Fragment>
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
								<h3>Contact Information</h3>
								<div className="row contact-info-wrap">
									<div className="col-md-3">
										<p>
											<span>
												<i className="icon-location" />
											</span>{' '}
											198 West 21th Street, <br /> Suite 721 New York NY 10016
										</p>
									</div>
									<div className="col-md-3">
										<p>
											<span>
												<i className="icon-phone3" />
											</span>{' '}
											<a href="tel://1234567920">+ 1235 2355 98</a>
										</p>
									</div>
									<div className="col-md-3">
										<p>
											<span>
												<i className="icon-paperplane" />
											</span>{' '}
											<a href="mailto:info@bambooandivy.com">info@bambooandivy.com</a>
										</p>
									</div>
									<div className="col-md-3">
										<p>
											<span>
												<i className="icon-globe" />
											</span>{' '}
											<a href="#">bambooandivy.com</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="contact-wrap">
									<h3>Get In Touch</h3>
									<form action="#" className="contact-form">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label for="fname">First Name</label>
													<input
														type="text"
														id="fname"
														className="form-control"
														placeholder="Your firstname"
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label htmlFor="lname">Last Name</label>
													<input
														type="text"
														id="lname"
														className="form-control"
														placeholder="Your lastname"
													/>
												</div>
											</div>
											<div className="w-100" />
											<div className="col-sm-12">
												<div className="form-group">
													<label for="email">Email</label>
													<input
														type="text"
														id="email"
														className="form-control"
														placeholder="Your email address"
													/>
												</div>
											</div>
											<div className="w-100" />
											<div className="col-sm-12">
												<div className="form-group">
													<label for="subject">Subject</label>
													<input
														type="text"
														id="subject"
														className="form-control"
														placeholder="Your subject of this message"
													/>
												</div>
											</div>
											<div className="w-100" />
											<div className="col-sm-12">
												<div className="form-group">
													<label for="message">Message</label>
													<textarea
														name="message"
														id="message"
														cols="30"
														rows="10"
														className="form-control"
														placeholder="Say something about us"
													/>
												</div>
											</div>
											<div className="w-100" />
											<div className="col-sm-12">
												<div className="form-group">
													{/* <input
														type="submit"
														value="Send Message"
														className="btn btn-primary"
													/> */}
													<Link to="/thankyou" className="btn btn-primary">
														Send Message
													</Link>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-6">
								<div id="map" className="colorlib-map" />
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>

			<div className="gototop js-top">
				<a href="#" className="js-gotop">
					<i className="ion-ios-arrow-up" />
				</a>
			</div>

			<script src="assets/js/jquery.min.js" />

			<script src="assets/js/popper.min.js" />

			<script src="assets/js/bootstrap.min.js" />

			<script src="assets/js/jquery.easing.1.3.js" />

			<script src="assets/js/jquery.waypoints.min.js" />

			<script src="assets/js/jquery.flexslider-min.js" />

			<script src="assets/js/owl.carousel.min.js" />

			<script src="assets/js/jquery.magnific-popup.min.js" />
			<script src="assets/js/magnific-popup-options.js" />

			<script src="assets/js/bootstrap-datepicker.js" />

			<script src="assets/js/jquery.stellar.min.js" />

			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false" />
			<script src="assets/js/google_map.js" />

			<script src="assets/js/main.js" />
		</Fragment>
	);
}

export default Contact;
