const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
mongoose.set('strictQuery', false);
mongoose
	.connect(
		`${process.env.DB_PROTOCOL}//${process.env.DB_USERNAME}:${process.env.DB_PASSSOWRD}@${process.env
			.DB_HOST}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`
	)
	.then(() => {
		console.log('Connected to MongoDB Cloud');
	})
	.catch((error) => console.log(error));

app.use(express.json());
//Final bug fix
const productsRouter = require('./routes/products');
const brandsRouter = require('./routes/brands');
const genderRouter = require('./routes/genders');
const categoryTypesRouter = require('./routes/categoryTypes');
const cartRouter = require('./routes/cart');
const authRouter = require("./routes/auth");

app.use(cors());

app.use('/products', productsRouter);
app.use('/brands', brandsRouter);
app.use('/genders', genderRouter);
app.use('/categoryTypes', categoryTypesRouter);
app.use('/cart', cartRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
	res.send('Home of Gladiators API');
});

app.listen(3001);
