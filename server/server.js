
const express = require('express');
const router = express.Router()
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, ()=>{
    console.log(`server is on port: ${port}`);
});
