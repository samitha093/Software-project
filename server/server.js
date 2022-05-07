const express = require('express');
const router = express.Router()
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
		openapi: "3.0.0",
		info: {
			title: "TickBid API",
			version: "1.0.0",
			description: "TickBId API Document",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const sellerrout = require('./routes/seller');
app.use('/seller',sellerrout);

const userrout = require('./routes/user');
app.use('/user',userrout);

const managerroute = require('./routes/manager');
app.use('/manager',managerroute);

const buyerroute = require('./routes/buyer');
app.use('/buyer',buyerroute);

const allroute = require('./routes/all');
app.use('/all',allroute);

const publicroute = require('./routes/public');
app.use('/public',publicroute);

app.listen(port, async ()=>{
  console.log('------------------------------ Staring Server ---------------------------------')
  console.log(`Lisning With port No : ${port}`);
  try {
    await mongoose.connect('mongodb://root:password@mongo:27017/tickbid', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
    });
    console.log("Connected to mongo db Sever");
  } catch (error) {
    console.error("Error connecting to mongodb", error);
  }
  console.log('------------------------------ Srver is Established ---------------------------')
});