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
                                        <input type="text" id="productName" className="col-md-7 py-4" placeholder="Enter name of the product"/>
                                    </div>
                                    <div>
                                        <label for="brandName" className="col-md-2"> Brand Name: </label>
                                        <select id="brandName" className="col-md-7 my-4 px-2 py-3" placeholder="Select brand name: ">
                                            <option selected disabled> Choose a brand </option>
                                            <option className="dropdown-item" value="Nike"> Nike </option>
                                            <option className="dropdown-item" value="Puma"> Puma </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="desc" className="col-md-2"> Description: </label>
                                        <input type="text" id="desc" className="col-md-7 py-4" placeholder="Enter description of the product"/>
                                    </div>
                                    <div>
                                        <label for="maxqty" className="col-md-2"> Maximum Quantity: </label>
                                        <input type="number" id="maxqty" className="my-4 col-md-7 py-2"/>
                                    </div>
                                    <div>
                                        <h4 className="text-left">Specification: </h4>
                                        <div>
                                            <label for="productcolor" className="col-md-2"> Color: </label>
                                            <input type="text" id="productcolor" className="my-4 col-md-7 py-3"/>
                                        </div>
                                        <div>
                                            <label for="productsizes" className="col-md-2"> Sizes: </label>
                                            <input type="text" id="productcolor" className="col-md-7 py-3"/>
                                        </div>
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
