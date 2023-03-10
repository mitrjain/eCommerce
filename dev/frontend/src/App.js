// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Index from './pages/index';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Seller from './pages/Seller';
import ProductDetail from './pages/ProductDetail';
import { CartContext } from './contexts/CartContext';

function App() {
	const [ cartItems, setCartItems ] = useState([]);
	const [ quantity, setQuantity ] = useState('1');
	return (
		<div className="App">
			<CartContext.Provider value={{ cartItems, setCartItems, quantity, setQuantity }}>
				<Router>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/about" element={<About />} />
						<Route path="/men" element={<Men />} />
						<Route path="/women" element={<Women />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/product-detail/:gender/:id" element={<ProductDetail />} />
						<Route path="/seller" element={<Seller />} />
					</Routes>
				</Router>
			</CartContext.Provider>
		</div>
	);
}

export default App;
