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
							<NavBar activePage="about" />
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
									<h2>Bamboo & Ivy the leading eCommerce Store around the Globe</h2>
									<p>
										Here at Bamboo & Ivy, we realize that style and prosperity begin with the
										correct shoes. We likewise understand that effectively finding the size and
										style to meet your requirements is vital to your web-based shopping knowledge.
										Since beginning our web-based business website in 2022, we’ve been endeavoring
										to present to you that perfect shopping experience.
									</p>

									<p>
										This is the reason we take a stab at 100% consumer loyalty, offer a 105% value
										coordinate guarantee and additionally free delivery and returns.
									</p>
									<p>
										Next time you require another match of kicks for this experience we call life,
										our group is here to ensure that you get the execution that you require from
										your apparatus. Regardless of whether you are difficult to fit or have explicit
										requirements, let Bamboo & Ivy enable you to make progress toward your
										objective.
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
