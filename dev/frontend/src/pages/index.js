import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import TrustedPartners from '../components/TrustedPartners';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import HomeCollection from '../components/HomeCollection';
import BestSellers from '../components/BestSellers';

const Index = () => {
	return (
		<Fragment>
			<div id="page">
				<nav className="colorlib-nav" role="navigation">
					<div className="top-menu">
						<div className="container">
							<Header />
							<NavBar activePage="home" />
						</div>
						<Sale />
					</div>
				</nav>
				<aside>
					<div className="col-sm-6 offset-sm-3 text-center">
						<img
							src="assets/images/img_bg_1.jpg"
							className="img-fluid"
							alt="Free html5 bootstrap 4 template"
						/>
						<div className="card-img-overlay">
							<h2 className="head-2">Shoes</h2>
							<h2 className="head-3">Collection</h2>
							<p className="category">
								<span>New trending shoes</span>
							</p>
							<p>
								<Link to="/men" className="btn btn-primary">
									Shop Collection
								</Link>
							</p>
						</div>
					</div>
				</aside>
				<Intro />
				<HomeCollection />

				<BestSellers />
			</div>

			<div className="gototop js-top">
				<a href="#" className="js-gotop">
					<i className="ion-ios-arrow-up" />
				</a>
			</div>
		</Fragment>
	);
};

export default Index;
