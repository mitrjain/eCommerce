import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';


function Seller() {
    return ( 
        <Fragment> 
            <div id="seller"> 
                <nav className="colorlib-nav" role="navigation">
					<div className="top-menu">
						<div className="container">
							<Header />
							<NavBar />
                            <h1 className="text-center m-5"> Want to sell another product? Add one here </h1>
                            <div>
                                <form action="#" className="text-center">
                                    <div>
                                        <label for="productName" className="col-md-2"> Name: </label>
                                        <input type="text" id="productName" className="col-md-7" placeholder="Enter name of the product"/>
                                    </div>
                                    <div>
                                        <label for="brandName" className="col-md-2"> Brand Name: </label>
                                        <select className="dropdown" placeholder="Select brand name: ">
                                            <option value="Nike"> Nike </option>
                                            <option value="Puma"> Puma </option>
                                        </select>
                                    </div>
                                </form>
                            </div>
						</div>
					</div>
				</nav>
            </div>
        </Fragment>
    );
}
export default Seller;
