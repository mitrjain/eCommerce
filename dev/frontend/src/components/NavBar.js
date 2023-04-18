import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

/**
 * This is the navigation bar for the website. It contains links to other pages in the site. 
 */
function NavBar() {
	const { cartItems } = useContext(CartContext);
	const [ active, setActive ] = useState(false);

	const handleNavClick = () => {};
	return (
		// These are the links to the different pages in the website
		<div className="row">
			<div className="col-sm-12 text-left menu-1">
				<ul>
					<li className="active">
						<Link to="/">Home</Link>
					</li>
					<li className="inactive">
						<Link to="/men">Men</Link>
					</li>
					<li>
						<Link to="/women">Women</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/seller">Seller</Link>
					</li>
					<li className="cart">
						<Link style={{ color: '#88c8bc', fontWeight: 'bold' }} to="/login">
							Login/Signup
						</Link>
					</li>
					<li className="cart">
						<Link to="/cart">
							<i className="icon-shopping-cart" /> Cart [{cartItems ? cartItems.length : 0}]
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
