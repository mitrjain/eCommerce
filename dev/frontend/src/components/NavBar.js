import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * This is the navigation bar for the website. It contains links to other pages in the site. 
 */
function NavBar() {
	return (
		// These are the links to the different pages in the website
		<div className="row">
			<div className="col-sm-12 text-left menu-1">
				<ul>
					<li className="active">
						<Link to="/">Home</Link>
					</li>
					<li className="has-dropdown">
						<Link to="/men">Men</Link>
						<ul className="dropdown">
							<li>
								<a href="#">Product Detail</a>
							</li>
							<li>
								<a href="#">Shopping Cart</a>
							</li>
							<li>
								<a href="#">Checkout</a>
							</li>
							<li>
								<a href="#">Order Complete</a>
							</li>
							<li>
								<a href="#">Wishlist</a>
							</li>
						</ul>
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
					<li className="cart">
						<Link to="/cart">
							<i className="icon-shopping-cart" /> Cart [0]
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
