import React from 'react';
import Select from 'react-select';
import axios from "axios";
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
            categories: {},
            categoriesDiv: []
        }
    }

    setSpecsDiv(specsDivParam) {
        this.setState({
            specsDiv: specsDivParam
        })
    }

    setCategoriesDiv(categoriesDivParam) {
        this.setState({
            categoriesDiv: categoriesDivParam
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
            selectedCategoryType: input.label
        })
        if (!this.state.categories.hasOwnProperty(input.label)) {
            var categories = [];
            axios.get('http://localhost:3001/categoryTypes/' + input.value)
                .then((res) => {
                    if (res.data.length !== 0) {
                        for (let i = 0; i < res.data.length; i++) {
                            var category = { label: res.data[i].name, value: res.data[i].categoryId }
                            categories.push(category);
                        }
                        this.state.categories[input.label] = categories;
                    }
                })
                .catch((err) => {
                    console.error(err);
                })
        }
    }

    setCategories = (categoriesParam) => {
        this.setState({
            categories: categoriesParam
        })
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
                var categoryTypes = [];
                for (var i = 0; i < res.data.length; i++) {
                    var categoryType = { label: res.data[i].name, value: res.data[i].categoryTypeId }
                    categoryTypes.push(categoryType);
                }
                this.setCategoryTypes(categoryTypes);
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

    addDivToCategoriesDiv = () => {
        if (this.state.categoriesDiv.length == 0) {
            this.setCategoriesDiv([{
                category:
                    <div>
                        <span className="form-inline">
                            <label htmlFor="categoryTypeId" className="col-md-2"> Category Type: </label>
                            <Select id="categoryTypeId" options={this.state.categoryTypes} className="col-md-7 px-3 py-2" onChange={this.setSelectedCategoryTypes} />
                        </span>
                        <span className="form-inline">
                            <label htmlFor="category" className="col-md-2"> {this.state.selectedCategoryType} </label>
                            <Select id="category" options={this.state.categories[this.state.selectedCategoryType]} className="col-md-7 px-3 py-2 my-4" />
                        </span>
                    </div>
            }])
        } else {
            this.setCategoriesDiv(this.state.categoriesDiv.concat([{
                category:
                    <div>
                        <span className="form-inline">
                            <label htmlFor="categoryTypeId" className="col-md-2"> Category Type: </label>
                            <Select id="categoryTypeId" options={this.state.categoryTypes || []} className="col-md-7 px-3 py-2" onChange={this.setSelectedCategoryType} />
                        </span>
                        <span className="form-inline">
                            <label htmlFor="category" className="col-md-2"> {this.state.selectedCategoryType} </label>
                            <Select id="category" options={this.state.categories[this.selectedCategoryType]} className="col-md-7 px-3 py-2 my-4" />
                        </span>
                    </div>

            }]))
        }
    }

    removeDivFromCategoriesDiv = () => {
        const categoriesDivParam = this.state.categoriesDiv.filter(item => this.state.categoriesDiv.indexOf(item) !== this.state.categoriesDiv.length - 1);
        this.setCategoriesDiv(categoriesDivParam);
    }

    removeDivFromSpecsDiv = () => {
        const specsDivParam = this.state.specsDiv.filter(item => this.state.specsDiv.indexOf(item) !== this.state.specsDiv.length - 1);
        this.setSpecsDiv(specsDivParam);
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
                                        <label htmlFor="maxqty" className="col-md-2"> Maximum Quantity Limit: </label>
                                        <input type="number" id="maxqty" className="col-md-7 px-3 py-2 my-4" />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="qty" className="col-md-2"> Quantity to sell: </label>
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
                                    <div>
                                        <div className="row">
                                            <h4 className="text-left">Category Types and Categories: </h4>
                                            <div>
                                                <button className="mx-2" onClick={this.addDivToCategoriesDiv}> Add </button>
                                                <button onClick={this.removeDivFromCategoriesDiv}> Remove </button>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                this.state.categoriesDiv.map((item, index) => {
                                                    return (
                                                        <div>
                                                            {item.category}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
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

