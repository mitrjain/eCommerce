import React, { Fragment } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import { Link } from 'react-router-dom';

const Login = () => {
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
									/ <span>Login/Signup</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-pb-lg" style={{ justifyContent: 'center' }}>
					<div className="col-md-0">
						<div className="product-name d-flex">
							<div className="one-eight text-center px-4">
								<span style={{ color: '#88c8bc', fontWeight: 'bold' }}>Login</span>
							</div>
							<div className="one-eight text-center px-4">
								<span>
									<Link to="/signup">Signup</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
				<form action="#" style={{ marginLeft: '29.5%' }}>
					<span className="form-inline">
						<label htmlFor="productName" className="col-md-2">
							{' '}
						</label>
						<input
							type="text"
							id="productName"
							className="col-md-3 px-3 py-2 my-2"
							placeholder="Enter Username"
						/>
					</span>
					<span className="form-inline">
						<label htmlFor="productName" className="col-md-2">
							{' '}
						</label>
						<input
							type="text"
							id="productName"
							className="col-md-3 px-3 py-2 my-4"
							placeholder="Enter Password"
						/>
					</span>
					<div className="col-sm-3" style={{ marginLeft: '23.5%' }}>
						<input type="submit" value="Submit" className="btn btn-primary" />
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default Login;
