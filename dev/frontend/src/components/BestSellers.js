import React, { Fragment, useState, useEffect } from 'react';
import TrustedPartners from './TrustedPartners';
import Footer from './Footer';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BestSellers = () => {
	const [bestSellers, setBestSellers] = useState([]);

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
		const getBestSellers = async () => {
			await axios
				.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/products?gender=63f3ff99c36bbddba5ec9b3e&brands=63f3fb6ec36bbddba5ec9b3d`)
				.then((res) => setBestSellers(res.data));
		};
		getBestSellers();
	}, []);
	return (
		<Fragment>
			<div className="colorlib-product">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
							<h2>Best Sellers</h2>
						</div>
					</div>
					<div className="row row-pb-md">
						{bestSellers.map((product, idx) => (
							<ProductCard
								smallImgTile={images[idx]}
								name={product.productName}
								price={product.price}
								key={idx}
								productId={product.productId}
								genderId="63f3ff99c36bbddba5ec9b3e"
							/>
						))}
					</div>
				</div>
			</div>
			<TrustedPartners />

			<Footer />
		</Fragment>
	);
};

export default BestSellers;
