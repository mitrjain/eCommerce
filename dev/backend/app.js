const express =  require('express')

const app = express()
const mongoose = require('mongoose');
require('dotenv/config')
mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.DB_PROTOCOL}//${process.env.DB_USERNAME}:${process.env.DB_PASSSOWRD}@${process.env.DB_HOST}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`)
.then(()=>{
    console.log("Connected to MongoDB Cloud")
})
.catch(error => console.log(error));

app.use(express.json())

const productsRouter = require("./routes/products")
const brandsRouter = require("./routes/brands")
app.use("/products",productsRouter)
app.use("/brands", brandsRouter)

app.get('/', (req,res) => {
    res.send("Home of Gladiators API");
});

app.listen(3000);
