import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import axios from 'axios';

function Cart() {
	const { cartItems, setCartItems, quantityArray } = useContext(CartContext);
	// const [ subtotal, setSubtotal ] = useState(0);
	let subtotal = 0;

	// const calculateSubtotal = () => {
	// 	cartItems.map((item) => setSubtotal(subtotal + Number(quantityArray[item.productId]) * item.price));
	// };

	const handleCheckoutClick = async () => {
		if (cartItems) {
			cartItems.map(
				async (item) =>
					await axios
						.post('http://localhost:3001/cart', {
							productId: item.productId,
							brandId: item.brandId,
							name: item.productName,
							desc: item.productDesc,
							sellerId: '1',
							qty: item.quantityToPass,
							size: 8,
							color: 'red',
							price: item.price,
							smallImgTile: item.image,
							genderId: item.genderId
						})
						.then(
							async (res) =>
								await axios
									.get('http://localhost:3001/cart')
									.then((res) => console.log('Get all cart', res.data))
						)
						.catch((err) => console.log('AXIOS ERROR PROBLEM'))
			);

			await axios
				.get('http://localhost:3001/cart')
				.then((res) => console.log('Get all cart (Outside)', res.data));
		}
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
									/ <span>Shopping Cart</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-product">
					<div className="container">
						<div className="row row-pb-lg">
							<div className="col-md-10 offset-md-1">
								<div className="process-wrap">
									<div className="process text-center active">
										<p>
											<span>01</span>
										</p>
										<h3>Shopping Cart</h3>
									</div>
									<div className="process text-center">
										<p>
											<span>02</span>
										</p>
										<h3>Checkout</h3>
									</div>
									<div className="process text-center">
										<p>
											<span>03</span>
										</p>
										<h3>Order Complete</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="row row-pb-lg">
							<div className="col-md-12">
								<div className="product-name d-flex">
									<div className="one-forth text-left px-4">
										<span>Product Details</span>
									</div>
									<div className="one-eight text-center">
										<span>Price</span>
									</div>
									<div className="one-eight text-center">
										<span>Quantity</span>
									</div>
									<div className="one-eight text-center">
										<span>Total</span>
									</div>
									<div className="one-eight text-center px-4">
										<span>Remove</span>
									</div>
								</div>
								{cartItems.map(
									(cartItem, idx) =>
										cartItem ? (
											<CartItem
												image="assets/images/item-6.jpg"
												productName={cartItem.productName}
												price={cartItem.price}
												key={idx}
												productId={cartItem.productId}
											/>
										) : (
											''
										)
								)}
							</div>
							<div className="col-sm-3">
								{/* <input
									onClick={handleCheckoutClick}
									type="submit"
									value="Checkout"
									className="btn btn-primary"
								/> */}
								<Link to="/checkout" className="btn btn-primary" onClick={handleCheckoutClick}>
									Checkout
								</Link>
							</div>
						</div>
						<div className="row row-pb-lg">
							<div className="col-md-12">
								<div className="total-wrap">
									<div className="row">
										<div className="col-sm-8">
											<form action="#">
												<div className="row form-group">
													<div className="col-sm-9">
														<input
															type="text"
															name="quantity"
															className="form-control input-number"
															placeholder="Your Coupon Number..."
														/>
													</div>
													<div className="col-sm-3">
														<input
															type="submit"
															value="Apply Coupon"
															className="btn btn-primary"
														/>
													</div>
												</div>
											</form>
										</div>
										<div className="col-sm-4 text-center">
											<div className="total">
												<div className="sub">
													<p>
														<span>Subtotal:</span> <span>$0</span>
													</p>
													<p>
														<span>Delivery:</span> <span>$0.00</span>
													</p>
													<p>
														<span>Discount:</span> <span>$45.00</span>
													</p>
												</div>
												<div className="grand-total">
													<p>
														<span>
															<strong>Total:</strong>
														</span>{' '}
														<span>$450.00</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>Related Products</h2>
							</div>
						</div>
						<div className="row">
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

export default Cart;
