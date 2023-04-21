import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

/**
 * This is the navigation bar for the website. It contains links to other pages in the site. 
 */
function NavBar({ activePage }) {
	const { cartItems } = useContext(CartContext);

	const handleMouseEnter = (e) => {
		e.target.style.color = '#88c8bc';
	};

	const handleMouseLeave = (e) => {
		e.target.style.color = 'black';
	};

	return (
		// These are the links to the different pages in the website
		<div className="row">
			<div className="col-sm-12 text-left menu-1">
				<ul>
					<li
						onMouseEnter={(e) => handleMouseEnter(e)}
						onMouseLeave={(e) => handleMouseLeave(e)}
						className={activePage === 'home' ? 'active' : ''}>
						<Link to="/">Home</Link>
					</li>
					<li
						onMouseEnter={(e) => handleMouseEnter(e)}
						onMouseLeave={(e) => handleMouseLeave(e)}
						className={activePage === 'men' ? 'active' : ''}>
						<Link to="/men">Men</Link>
					</li>
					<li
						onMouseEnter={(e) => handleMouseEnter(e)}
						onMouseLeave={(e) => handleMouseLeave(e)}
						className={activePage === 'women' ? 'active' : ''}>
						<Link to="/women">Women</Link>
					</li>
					<li
						onMouseEnter={(e) => handleMouseEnter(e)}
						onMouseLeave={(e) => handleMouseLeave(e)}
						className={activePage === 'about' ? 'active' : ''}>
						<Link to="/about">About</Link>
					</li>
					<li
						onMouseEnter={(e) => handleMouseEnter(e)}
						onMouseLeave={(e) => handleMouseLeave(e)}
						className={activePage === 'contact' ? 'active' : ''}>
						<Link to="/contact">Contact</Link>
					</li>
					<li
						onMouseEnter={(e) => handleMouseEnter(e)}
						onMouseLeave={(e) => handleMouseLeave(e)}
						className={activePage === 'seller' ? 'active' : ''}>
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
