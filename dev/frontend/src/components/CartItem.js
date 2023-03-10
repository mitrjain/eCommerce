import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

/**
 * This component is the individual items that are on the cart. It is stored in a list of items that are currently in the cart. 
 * @param {*} Takes props from Cart and renders out the component based on the props.  
 */
const CartItem = ({ image, productName, price, productId }) => {
	const { cartItems, setCartItems } = useContext(CartContext);
	const removeItem = () => {
		setCartItems((current) => current.filter((item) => item.productId !== productId));
	};

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
					<a href="#" className="closed" onClick={removeItem} />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
