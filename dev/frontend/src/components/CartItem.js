import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';

/**
 * This component is the individual items that are on the cart. It is stored in a list of items that are currently in the cart. 
 * @param {*} Takes props from Cart and renders out the component based on the props.  
 */
const CartItem = ({ image, productName, price, productId }) => {
	const { cartItems, setCartItems, quantity, setQuantity, quantityArray, setQuantityArray } = useContext(CartContext);

	const getKeyByValue = (object, value) => {
		return Object.keys(object).find((key) => object[key] === value);
	};
	// Removes item from cart
	const removeItem = async () => {
		cartItems.map(
			async (item) =>
				item.productId === productId
					? await axios.post(`http://${process.env.REACT_APP_HOST_NAME}:3001/cart`, {
							productId: item.productId,
							brandId: item.brandId,
							name: item.productName,
							desc: item.productDesc,
							sellerId: '1',
							qty: 0,
							size: item.selectedSize,
							color: 'red',
							price: item.price,
							smallImgTile: item.image,
							genderId: item.genderId
						})
					: ''
		);
		setCartItems((current) => current.filter((item) => item.productId !== productId));

		setQuantityArray((current) => current.filter((arr) => getKeyByValue(arr, arr[productId]) !== productId));
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
					<span className="price">{quantityArray.map((item) => item[productId])}</span>
				</div>
			</div>
			<div className="one-eight text-center">
				<div className="display-tc">
					<span className="price">
						${quantityArray.map((item) => (item[productId] ? Number(item[productId]) * price : ''))}
					</span>
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
