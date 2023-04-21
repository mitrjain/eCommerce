import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import TrustedPartners from '../components/TrustedPartners';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

function Women() {
	// Contains the product details for the products rendered on this page
	const [ products, setProducts ] = useState([]);
	const [ sports, setSports ] = useState([]);
	const [ dress, setDress ] = useState([]);
	const [ casuals, setCasuals ] = useState([]);
	const [ brands, setBrands ] = useState([]);
	const [ styles, setStyles ] = useState([]);
	const [ material, setMaterial ] = useState([]);
	const images = [
		'assets/images/item-1.jpg',
		'assets/images/item-2.jpg',
		'assets/images/item-3.jpg',
		'assets/images/item-4.jpg',
		'assets/images/item-5.jpg',
		'assets/images/item-6.jpg',
		'assets/images/item-7.jpg'
	];

	useEffect(() => {
		const getWomensProducts = async () => {
			await axios
				.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/products?gender=63f40017c36bbddba5ec9b3f`)
				.then((res) => setProducts(res.data));
		};

		const getBrands = async () => {
			await axios.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/brands`).then((res) => setBrands(res.data));
		};

		getWomensProducts();
		getBrands();
	}, []);

	useEffect(() => {
		const getStyles = async () => {
			await axios
				.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/categoryTypes/63f400e6c36bbddba5ec9b41`)
				.then((res) => setStyles(res.data));
		};

		getStyles();
	}, []);

	useEffect(() => {
		const getMaterial = async () => {
			await axios
				.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/categoryTypes/63f40129c36bbddba5ec9b42`)
				.then((res) => setMaterial(res.data));
		};

		getMaterial();
	}, []);

	const handleOccasionClick = async (categoryId) => {
		await axios
			.get(
				`http://${process.env
					.REACT_APP_HOST_NAME}:3001/products?gender=63f40017c36bbddba5ec9b3f&ocassion=${categoryId}`
			)
			.then((res) => setProducts(res.data));
	};

	const handleBrandClick = async (brandName) => {
		// Get brands
		let brands;
		await axios.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/brands`).then((res) => (brands = res.data));

		brands.map(
			async (brand) =>
				brand.name == brandName
					? await axios
							.get(
								`http://${process.env
									.REACT_APP_HOST_NAME}:3001/products?gender=63f40017c36bbddba5ec9b3f&brands=${brand.brandId}`
							)
							.then((res) => setProducts(res.data))
					: ''
		);
	};

	const handleStyleClick = async (categoryId) => {
		await axios
			.get(
				`http://${process.env
					.REACT_APP_HOST_NAME}:3001/products?gender=63f3ff99c36bbddba5ec9b3e&style=${categoryId}`
			)
			.then((res) => setProducts(res.data));
	};

	const handleMaterialClick = async (categoryId) => {
		await axios
			.get(
				`http://${process.env
					.REACT_APP_HOST_NAME}:3001/products?gender=63f3ff99c36bbddba5ec9b3e&material=${categoryId}`
			)
			.then((res) => setProducts(res.data));
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
									/ <span>Women</span>
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
									<h2>Women's</h2>
								</div>
								<br />
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
										style={{ backgroundImage: 'url(assets/images/img_bg_2.jpg)' }}>
										<h2>Casuals</h2>
										<p>
											<a
												onClick={() => handleOccasionClick('643758287e6ecce0c965a249')}
												href="#"
												className="btn btn-primary btn-lg">
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
											<a
												onClick={() => handleOccasionClick('643757277e6ecce0c965a248')}
												href="#"
												className="btn btn-primary btn-lg">
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
											<a
												onClick={() => handleOccasionClick('63f40179c36bbddba5ec9b44')}
												href="#"
												className="btn btn-primary btn-lg">
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
							<div className="col-lg-3 col-xl-3">
								<div className="row">
									<div className="col-sm-12">
										<div className="side border mb-1">
											<a
												href="#"
												style={{ color: '#88c8bc', fontWeight: 'bold' }}
												onClick={() => window.location.reload(true)}>
												Show All
											</a>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="side border mb-1">
											<h3>Brand</h3>
											<ul>
												{brands.map((brand, idx) => (
													<li key={idx}>
														<a href="#" onClick={() => handleBrandClick(brand.name)}>
															{brand.name}
														</a>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="side border mb-1">
											<h3>Size</h3>
											<div className="block-26 mb-2">
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
										</div>
									</div>
									<div className="col-sm-12">
										<div className="side border mb-1">
											<h3>Style</h3>
											<ul>
												{styles.map((style, idx) => (
													<li key={idx}>
														<a onClick={() => handleStyleClick(style.categoryId)} href="#">
															{style.name}
														</a>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="side border mb-1">
											<h3>Colors</h3>
											<ul>
												<li>
													<a href="#">Black</a>
												</li>
												<li>
													<a href="#">White</a>
												</li>
												<li>
													<a href="#">Blue</a>
												</li>
												<li>
													<a href="#">Red</a>
												</li>
												<li>
													<a href="#">Green</a>
												</li>
												<li>
													<a href="#">Grey</a>
												</li>
												<li>
													<a href="#">Orange</a>
												</li>
												<li>
													<a href="#">Cream</a>
												</li>
												<li>
													<a href="#">Brown</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="side border mb-1">
											<h3>Material</h3>
											<ul>
												{material.map((item, idx) => (
													<li key={idx}>
														<a
															onClick={() => handleMaterialClick(item.categoryId)}
															href="#">
															{item.name}
														</a>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-9 col-xl-9">
								<div className="row row-pb-md">
									{/* Loops through the product details and displays them as a ProductCard component */}
									{products.map((product, idx) => (
										<ProductCard
											smallImgTile={product.smallImgTile}
											name={product.productName}
											price={product.price}
											key={idx}
											productId={product.productId}
											genderId="63f40017c36bbddba5ec9b3f"
										/>
									))}
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
					</div>
				</div>
				<TrustedPartners />
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

export default Women;
