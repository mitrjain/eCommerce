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
	const [ selectedColor, setSelectedColor ] = useState(null);
	const [ sizeColorArray, setSizeColorArray ] = useState([]);
	const { gender, id } = useParams();

	const { cartItems, setCartItems, quantity, setQuantity, quantityArray, setQuantityArray } = useContext(CartContext);

	useEffect(() => {
		const getProducts = async () => {
			await axios
				.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/products/${id}`)
				.then((res) => setApiData(res.data));
		};
		getProducts();
	}, []);

	useEffect(
		() => {
			const setCurrObj = () => {
				if (Object.keys(apiData).length === 0) {
					console.log('Hello World');
				} else {
					const obj = {
						productName: apiData.name,
						productId: apiData._id,
						brandId: apiData.brandId,
						genderId: apiData.gender,
						productDesc: apiData.desc,
						// image: apiData.sizes[0].colors[0].productDetail.smallImgTile,
						image: apiData.sizes[0].colors[0].productDetail.smallImgTile,
						price: apiData.sizes[0].colors[0].productDetail.price,
						sizes: apiData.sizes,
						selectedSize: selectedSize,
						selectedColor: selectedColor,
						quantityToPass: quantity
					};

					setCurrentItem(obj);
				}
			};

			setCurrObj();
		},
		[ apiData, selectedSize, quantity, selectedColor ]
	);

	const handleAddToCartClick = (e) => {
		if (Object.keys(currentItem).length > 0 && !cartItems.includes(currentItem) && selectedSize && selectedColor) {
			console.log(currentItem);
			setCartItems((cartItems) => [ ...cartItems, currentItem ]);

			let obj = {};
			obj[currentItem.productId] = quantity;
			setQuantityArray((items) => [ ...items, obj ]);
		}
		if (selectedSize === null) {
			alert('Please select a size!');
		} else if (selectedColor === null) {
			alert('Please select a color!');
		}
	};

	useEffect(
		() => {
			const sendAddToCartRequest = () => {
				if (cartItems.length > 0) {
					cartItems.map(
						async (item) =>
							await axios
								.post(`http://${process.env.REACT_APP_HOST_NAME}:3001/cart`, {
									productId: item.productId,
									brandId: item.brandId,
									name: item.productName,
									desc: item.productDesc,
									sellerId: '1',
									qty: item.quantityToPass,
									size: item.selectedSize,
									color: item.selectedColor,
									price: item.price,
									smallImgTile: item.image,
									genderId: item.genderId
								})
								.then((res) => console.log('Posted to Add to Cart'))
					);
				}
			};

			sendAddToCartRequest();
		},
		[ cartItems ]
	);

	useEffect(
		() => {
			const getColorsObj = () => {
				if (Object.keys(currentItem).length !== 0 && sizeColorArray.length === 0) {
					currentItem.sizes.map((product) => {
						const obj = {};
						obj[product.size] = product.colors;
						setSizeColorArray((oldArray) => [ ...oldArray, obj ]);
					});
				}
			};

			getColorsObj();
		},
		[ currentItem ]
	);

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
		e.preventDefault();
		e.currentTarget.classList.toggle('active');
		if (inputSize === selectedSize) {
			setSelectedSize(null);
		} else {
			setSelectedSize(inputSize);
		}
	};

	const handleColorClick = (e, inputColor) => {
		e.preventDefault();
		e.currentTarget.classList.toggle('active');
		console.log('COLORRR: ', inputColor);
		if (inputColor === selectedColor) {
			setSelectedColor(null);
		} else {
			setSelectedColor(inputColor);
		}
	};

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
												src={currentItem.image}
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
										<div className="block-26 mb-2">
											<h4>
												Color <span>(Select Size to view Color)</span>
											</h4>
											<ul>
												{selectedSize !== null ? (
													sizeColorArray.map((sizes, idx) => {
														if (sizes[selectedSize] != null) {
															return sizes[selectedSize].map((item, idx) => (
																<li
																	className=""
																	key={idx}
																	onClick={(e) => handleColorClick(e, item.color)}>
																	<a href="#">{item.color}</a>
																</li>
															));
														}
													})
												) : (
													''
												)}
											</ul>
										</div>
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
											// min="1"
											// max="100"
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
													to="/cart"
													className="btn btn-primary btn-addtocart"
													onClick={(e) => handleAddToCartClick(e)}>
													<i className="icon-shopping-cart" /> Add to Cart
												</a>
											</p>
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
