import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Sale from '../components/Sale';
import Select from 'react-select';
import validator from 'validator';
import { Link } from 'react-router-dom';

const Signup = () => {
	const options = [ { value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' } ];
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ seller, setSeller ] = useState('');

	const handleSelectionChange = (input) => {
		setSeller(input.value);
	};

	return (
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
							<span>
								<Link to="/login">Login</Link>
							</span>
						</div>
						<div className="one-eight text-center px-4">
							<span>
								<Link style={{ color: '#88c8bc', fontWeight: 'bold' }} to="/signup">
									Signup
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
			<form style={{ marginLeft: '29.5%' }}>
				<span className="form-inline">
					<label htmlFor="username" className="col-md-2">
						{'Enter Username: '}
					</label>
					<input
						type="text"
						id="username"
						className="col-md-3 px-3 py-2 my-2"
						placeholder="Enter Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</span>
				<span className="form-inline">
					<label htmlFor="email" className="col-md-2">
						{'Enter email:'}
					</label>
					<input
						type="email"
						id="email"
						className="col-md-3 px-3 py-2 my-4"
						placeholder="Enter Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</span>
				<span className="form-inline">
					<label htmlFor="password" className="col-md-2">
						{'Enter Password: '}
					</label>
					<input
						type="password"
						id="password"
						className="col-md-3 px-3 py-2 my-2"
						placeholder="Enter Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</span>
				<span className="form-inline">
					<label htmlFor="confirm-password" className="col-md-2">
						{'Confirm Password: '}
					</label>
					<input
						type="password"
						id="confirm-password"
						className="col-md-3 px-3 py-2 my-4"
						placeholder="Confirm Password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</span>
				<span className="form-inline">
					<label htmlFor="sellerSelect" className="col-md-2">
						{'Are you a seller?'}
					</label>
					<Select
						id="sellerSelect"
						className="col-md-3 px-0 py-2"
						options={options}
						onChange={handleSelectionChange}
					/>
				</span>
				<div className="col-sm-3" style={{ marginLeft: '23.5%' }}>
					<input type="submit" value="Signup" className="btn btn-primary my-3" />
				</div>
				<br />
				<br />
				<br />
				<br />
			</form>
		</div>
	);
};

export default Signup;
