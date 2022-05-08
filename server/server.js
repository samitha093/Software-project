const express = require('express');
const router = express.Router()
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();
const uri = process.env.MONGO_URI;

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

const allroute = require('./routes/all');
app.use('/a',allroute);

const sellerrout = require('./routes/seller');
app.use('/s',sellerrout);

const managerroute = require('./routes/manager');
app.use('/m',managerroute);

const buyerroute = require('./routes/buyer');
app.use('/b',buyerroute);

const guestrout = require('./routes/guest');
app.use('/g',guestrout);

const eventroute = require('./routes/events');
app.use('/e',eventroute);

const ticketroute = require('./routes/tickets');
app.use('/t',ticketroute);

app.listen(port, async ()=>{
  console.log('------------------------------ Staring Server ---------------------------------')
  console.log(`Lisning With port No : ${port}`);
  console.log("DB Concting With : "+uri);
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
    });
    console.log("Connected to mongodb Sever");
  } catch (error) {
    console.error("Error connecting to mongodb", error);
  }
  console.log('------------------------------ Srver is Established ---------------------------')
});