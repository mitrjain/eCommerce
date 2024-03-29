import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/**
 * This component takes in product details as props. This component will be used to display all the available products in any page on the website. 
 * @returns a ProductCard component using details in the props. 
 */
function ProductCard({ smallImgTile, name, price, productId, genderId }) {
	const [ image, setImage ] = useState('');

	useEffect(() => {
		const getImage = async () => {
			await axios
				.get(`http://${process.env.REACT_APP_HOST_NAME}:3001/products/${productId}`)
				.then((res) => setImage(res.data.sizes[0].colors[0].productDetail.images[0]));
		};
		getImage();
	}, []);

	return (
		<Link className="col-lg-4 mb-4 text-center" to={`/product-detail/${genderId}/${productId}`}>
			<div>
				<div className="product-entry border">
					<a href="#" className="prod-img">
						<img src={smallImgTile} className="img-fluid" alt="Free html5 bootstrap 4 template" />
					</a>
					<div className="desc">
						<h2>
							<a href="#">{name}</a>
						</h2>
						<span className="price">${price}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
