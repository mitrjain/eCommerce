import React, { Fragment, useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';

/**
 * This is the individual product page that gives details on a selected product. 
 * Users can also add this product to the cart and proceed to checkout.
 */
function ProductDetail() {
	const [ currentItem, setCurrentItem ] = useState({});
	const [ apiData, setApiData ] = useState({});
	const [ selectedSize, setSelectedSize ] = useState(null);
	const { gender, id } = useParams();

	const { cartItems, setCartItems, quantity, setQuantity, quantityArray, setQuantityArray } = useContext(CartContext);

	// useEffect(() => {
	// 	const getProducts = async () => {
	// 		await axios
	// 			.get(`http://localhost:3001/products?gender=${gender}`)
	// 			.then((res) =>
	// 				res.data.map((product, idx) => (product.productId === id ? setCurrentItem(product) : ''))
	// 			);
	// 	};
	// 	getProducts();
	// }, []);

	useEffect(() => {
		const getProducts = async () => {
			await axios.get(`http://localhost:3001/products/${id}`).then((res) =>
				// res.data.map((product, idx) => (product.productId === id ? setCurrentItem(product) : ''))
				setApiData(res.data)
			);
		};
		getProducts();
	}, []);

	useEffect(
		() => {
			const setCurrObj = () => {
				if (Object.keys(apiData).length === 0) {
					console.log('Hello World');
				} else {
					// const quantityToPass = apiData._id;
					// console.log('QUANTITY TO PASS: ' + quantityToPass);
					const obj = {
						productName: apiData.name,
						productId: apiData._id,
						brandId: apiData.brandId,
						genderId: apiData.gender,
						productDesc: apiData.desc,
						image: apiData.sizes[0].colors[0].productDetail.smallImgTile,
						price: apiData.sizes[0].colors[0].productDetail.price,
						sizes: apiData.sizes,
						selectedSize: selectedSize,
						quantityToPass: quantity
					};

					setCurrentItem(obj);
				}
			};

			setCurrObj();
		},
		[ apiData, selectedSize, quantity ]
	);

	const handleAddToCartClick = () => {
		if (Object.keys(currentItem).length > 0 && !cartItems.includes(currentItem) && selectedSize) {
			console.log(currentItem);
			setCartItems((cartItems) => [ ...cartItems, currentItem ]);

			let obj = {};
			obj[currentItem.productId] = quantity;
			setQuantityArray((items) => [ ...items, obj ]);
		}
	};

	const handleQuantityPlusClick = () => {
		if (quantity < apiData.maxQtyLmt) {
			setQuantity(quantity + 1);
		}
	};

	const handleQuantityMinusClick = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleSizeClick = (e, inputSize) => {
		e.currentTarget.classList.toggle('active');
		setSelectedSize(inputSize);
		console.log('CLasslist', e.currentTarget.classList);
	};

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
												// src="/assets/images/item-1.jpg"
												src={`/assets/images/item-10.jpg`}
												className="img-fluid"
												alt="Free html5 bootstrap 4 template"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="product-desc">
									<h3>{currentItem.productName}</h3>
									<p className="price">
										<span>${currentItem.price}</span>
										<span className="rate">
											<i className="icon-star-full" />
											<i className="icon-star-full" />
											<i className="icon-star-full" />
											<i className="icon-star-full" />
											<i className="icon-star-half" />
											(74 Rating)
										</span>
									</p>
									<p>{currentItem.productDesc}</p>
									<div className="size-wrap">
										<div className="block-26 mb-2">
											<h4>Size</h4>
											<ul>
												{Object.keys(currentItem).length !== 0 ? (
													currentItem.sizes.map((product, idx) => (
														<li
															className=""
															key={idx}
															onClick={(e) => handleSizeClick(e, product.size)}>
															<a href="#">{product.size}</a>
														</li>
													))
												) : (
													''
												)}
											</ul>
										</div>
										{/* <div className="block-26 mb-4">
											<h4>Width</h4>
											<ul>
												<li>
													<a href="#">M</a>
												</li>
												<li>
													<a href="#">W</a>
												</li>
											</ul>
										</div> */}
									</div>
									<div className="input-group mb-4">
										<span className="input-group-btn">
											<button
												type="button"
												onClick={handleQuantityMinusClick}
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
											value={quantity}
											min="1"
											max="100"
										/>
										<span className="input-group-btn ml-1">
											<button
												type="button"
												onClick={handleQuantityPlusClick}
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
												<a
													href="#"
													className="btn btn-primary btn-addtocart"
													onClick={handleAddToCartClick}>
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
