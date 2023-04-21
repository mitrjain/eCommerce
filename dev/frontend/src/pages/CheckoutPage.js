import React, { Fragment } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import { Link } from 'react-router-dom';
import Checkout from './checkoutTemplate/Checkout';

function CheckoutPage() {
	return (
		<Fragment>
			<div id="page">
				<nav className="colorlib-nav" role="navigation">
					<div className="top-menu">
						<div className="container">
							<Header />
							<NavBar />
						</div>
						<Sale />
					</div>
				</nav>

				<div className="breadcrumbs">
					<div className="container">
						<div className="row">
							<div className="col">
								<p className="bread">
									<span>
										<Link to="/">Home</Link>
									</span>{' '}
									/ <span>Checkout</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-product" style={{ paddingBottom: '0' }}>
					<div className="container">
						<div className="row row-pb-lg">
							<div className="col-md-10 offset-md-1">
								<div className="process-wrap">
									<div className="process text-center ">
										<p>
											<span>01</span>
										</p>
										<h3>Shopping Cart</h3>
									</div>
									<div className="process text-center active">
										<p>
											<span>02</span>
										</p>
										<h3>Checkout</h3>
									</div>
									<div className="process text-center">
										<p>
											<span>03</span>
										</p>
										<h3>Order Complete</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Checkout />
			</div>
		</Fragment>
	);
}

export default CheckoutPage;
