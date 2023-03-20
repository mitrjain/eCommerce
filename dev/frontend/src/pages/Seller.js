import React from 'react';
import Select from 'react-select';
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default class Seller extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedCategoryType: "",
            brands: [],
            categoryTypes: [],
            specsDiv: [],
            checked: [],
            sizeArray: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
            categories: []
        }
    }

    setSpecsDiv(specsDivParam) {
        this.setState({
            specsDiv: specsDivParam
        })
    }

    setChecked(checkedParam) {
        this.setState({
            checked: checkedParam
        })
    }

    setBrands(brandsParam) {
        this.setState({
            brands: brandsParam
        })
    }

    setCategoryTypes(categoryTypesParam) {
        this.setState({
            categoryTypes: categoryTypesParam
        })
    }

    setSelectedCategoryType = (input) => {
        this.setState({
            selectedCategoryType: input.label,
            categories: []
        })
        let categoriesArray = [];
        for (let i = 0; i < input.categories.length; i++) {
            categoriesArray.push({ label: input.categories[i].name, value: input.categories[i].name })
        }
        this.setState({
            categories: categoriesArray
        })
        console.log(input);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/brands')
            .then((response) => {
                let brands = [];
                for (let i = 0; i < response.data.length; i++) {
                    var brand = { label: response.data[i].name, value: response.data[i].name }
                    brands.push(brand);
                }
                this.setBrands(brands);
            })
            .catch((err) => {
                console.log(err);
            })

        axios.get('http://localhost:3001/categoryTypes')
            .then((res) => {
                let categoryTypes = [];
                for (var i = 0; i < res.data.length; i++) {
                    var categoryType = { label: res.data[i].name, value: res.data[i].name, categories: res.data[i].categories }
                    categoryTypes.push(categoryType);
                }
                this.setCategoryTypes(categoryTypes);
                this.setSelectedCategoryType(categoryTypes[0]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleCheck(event) {
        var updatedList = [...this.checked];
        if (event.target.checked) {
            updatedList = [...this.checked, event.target.value];
        } else {
            updatedList.splice(this.checked.indexOf(event.target.value), 1);
        }
        this.setChecked(updatedList);
    }

    addDivToSpecsDiv = () => {
        if (this.state.specsDiv.length == 0) {
            this.setSpecsDiv([{
                spec:
                    <div>
                        <span className="form-inline">
                            <label htmlFor="productcolor" className="col-md-2"> Color: </label>
                            <input type="text" id="productcolor" className="col-md-7 px-3 py-2 my-4" />
                        </span>
                        <span className="form-inline form-check-inline">
                            <label htmlFor="sizes" className="col-md-2"> Sizes: </label>
                            {
                                this.state.sizeArray.map((item, index) => (
                                    <div key={index} className="px-2">
                                        <input value={item} type="checkbox" onChange={this.handleCheck}></input>
                                        < span > {item} </span>
                                    </div>
                                ))
                            }
                        </span >
                        <span className="form-inline">
                            <label htmlFor="price" className="col-md-2"> Price: </label>
                            <input type="number" id="price" className="col-md-7 px-3 py-2 my-4" />
                        </span>
                    </div >
            }])
        } else {
            this.setSpecsDiv(this.state.specsDiv.concat([{
                spec:
                    <div>
                        <span className="form-inline">
                            <label htmlFor="productcolor" className="col-md-2"> Color: </label>
                            <input type="text" id="productcolor" className="col-md-7 px-3 py-2 my-4" />
                        </span>
                        <span className="form-inline form-check-inline">
                            <label htmlFor="sizes" className="col-md-2 "> Sizes: </label>
                            {
                                this.state.sizeArray.map((item, index) => (
                                    <div key={index} className="px-2">
                                        <input value={item} type="checkbox" onChange={this.handleCheck}></input>
                                        <span> {item} </span>
                                    </div>
                                ))
                            }
                        </span>
                        <span className="form-inline">
                            <label htmlFor="price" className="col-md-2"> Price: </label>
                            <input type="number" id="price" className="col-md-7 px-3 py-2 my-4" />
                        </span>
                    </div>
            }]))
        }
    }

    removeDivFromSpecsDiv() {
        this.setSpecsDiv(this.specsDiv.filter(item => this.specsDiv.indexOf(item) !== this.specsDiv.length - 1));
    }

    render() {
        return (
            <div>
                <nav className="colorlib-nav" role="navigation">
                    <div className="top-menu">
                        <div className="container">
                            <Header />
                            <NavBar />
                            <h1 className="text-center m-5"> Want to sell another product? Add one here </h1>
                            <div>
                                <form action="#">
                                    <span className="form-inline">
                                        <label htmlFor="productName" className="col-md-2"> Name: </label>
                                        <input type="text" id="productName" className="col-md-7 px-3 py-2 my-4" placeholder="Enter name of the product" />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="brandName" className="col-md-2"> Brand Name: </label>
                                        <Select id="brandName" className="col-md-7 px-3 py-2" options={this.state.brands} value={this.state?.brands[0]} placeholder="Select brand name: " />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="desc" className="col-md-2"> Description: </label>
                                        <input type="text" id="desc" className="col-md-7 px-3 py-2 my-4" placeholder="Enter description of the product" />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="maxqty" className="col-md-2"> Maximum Quantity: </label>
                                        <input type="number" id="maxqty" className="col-md-7 px-3 py-2 my-4" />
                                    </span>
                                    <div>
                                        <div className="row">
                                            <h4 className="text-left">Specification: </h4>
                                            <div>
                                                <button className="mx-2" onClick={this.addDivToSpecsDiv}> Add </button>
                                                <button onClick={this.removeDivFromSpecsDiv}> Remove </button>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                this.state.specsDiv.length == 0 ? this.addDivToSpecsDiv() : ""
                                            }
                                            {
                                                this.state.specsDiv.map((item, index) => {
                                                    return (
                                                        <div>
                                                            {item.spec}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <span className="form-inline">
                                        <label htmlFor="categoryTypeId" className="col-md-2"> Category Type: </label>
                                        <Select id="categoryTypeId" options={this.state.categoryTypes} className="col-md-7 px-3 py-2" value={this.state?.categoryTypes[0]} placeholder={this.state.categoryTypes.placeholder} onChange={this.setSelectedCategoryType} />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="category" className="col-md-2"> {this.state.selectedCategoryType} </label>
                                        <Select id="category" value={this.state?.categories[0]} options={this.state.categories} className="col-md-7 px-3 py-2 my-4" />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div >
                </nav >
            </div>
        );
    }
}

//     // Generate string of checked items
//     var checkedItems = checked.length
//         ? checked.reduce((total, item) => {
//             return total + ", " + item;
//         })
//         : "";

//     var isChecked = (item) =>
//         checked.includes(item) ? "checked-item" : "not-checked-item";

