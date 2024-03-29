// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Index from './pages/index';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import SellerPage from './pages/SellerPage';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ThankYou from './pages/ThankYou';
import OrderComplete from './pages/OrderComplete';
import { CartContext } from './contexts/CartContext';

function App() {
	const [ cartItems, setCartItems ] = useState([]);
	const [ quantity, setQuantity ] = useState(1);

	// A quantity array that maps productId: quantity
	const [ quantityArray, setQuantityArray ] = useState([]);
	return (
		<div className="App">
			<CartContext.Provider
				value={{
					cartItems,
					setCartItems,
					quantity,
					setQuantity,
					quantityArray,
					setQuantityArray
				}}>
				<Router>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/about" element={<About />} />
						<Route path="/men" element={<Men />} />
						<Route path="/women" element={<Women />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/product-detail/:gender/:id" element={<ProductDetail />} />
						<Route path="/seller" element={<SellerPage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/thankyou" element={<ThankYou />} />
						<Route path="/order-complete" element={<OrderComplete />} />
					</Routes>
				</Router>
			</CartContext.Provider>
		</div>
	);
}

export default App;
