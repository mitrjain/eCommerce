import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';

/**
 * This is the individual product page that gives details on a selected product. 
 * Users can also add this product to the cart and proceed to checkout.
 */
function ProductDetail() {
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
									/ <span>Product Details</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-product">
					<div className="container">
						<div className="row row-pb-lg product-detail-wrap">
							<div className="col-sm-8">
								<div className="item">
									<div className="product-entry border">
										<a href="#" className="prod-img">
											<img
												src="assets/images/item-1.jpg"
												className="img-fluid"
												alt="Free html5 bootstrap 4 template"
											/>
										</a>
									</div>
								</div>
								{/* <div className="owl-carousel">
									<div className="item">
										<div className="product-entry border">
											<a href="#" className="prod-img">
												<img
													src="assets/images/item-1.jpg"
													className="img-fluid"
													alt="Free html5 bootstrap 4 template"
												/>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="product-entry border">
											<a href="#" className="prod-img">
												<img
													src="assets/images/item-2.jpg"
													className="img-fluid"
													alt="Free html5 bootstrap 4 template"
												/>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="product-entry border">
											<a href="#" className="prod-img">
												<img
													src="assets/images/item-3.jpg"
													className="img-fluid"
													alt="Free html5 bootstrap 4 template"
												/>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="product-entry border">
											<a href="#" className="prod-img">
												<img
													src="assets/images/item-4.jpg"
													className="img-fluid"
													alt="Free html5 bootstrap 4 template"
												/>
											</a>
										</div>
									</div>
								</div> */}
							</div>
							<div className="col-sm-4">
								<div className="product-desc">
									<h3>Women's Boots Shoes Maca</h3>
									<p className="price">
										<span>$68.00</span>
										<span className="rate">
											<i className="icon-star-full" />
											<i className="icon-star-full" />
											<i className="icon-star-full" />
											<i className="icon-star-full" />
											<i className="icon-star-half" />
											(74 Rating)
										</span>
									</p>
									<p>
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div className="size-wrap">
										<div className="block-26 mb-2">
											<h4>Size</h4>
											<ul>
												<li>
													<a href="#">7</a>
												</li>
												<li>
													<a href="#">7.5</a>
												</li>
												<li>
													<a href="#">8</a>
												</li>
												<li>
													<a href="#">8.5</a>
												</li>
												<li>
													<a href="#">9</a>
												</li>
												<li>
													<a href="#">9.5</a>
												</li>
												<li>
													<a href="#">10</a>
												</li>
												<li>
													<a href="#">10.5</a>
												</li>
												<li>
													<a href="#">11</a>
												</li>
												<li>
													<a href="#">11.5</a>
												</li>
												<li>
													<a href="#">12</a>
												</li>
												<li>
													<a href="#">12.5</a>
												</li>
												<li>
													<a href="#">13</a>
												</li>
												<li>
													<a href="#">13.5</a>
												</li>
												<li>
													<a href="#">14</a>
												</li>
											</ul>
										</div>
										<div className="block-26 mb-4">
											<h4>Width</h4>
											<ul>
												<li>
													<a href="#">M</a>
												</li>
												<li>
													<a href="#">W</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="input-group mb-4">
										<span className="input-group-btn">
											<button
												type="button"
												className="quantity-left-minus btn"
												data-type="minus"
												data-field="">
												<i className="icon-minus2" />
											</button>
										</span>
										<input
											type="text"
											id="quantity"
											name="quantity"
											className="form-control input-number"
											value="1"
											min="1"
											max="100"
										/>
										<span className="input-group-btn ml-1">
											<button
												type="button"
												className="quantity-right-plus btn"
												data-type="plus"
												data-field="">
												<i className="icon-plus2" />
											</button>
										</span>
									</div>
									<div className="row">
										<div className="col-sm-12 text-center">
											<p className="addtocart">
												<a href="cart.html" className="btn btn-primary btn-addtocart">
													<i className="icon-shopping-cart" /> Add to Cart
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<div className="row">
									<div className="col-md-12 pills">
										<div className="bd-example bd-example-tabs">
											<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
												<li className="nav-item">
													<a
														className="nav-link active"
														id="pills-description-tab"
														data-toggle="pill"
														href="#pills-description"
														role="tab"
														aria-controls="pills-description"
														aria-expanded="true">
														Description
													</a>
												</li>
												<li className="nav-item">
													<a
														className="nav-link"
														id="pills-manufacturer-tab"
														data-toggle="pill"
														href="#pills-manufacturer"
														role="tab"
														aria-controls="pills-manufacturer"
														aria-expanded="true">
														Manufacturer
													</a>
												</li>
												<li className="nav-item">
													<a
														className="nav-link"
														id="pills-review-tab"
														data-toggle="pill"
														href="#pills-review"
														role="tab"
														aria-controls="pills-review"
														aria-expanded="true">
														Review
													</a>
												</li>
											</ul>

											<div className="tab-content" id="pills-tabContent">
												<div
													className="tab-pane border fade show active"
													id="pills-description"
													role="tabpanel"
													aria-labelledby="pills-description-tab">
													<p>
														Even the all-powerful Pointing has no control about the blind
														texts it is an almost unorthographic life One day however a
														small line of blind text by the name of Lorem Ipsum decided to
														leave for the far World of Grammar.
													</p>
													<p>
														When she reached the first hills of the Italic Mountains, she
														had a last view back on the skyline of her hometown
														Bookmarksgrove, the headline of Alphabet Village and the subline
														of her own road, the Line Lane. Pityful a rethoric question ran
														over her cheek, then she continued her way.
													</p>
													<ul>
														<li>The Big Oxmox advised her not to do so</li>
														<li>Because there were thousands of bad Commas</li>
														<li>Wild Question Marks and devious Semikoli</li>
														<li>She packed her seven versalia</li>
														<li>tial into the belt and made herself on the way.</li>
													</ul>
												</div>

												<div
													className="tab-pane border fade"
													id="pills-manufacturer"
													role="tabpanel"
													aria-labelledby="pills-manufacturer-tab">
													<p>
														Even the all-powerful Pointing has no control about the blind
														texts it is an almost unorthographic life One day however a
														small line of blind text by the name of Lorem Ipsum decided to
														leave for the far World of Grammar.
													</p>
													<p>
														When she reached the first hills of the Italic Mountains, she
														had a last view back on the skyline of her hometown
														Bookmarksgrove, the headline of Alphabet Village and the subline
														of her own road, the Line Lane. Pityful a rethoric question ran
														over her cheek, then she continued her way.
													</p>
												</div>

												<div
													className="tab-pane border fade"
													id="pills-review"
													role="tabpanel"
													aria-labelledby="pills-review-tab">
													<div className="row">
														<div className="col-md-8">
															<h3 className="head">23 Reviews</h3>
															<div className="review">
																<div
																	className="user-img"
																	style={{
																		backgroundImage:
																			'url(assets/images/person1.jpg)'
																	}}
																/>
																<div className="desc">
																	<h4>
																		<span className="text-left">Jacob Webb</span>
																		<span className="text-right">
																			14 March 2018
																		</span>
																	</h4>
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-half" />
																			<i className="icon-star-empty" />
																		</span>
																		<span className="text-right">
																			<a href="#" className="reply">
																				<i className="icon-reply" />
																			</a>
																		</span>
																	</p>
																	<p>
																		When she reached the first hills of the Italic
																		Mountains, she had a last view back on the
																		skyline of her hometown Bookmarksgrov
																	</p>
																</div>
															</div>
															<div className="review">
																<div
																	className="user-img"
																	style={{
																		backgroundImage:
																			'url(assets/images/person2.jpg)'
																	}}
																/>
																<div className="desc">
																	<h4>
																		<span className="text-left">Jacob Webb</span>
																		<span className="text-right">
																			14 March 2018
																		</span>
																	</h4>
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-half" />
																			<i className="icon-star-empty" />
																		</span>
																		<span className="text-right">
																			<a href="#" className="reply">
																				<i className="icon-reply" />
																			</a>
																		</span>
																	</p>
																	<p>
																		When she reached the first hills of the Italic
																		Mountains, she had a last view back on the
																		skyline of her hometown Bookmarksgrov
																	</p>
																</div>
															</div>
															<div className="review">
																<div
																	className="user-img"
																	style={{
																		backgroundImage:
																			'url(assets/images/person3.jpg)'
																	}}
																/>
																<div className="desc">
																	<h4>
																		<span className="text-left">Jacob Webb</span>
																		<span className="text-right">
																			14 March 2018
																		</span>
																	</h4>
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-half" />
																			<i className="icon-star-empty" />
																		</span>
																		<span className="text-right">
																			<a href="#" className="reply">
																				<i className="icon-reply" />
																			</a>
																		</span>
																	</p>
																	<p>
																		When she reached the first hills of the Italic
																		Mountains, she had a last view back on the
																		skyline of her hometown Bookmarksgrov
																	</p>
																</div>
															</div>
														</div>
														<div className="col-md-4">
															<div className="rating-wrap">
																<h3 className="head">Give a Review</h3>
																<div className="wrap">
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			(98%)
																		</span>
																		<span>20 Reviews</span>
																	</p>
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-empty" />
																			(85%)
																		</span>
																		<span>10 Reviews</span>
																	</p>
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-empty" />
																			<i className="icon-star-empty" />
																			(70%)
																		</span>
																		<span>5 Reviews</span>
																	</p>
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-full" />
																			<i className="icon-star-empty" />
																			<i className="icon-star-empty" />
																			<i className="icon-star-empty" />
																			(10%)
																		</span>
																		<span>0 Reviews</span>
																	</p>
																	<p className="star">
																		<span>
																			<i className="icon-star-full" />
																			<i className="icon-star-empty" />
																			<i className="icon-star-empty" />
																			<i className="icon-star-empty" />
																			<i className="icon-star-empty" />
																			(0%)
																		</span>
																		<span>0 Reviews</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
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

			<script>
				{/* {$(document).ready(function() {
					var quantitiy = 0;
					$('.quantity-right-plus').click(function(e) {
						// Stop acting like a button
						e.preventDefault();
						// Get the field name
						var quantity = parseInt($('#quantity').val());

						// If is not undefined

						$('#quantity').val(quantity + 1);

						// Increment
					});

					$('.quantity-left-minus').click(function(e) {
						// Stop acting like a button
						e.preventDefault();
						// Get the field name
						var quantity = parseInt($('#quantity').val());

						// If is not undefined

						// Increment
						if (quantity > 0) {
							$('#quantity').val(quantity - 1);
						}
					});
				})} */}
			</script>
		</Fragment>
	);
}

export default ProductDetail;
