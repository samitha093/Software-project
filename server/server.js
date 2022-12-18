const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const schedule = require('node-schedule');
const cookieParser = require('cookie-parser');

const {
  eventController,
  orderController,
  ticketController,
  bidController,
  analiticBuilder1H,
  analiticBuilder24H,
} = require('./jobprofiles/cronjobs');

require('dotenv').config();
const uri = process.env.MONGO_URI;
const next = process.env.NEXT_HOST;
const api = process.env.API_HOST;

const app = express();
const port = process.env.PORT || 8000;



//app.use(cors({credentials:true, origin: next}));
//app.use(cors({credentials:true}));
app.use(cors({origin: next}));
app.use(express.json());
app.use(cookieParser())

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
				url: api,
			},
		],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "authorization",
          scheme: "Bearer",
          in: "header",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
	},
	apis: ["./routes/*.js"],
};

schedule.scheduleJob('* * * * * *',()=>{
  //every second
  orderController() // create qr for sold ticket
})

schedule.scheduleJob('* * * * *',()=>{
  //every 1 min
  eventController() //publish event
  ticketController() // remove published ticket
  bidController()//validate bid with qr adding
})

schedule.scheduleJob('0 * * * *',()=>{
  //every 1 hr
  analiticBuilder1H()
})

schedule.scheduleJob('0 0 * * *',()=>{
  // schedule.scheduleJob('* * * * *',()=>{
  //every day
  analiticBuilder24H()
})


app.use("/img",express.static('uploads'));

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const allroute = require('./routes/all');
app.use('/a',allroute);

const devices = require('./routes/links');
app.use('/d',devices);

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