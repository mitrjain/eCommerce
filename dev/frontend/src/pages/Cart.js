import React, { Fragment, useState, useContext, useEffect } from 'react';
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
	const [ subtotal, setSubtotal ] = useState(0);
	const [ deliveryCharge, setDeliveryCharge ] = useState(7);
	const [ discount, setDiscount ] = useState(0);

	useEffect(
		() => {
			const calculateSubtotal = () => {
				let total = 0;
				if (cartItems) {
					cartItems.map((item) => (total += item.price * item.quantityToPass));
					console.log('Total', total);
					setSubtotal(total);
					setDiscount(subtotal * 0.2);
				}
			};

			calculateSubtotal();
		},
		[ cartItems, subtotal ]
	);

	const handleCheckoutClick = async () => {};
	return (
		<Fragment>
			<div id="page">
				<nav className="colorlib-nav" role="navigation">
					<div className="top-menu">
						<div className="container">
							<Header />
							<NavBar activePage="cart" />
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
												image={cartItem.image}
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
								<Link to="/checkout" className="btn btn-primary" onClick={handleCheckoutClick}>
									Checkout
								</Link>
							</div>
						</div>
						<div className="row row-pb-lg">
							<div className="col-md-12">
								<div className="total-wrap">
									<div className="row">
										<div className="col-sm-4 text-center">
											<div className="total">
												<div className="sub">
													<p>
														<span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
													</p>
													<p>
														<span>Delivery:</span>{' '}
														<span>
															${cartItems.length > 0 ? deliveryCharge.toFixed(2) : '0.00'}
														</span>
													</p>
													<p>
														<span>Discount:</span> <span>${discount.toFixed(2)}</span>
													</p>
												</div>
												<div className="grand-total">
													<p>
														<span>
															<strong>Total:</strong>
														</span>{' '}
														<span>
															${cartItems.length > 0 ? (
																(subtotal + deliveryCharge + discount).toFixed(2)
															) : (
																'0.00'
															)}
														</span>
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
