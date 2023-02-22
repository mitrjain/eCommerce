import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';

function About() {
	return (
		<Fragment>
			{/* <div className="colorlib-loader" /> */}

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
										<a href="index.html">Home</a>
									</span>{' '}
									/ <span>About</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="colorlib-about">
					<div className="container">
						<div className="row row-pb-lg">
							<div className="col-sm-6 mb-3">
								<div
									className="video colorlib-video"
									style={{ backgroundImage: 'url(assets/images/about.jpg)' }}>
									<a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo">
										<i className="icon-play3" />
									</a>
									<div className="overlay" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className="about-wrap">
									<h2>Footwear the leading eCommerce Store around the Globe</h2>
									<p>
										The Big Oxmox advised her not to do so, because there were thousands of bad
										Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
										didn’t listen. She packed her seven versalia, put her initial into the belt and
										made herself on the way.
									</p>
									<p>
										When she reached the first hills of the Italic Mountains, she had a last view
										back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet
										Village and the subline of her own road, the Line Lane. Pityful a rethoric
										question ran over her cheek, then she continued her way.
									</p>
								</div>
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

			<script src="assets/js/main.js" />
		</Fragment>
	);
}

export default About;
