import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';


function Seller() {
    const sizeArray = ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

    const [checked, setChecked] = useState([]);
    const [categoryType, setCategoryType] = useState([]);
    const [specsDiv, setSpecsDiv] = useState([]);

    // Add/Remove checked item from list

    const handleChangeCategoryType = (event) => {
        setCategoryType(event.target.value);
    };

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const addDivToSpecsDiv = () => {
        if (specsDiv.length == 0) {
            setSpecsDiv([{
                spec:
                    <div>
                        <div>
                            <label for="productcolor" className="col-md-2"> Color: </label>
                            <input type="text" id="productcolor" className="my-4 col-md-7 py-3" />
                        </div>
                        <div>
                            <label for="sizes" className="col-md-2"> Sizes: </label>
                            {
                                sizeArray.map((item, index) => (
                                    <div key={index}>
                                        <input value={item} type="checkbox" onChange={handleCheck}></input>
                                        <span> {item} </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <label htmlFor="price" className="col-md-2"> Price: </label>
                            <input type="number" id="price" className="my-4 col-md-7 py-2" />
                        </div>
                    </div>
            }])
        } else {
            setSpecsDiv((prev) => [...prev, {
                spec:
                    <div>
                        <div>
                            <label for="productcolor" className="col-md-2"> Color: </label>
                            <input type="text" id="productcolor" className="my-4 col-md-7 py-3" />
                        </div>
                        <div>
                            <label for="sizes" className="col-md-2"> Sizes: </label>
                            {
                                sizeArray.map((item, index) => (
                                    <div key={index}>
                                        <input value={item} type="checkbox" onChange={handleCheck}></input>
                                        <span> {item} </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <label htmlFor="price" className="col-md-2"> Price: </label>
                            <input type="number" id="price" className="my-4 col-md-7 py-2" />
                        </div>
                    </div>
            }])
        }

    };

    const removeDivFromSpecsDiv = () => {
        setSpecsDiv(specsDiv.filter(item => specsDiv.indexOf(item) !== specsDiv.length - 1));
    };

    // Generate string of checked items
    var checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

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
                                <form action="#">
                                    <div>
                                        <label htmlFor="productName" className="col-md-2"> Name: </label>
                                        <input type="text" id="productName" className="col-md-7 py-4" placeholder="Enter name of the product" />
                                    </div>
                                    <div>
                                        <label htmlFor="brandName" className="col-md-2"> Brand Name: </label>
                                        <select id="brandName" className="col-md-7 my-4 px-2 py-3" placeholder="Select brand name: ">
                                            <option selected disabled> Choose a brand </option>
                                            <option className="dropdown-item" value="Nike"> Nike </option>
                                            <option className="dropdown-item" value="Puma"> Puma </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="desc" className="col-md-2"> Description: </label>
                                        <input type="text" id="desc" className="col-md-7 py-4" placeholder="Enter description of the product" />
                                    </div>
                                    <div>
                                        <label htmlFor="maxqty" className="col-md-2"> Maximum Quantity: </label>
                                        <input type="number" id="maxqty" className="my-4 col-md-7 py-2" />
                                    </div>
                                    <div>
                                        <div className="row">
                                            <h4 className="text-left">Specification: </h4>
                                            <div>
                                                <button className="mx-2" onClick={addDivToSpecsDiv}> Add </button>
                                                <button onClick={removeDivFromSpecsDiv}> Remove </button>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                specsDiv.length == 0 ? addDivToSpecsDiv() : ""
                                            }
                                            {
                                                specsDiv.map((item, index) => (
                                                    item.spec
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="categoryTypeId" className="col-md-2"> Category Type: </label>
                                            <select id="categoryTypeId" className="col-md-7 my-4 px-2 py-3" placeholder="Select Category Type: " onChange={handleChangeCategoryType} >
                                                <option selected disabled> Choose a category </option>
                                                <option className="dropdown-item" value="Style"> Style </option>
                                                <option className="dropdown-item" value="Occasion"> Occasion </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="category" className="col-md-2">  {categoryType} </label>
                                        <select id="category" className="col-md-7 my-4 px-2 py-3" placeholder="Select Category: ">
                                            <option selected disabled> Choose  </option>
                                            <option className="dropdown-item" value="Slip-on"> Slip-on </option>
                                            <option className="dropdown-item" value="Sandal"> Sandal </option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </nav >
            </div >
        </Fragment >
    );
}
export default Seller;
