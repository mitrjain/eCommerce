const express =  require('express')

const app = express()
const mongoose = require('mongoose');
require('dotenv/config')


mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to Mongo DB Cloud');
});


app.get('/', (req,res) => {
    res.send("we are on home");
});

app.listen(3000);
