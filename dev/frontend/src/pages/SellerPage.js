import axios from "axios";
import React, { Fragment, useState, useEffect } from 'react';
import Select from 'react-select';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/seller.css';
import { uploadFile } from 'react-s3';
import { Buffer } from "buffer";

Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;

function SellerPage() {
    const [selectedCategoryType, setSelectedCategoryType] = useState("");
    useEffect(() => {
        const getCategories = async () => {
            if (!categories.hasOwnProperty(selectedCategoryType)) {
                setShowCategories(false);
                var cat = [];
                var value;
                for (var i = 0; i < categoryTypes.length; i++) {
                    if (categoryTypes[i].label === selectedCategoryType) {
                        value = categoryTypes[i].value;
                    }
                }
                if (value) {
                    await axios.get('http://localhost:3001/categoryTypes/' + value)
                        .then((res) => {
                            if (res.data.length !== 0) {
                                for (let i = 0; i < res.data.length; i++) {
                                    var category = { label: res.data[i].name, value: res.data[i].categoryId }
                                    cat.push(category);
                                }
                                var categoriesTemp = categories;
                                categoriesTemp[selectedCategoryType] = cat;
                                setCategories(categoriesTemp);
                                setShowCategories(true);
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                }
            }
        }

        getCategories();
    }, [selectedCategoryType]);
    const [showCategories, setShowCategories] = useState(false);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('')
    const [savedCategoryNames, setSavedCategoryNames] = useState([]);
    const [savedCategories, setSavedCategories] = useState([]);
    const [showSavedCategories, setShowSavedCategories] = useState(false);
    const [categoryTypes, setCategoryTypes] = useState([]);
    const [specsDiv, setSpecsDiv] = useState([]);
    const [checked, setChecked] = useState([]);
    const [sizeArray] = useState(['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12']);
    const [genders, setGenders] = useState([]);
    const [categories, setCategories] = useState({});
    const [categoryDropdownVal, setCategoryDropdownVal] = useState({});
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [maxQtyLimit, setMaxQtyLimit] = useState(0);
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [selectedGender, setSelectedGender] = useState('');
    const [specsObjs, setSpecsObjs] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [smallTileLocation, setSmallTileLocation] = useState('');
    const [multipleFileImages, setMultipleFileImages] = useState([]);


    const fileInput = React.useRef();

    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
    const REGION = process.env.REACT_APP_REGION;
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;

    const config = {
        bucketName: S3_BUCKET,
        region: REGION,
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
    }

    useEffect(() => {
        const handleSpecBlur = () => {
            if (color !== '' && price !== 0 && quantity !== 0 && checked.length !== 0) {
                if (specsObjs.length === 0) {
                    let specObj = {
                        color: color,
                        sizes: checked,
                        qty: quantity,
                        smallImgTile: smallTileLocation,
                        images: multipleFileImages,
                        price: price
                    };
                    setSpecsObjs([...specsObjs, specObj]);
                } else {
                    for (let i = 0; i < specsObjs.length; i++) {
                        let secondCondition = specsObjs[i].qty === quantity && specsObjs[i].price === price;
                        for (let j = 0; j < specsObjs[i]?.checked?.length; j++) {
                            if (specsObjs[i].checked !== checked[i]) {
                                secondCondition = false;
                            }
                        }
                        if (specsObjs[i].color === color) {
                            let specsCopy = specsObjs;
                            specsCopy.splice(i, 1);
                            let specObj = {
                                color: color,
                                sizes: checked,
                                qty: quantity,
                                price: price,
                                smallImgTile: smallTileLocation,
                                images: multipleFileImages
                            };
                            specsCopy.push(specObj);
                            setSpecsObjs(specsCopy);
                        } else if (secondCondition) {
                            let specsCopy = specsObjs;
                            specsCopy.splice(i, 1);
                            let specObj = {
                                color: color,
                                sizes: checked,
                                qty: quantity,
                                price: price,
                                smallImgTile: smallTileLocation,
                                images: multipleFileImages
                            };
                            specsCopy.push(specObj);
                            setSpecsObjs(specsCopy);
                        } else {
                            let specObj = {
                                color: color,
                                sizes: checked,
                                qty: quantity,
                                price: price,
                                smallImgTile: smallTileLocation,
                                images: multipleFileImages
                            };
                            setSpecsObjs([...specsObjs, specObj]);
                        }
                    }
                }
            }
        }
        handleSpecBlur();
    }, [price, quantity, color, checked, multipleFileImages])

    useEffect(() => {
        const getBrands = async () => {
            await axios.get('http://localhost:3001/brands')
                .then((response) => {
                    let brands = [];
                    for (let i = 0; i < response.data.length; i++) {
                        var brand = { label: response.data[i].name, value: response.data[i].brandId }
                        brands.push(brand);
                    }
                    setBrands(brands);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        const getCategoryTypes = async () => {
            await axios.get('http://localhost:3001/categoryTypes')
                .then((res) => {
                    var categoryTypes = [];
                    for (var i = 0; i < res.data.length; i++) {
                        var categoryType = { label: res.data[i].name, value: res.data[i].categoryTypeId }
                        categoryTypes.push(categoryType);
                    }
                    setCategoryTypes(categoryTypes);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        const getGenders = async () => {
            await axios.get('http://localhost:3001/genders')
                .then((res) => {
                    var gen = [];
                    for (var i = 0; i < res.data.length; i++) {
                        var gender = { label: res.data[i].name, value: res.data[i].genderId }
                        gen.push(gender);
                    }
                    setGenders(gen);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getBrands();
        getCategoryTypes();
        getGenders();
    }, []);

    const handleCheck = (event) => {
        if (event.target.checked) {
            setChecked(oldArray => [...oldArray, event.target.value].sort());
        } else {
            setChecked(current => current.filter(item => item !== event.target.value).sort());
        }
    }

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => {
                setSmallTileLocation(data.location);
            })
            .catch(err => console.error(err))
    }

    const handleMultipleFileUpload = async (file) => {
        uploadFile(file, config)
            .then(data => {
                setMultipleFileImages(oldMulFiles => [...oldMulFiles, data.location]);
            })
            .catch(err => console.error(err))
    }

    const handleMultipleFileInput = (e) => {
        e.preventDefault();
        let files = fileInput.current.files;
        for (let i = 0; i < files.length; i++) {
            handleMultipleFileUpload(files[i]);
        }
    }

    const addDivToSpecsDiv = () => {
        if (specsDiv.length === 0) {
            setSpecsDiv([{
                spec:
                    <div>
                        <span className="form-inline">
                            <label htmlFor="productcolor" className="col-md-2"> Color: </label>
                            <input type="text" id="productcolor" className="col-md-7 px-3 py-2 my-4" onBlur={updateColor} />
                        </span>
                        <span className="form-inline form-check-inline">
                            <label htmlFor="sizes" className="col-md-2"> Sizes: </label>
                            {
                                sizeArray.map((item, index) => (
                                    <div key={index} className="px-2">
                                        <input value={item} type="checkbox" onChange={handleCheck} ></input>
                                        <span> {item} </span>
                                    </div>
                                ))
                            }
                        </span >
                        <span className="form-inline py-4">
                            <label htmlFor="images" className="col-md-4"> Upload the images for this color: </label>
                            <input type="file" multiple ref={fileInput} />
                            <button onClick={handleMultipleFileInput}> Upload Image</button>
                        </span>
                        <span className="form-inline">
                            <label htmlFor="qty" className="col-md-2"> Quantity to sell: </label>
                            <input type="number" id="qty" className="col-md-7 px-3 py-2 my-4" onBlur={updateQuantity} />
                        </span>
                        <span className="form-inline">
                            <label htmlFor="price" className="col-md-2"> Price: </label>
                            <input type="number" id="price" className="col-md-7 px-3 py-2 my-4" onBlur={updatePrice} />
                        </span>
                    </div >
            }])
        } else {
            setChecked([]);
            setPrice(0);
            setQuantity(0);
            setColor('');
            setMultipleFileImages([]);
            setSpecsDiv(specsDiv.concat([{
                spec:
                    <div>
                        <span className="form-inline">
                            <label htmlFor="productcolor" className="col-md-2"> Color: </label>
                            <input type="text" id="productcolor" className="col-md-7 px-3 py-2 my-4" onBlur={updateColor} />
                        </span>
                        <span className="form-inline form-check-inline">
                            <label htmlFor="sizes" className="col-md-2 "> Sizes: </label>
                            {
                                sizeArray.map((item, index) => (
                                    <div key={index} className="px-2">
                                        <input value={item} type="checkbox" onChange={handleCheck} ></input>
                                        <span> {item} </span>
                                    </div>
                                ))
                            }
                        </span>
                        <span className="form-inline py-4">
                            <label htmlFor="images" className="col-md-4"> Upload the images for this color: </label>
                            <input type="file" multiple ref={fileInput} />
                            <button onClick={handleMultipleFileInput}> Upload Image</button>
                        </span>
                        <span className="form-inline">
                            <label htmlFor="qty" className="col-md-2"> Quantity to sell: </label>
                            <input type="number" id="qty" className="col-md-7 px-3 py-2 my-4" onBlur={updateQuantity} />
                        </span>
                        <span className="form-inline">
                            <label htmlFor="price" className="col-md-2"> Price: </label>
                            <input type="number" id="price" className="col-md-7 px-3 py-2 my-4" onBlur={updatePrice} />
                        </span>
                    </div>
            }]))
        }
    }

    const removeDivFromSpecsDiv = () => {
        const specsDivParam = specsDiv.filter(item => specsDiv.indexOf(item) !== specsDiv.length - 1);
        setSpecsDiv(specsDivParam);
    }

    const saveCategoriesValue = (input) => {
        setCategoryDropdownVal(input);
        if (!savedCategories.includes(input.value)) {
            setSavedCategories([...savedCategories, input.value]);
            setSavedCategoryNames([...savedCategoryNames, input.label]);
            setShowSavedCategories(true);
        }

    }

    const deleteSavedCategory = (label) => {
        var cat = savedCategoryNames;
        var ind = cat.indexOf(label);
        cat.splice(ind, 1);
        setSavedCategoryNames(cat);
        cat = savedCategories;
        var val;
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].label === label) {
                val = categories[i].value;
            }
        }
        ind = cat.indexOf(val);
        cat.splice(ind, 1);
        setSavedCategories(cat);
        if (savedCategoryNames.length === 0) {
            setShowSavedCategories(false);
        }
    }

    const setSelectCategoryType = (input) => {
        setSelectedCategoryType(input.label);
        setCategoryDropdownVal({});
    }

    const updateProductName = (event) => {
        setProductName(event.target.value);
    }

    const updateSelectedBrand = (input) => {
        setSelectedBrand(input.value);
    }

    const updateDescription = (event) => {
        setDescription(event.target.value);
    }

    const updateMaxQtyLimit = (event) => {
        setMaxQtyLimit(event.target.value);
    }

    const updateColor = (event) => {
        setColor(event.target.value);
    }

    const updateQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const updatePrice = (event) => {
        setPrice(event.target.value);
    }

    const updateGender = (input) => {
        setSelectedGender(input.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/products', {
            data: {
                name: productName,
                brandId: selectedBrand,
                desc: description,
                sellerId: 1,
                maxQtyLimit: maxQtyLimit,
                productDetails: specsObjs,
                gender: selectedGender,
                categories: savedCategories
            }
        })
            .then((res) => {
                if (res.status === 201) {
                    alert("Your product has been uploaded!");
                    console.log(res);
                    window.location.reload(false);
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <Fragment>
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
                                        <input type="text" id="productName" className="col-md-7 px-3 py-2 my-4" placeholder="Enter name of the product" onChange={updateProductName} />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="brandName" className="col-md-2"> Brand Name: </label>
                                        <Select id="brandName" className="col-md-7 px-3 py-2" options={brands} placeholder="Select brand name: " onChange={updateSelectedBrand} />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="desc" className="col-md-2"> Description: </label>
                                        <input type="text" id="desc" className="col-md-7 px-3 py-2 my-4" placeholder="Enter description of the product" onChange={updateDescription} />
                                    </span>
                                    <span className="form-inline">
                                        <label htmlFor="maxqty" className="col-md-2"> Maximum Quantity Limit: </label>
                                        <input type="number" id="maxqty" className="col-md-7 px-3 py-2 my-4" onChange={updateMaxQtyLimit} />
                                    </span>
                                    <span className="form-inline py-4">
                                        <label htmlFor="smallImgTile" className="col-md-4"> Upload the small image tile to be displayed: </label>
                                        <input type="file" onChange={handleFileInput} />
                                        <button onClick={() => handleUpload(selectedFile)}> Upload Image</button>
                                    </span>
                                    <div>
                                        <div className="row">
                                            <h4 className="text-left">Specification: </h4>
                                            <div>
                                                <button className="mx-2" onClick={addDivToSpecsDiv} > Add </button>
                                                <button onClick={removeDivFromSpecsDiv}> Remove </button>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                specsDiv.length === 0 ? addDivToSpecsDiv() : ""
                                            }
                                            {
                                                specsDiv.map((item, index) => {
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
                                        <label htmlFor="gender" className="col-md-2"> Gender: </label>
                                        <Select id="gender" className="col-md-7 px-3 py-2" options={genders} placeholder="Select gender: " onChange={updateGender} />
                                    </span>
                                    <div>
                                        <div>
                                            <span className="form-inline my-4">
                                                <label htmlFor="categoryTypeId" className="col-md-2"> Category Type: </label>
                                                <Select id="categoryTypeId" className="col-md-7" options={categoryTypes} onChange={setSelectCategoryType} />
                                            </span>
                                            {
                                                showCategories && <div className="form-inline">
                                                    <label htmlFor="category" className="col-md-2"> Select Category: </label>
                                                    <Select id="category" className="col-md-7 py-2 my-2" onChange={saveCategoriesValue} options={categories[selectedCategoryType]} value={categoryDropdownVal} />
                                                </div>
                                            }
                                            {
                                                showSavedCategories && savedCategoryNames.map((item, index) => {
                                                    return (
                                                        <span className="container">
                                                            <span className="tag">
                                                                {item}
                                                                <button onClick={() => deleteSavedCategory(item)} className="btn-text-only"> x </button>
                                                            </span>
                                                        </span>
                                                    )
                                                })
                                            }
                                            <div className="text-center my-4">
                                                <button onClick={handleSubmit}>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </nav >
            </div>
            );
        </Fragment>
    );
}

export default SellerPage;