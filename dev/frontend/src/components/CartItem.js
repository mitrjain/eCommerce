import React from 'react';

const CartItem = ({ image, productName, price }) => {
	return (
		<div className="product-cart d-flex">
			<div className="one-forth">
				<div className="product-img" style={{ backgroundImage: `url(${image})` }} />
				<div className="display-tc">
					<h3>{productName}</h3>
				</div>
			</div>
			<div className="one-eight text-center">
				<div className="display-tc">
					<span className="price">${price}</span>
				</div>
			</div>
			<div className="one-eight text-center">
				<div className="display-tc">
					<input
						type="text"
						id="quantity"
						name="quantity"
						className="form-control input-number text-center"
						value="1"
						min="1"
						max="100"
					/>
				</div>
			</div>
			<div className="one-eight text-center">
				<div className="display-tc">
					<span className="price">$120.00</span>
				</div>
			</div>
			<div className="one-eight text-center">
				<div className="display-tc">
					<a href="#" className="closed" />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
