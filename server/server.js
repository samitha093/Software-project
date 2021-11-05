const express = require('express');
const router = express.Router()
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const testrout = require('./routes/test');

app.use('/ab',testrout);

const sellerrout = require('./routes/seller');
app.use('/seller',sellerrout);

const userrout = require('./routes/user');
app.use('/user',userrout);

const managerroute = require('./routes/manager');
app.use('/manager',managerroute);

app.listen(port, ()=>{
    console.log(`server is on port: ${port}`);
});