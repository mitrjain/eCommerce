import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';

function men() {
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
										<Link to="/">Home</Link>
									</span>{' '}
									/ <span>Men</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="breadcrumbs-two">
					<div className="container">
						<div className="row">
							<div className="col">
								<div
									className="breadcrumbs-img"
									style={{ backgroundImage: 'url(assets/images/cover-img-1.jpg)' }}>
									<h2>Men's</h2>
								</div>
								<div className="menu text-center">
									<p>
										<a href="#">New Arrivals</a> <a href="#">Best Sellers</a>{' '}
										<a href="#">Extended Widths</a> <a href="#">Sale</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-featured">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 text-center">
								<div className="featured">
									<div
										className="featured-img featured-img-2"
										style={{ backgroundImage: 'url(assets/images/men.jpg)' }}>
										<h2>Casuals</h2>
										<p>
											<a href="#" className="btn btn-primary btn-lg">
												Shop now
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-4 text-center">
								<div className="featured">
									<div
										className="featured-img featured-img-2"
										style={{ backgroundImage: 'url(assets/images/women.jpg)' }}>
										<h2>Dress</h2>
										<p>
											<a href="#" className="btn btn-primary btn-lg">
												Shop now
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-4 text-center">
								<div className="featured">
									<div
										className="featured-img featured-img-2"
										style={{ backgroundImage: 'url(assets/images/item-11.jpg)' }}>
										<h2>Sports</h2>
										<p>
											<a href="#" className="btn btn-primary btn-lg">
												Shop now
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-product">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>View All Products</h2>
							</div>
						</div>
						<div className="row row-pb-md">
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-1.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-2.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Minam Meaghan</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-3.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Men's Taja Commissioner</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-4.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Russ Men's Sneakers</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100" />
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-5.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-6.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-7.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-8.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100" />
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-9.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-10.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-11.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-12.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100" />
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-13.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-14.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-15.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img
											src="assets/images/item-16.jpg"
											className="img-fluid"
											alt="Free html5 bootstrap 4 template"
										/>
									</a>
									<div className="desc">
										<h2>
											<a href="#">Women's Boots Shoes Maca</a>
										</h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-center">
								<div className="block-27">
									<ul>
										<li>
											<a href="#">
												<i className="ion-ios-arrow-back" />
											</a>
										</li>
										<li className="active">
											<span>1</span>
										</li>
										<li>
											<a href="#">2</a>
										</li>
										<li>
											<a href="#">3</a>
										</li>
										<li>
											<a href="#">4</a>
										</li>
										<li>
											<a href="#">5</a>
										</li>
										<li>
											<a href="#">
												<i className="ion-ios-arrow-forward" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-partner">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>Trusted Partners</h2>
							</div>
						</div>
						<div className="row">
							<div className="col partner-col text-center">
								<img
									src="assets/images/brand-1.jpg"
									className="img-fluid"
									alt="Free html4 bootstrap 4 template"
								/>
							</div>
							<div className="col partner-col text-center">
								<img
									src="assets/images/brand-2.jpg"
									className="img-fluid"
									alt="Free html4 bootstrap 4 template"
								/>
							</div>
							<div className="col partner-col text-center">
								<img
									src="assets/images/brand-3.jpg"
									className="img-fluid"
									alt="Free html4 bootstrap 4 template"
								/>
							</div>
							<div className="col partner-col text-center">
								<img
									src="assets/images/brand-4.jpg"
									className="img-fluid"
									alt="Free html4 bootstrap 4 template"
								/>
							</div>
							<div className="col partner-col text-center">
								<img
									src="assets/images/brand-5.jpg"
									className="img-fluid"
									alt="Free html4 bootstrap 4 template"
								/>
							</div>
						</div>
					</div>
				</div>

				<footer id="colorlib-footer" role="contentinfo">
					<div className="container">
						<div className="row row-pb-md">
							<div className="col footer-col colorlib-widget">
								<h4>About Footwear</h4>
								<p>
									Even the all-powerful Pointing has no control about the blind texts it is an almost
									unorthographic life
								</p>
								<p>
									<ul className="colorlib-social-icons">
										<li>
											<a href="#">
												<i className="icon-twitter" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="icon-facebook" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="icon-linkedin" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="icon-dribbble" />
											</a>
										</li>
									</ul>
								</p>
							</div>
							<div className="col footer-col colorlib-widget">
								<h4>Customer Care</h4>
								<p>
									<ul className="colorlib-footer-links">
										<li>
											<a href="#">Contact</a>
										</li>
										<li>
											<a href="#">Returns/Exchange</a>
										</li>
										<li>
											<a href="#">Gift Voucher</a>
										</li>
										<li>
											<a href="#">Wishlist</a>
										</li>
										<li>
											<a href="#">Special</a>
										</li>
										<li>
											<a href="#">Customer Services</a>
										</li>
										<li>
											<a href="#">Site maps</a>
										</li>
									</ul>
								</p>
							</div>
							<div className="col footer-col colorlib-widget">
								<h4>Information</h4>
								<p>
									<ul className="colorlib-footer-links">
										<li>
											<a href="#">About us</a>
										</li>
										<li>
											<a href="#">Delivery Information</a>
										</li>
										<li>
											<a href="#">Privacy Policy</a>
										</li>
										<li>
											<a href="#">Support</a>
										</li>
										<li>
											<a href="#">Order Tracking</a>
										</li>
									</ul>
								</p>
							</div>

							<div className="col footer-col">
								<h4>News</h4>
								<ul className="colorlib-footer-links">
									<li>
										<a href="blog.html">Blog</a>
									</li>
									<li>
										<a href="#">Press</a>
									</li>
									<li>
										<a href="#">Exhibitions</a>
									</li>
								</ul>
							</div>

							<div className="col footer-col">
								<h4>Contact Information</h4>
								<ul className="colorlib-footer-links">
									<li>
										291 South 21th Street, <br /> Suite 721 New York NY 10016
									</li>
									<li>
										<a href="tel://1234567920">+ 1235 2355 98</a>
									</li>
									<li>
										<a href="mailto:info@yoursite.com">info@yoursite.com</a>
									</li>
									<li>
										<a href="#">yoursite.com</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="copy">
						<div className="row">
							<div className="col-sm-12 text-center">
								<p>
									<span>
										Copyright &copy;<script>document.write(new Date().getFullYear());</script> All
										rights reserved | This template is made with{' '}
										<i className="icon-heart" aria-hidden="true" /> by{' '}
										<a href="https://colorlib.com" target="_blank">
											Colorlib
										</a>
									</span>
									<span className="block">
										Demo Images:{' '}
										<a href="http://unsplash.co/" target="_blank">
											Unsplash
										</a>{' '}
										,{' '}
										<a href="http://pexels.com/" target="_blank">
											Pexels.com
										</a>
									</span>
								</p>
							</div>
						</div>
					</div>
				</footer>
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

export default men;
