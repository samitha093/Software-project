const express = require('express');
const router = express.Router()
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const schedule = require('node-schedule')
const {createtickets} = require('./jobprofiles/cronjobs')
const cookieParser = require('cookie-parser')

require('dotenv').config();
const uri = process.env.MONGO_URI;
const next = process.env.NEXT_HOST;
const api = process.env.API_HOST;

const app = express();
const port = process.env.PORT || 8000;

//app.use(cors({credentials:true, origin: next}));
app.use(cors({credentials:true}));
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
  createtickets()
})

schedule.scheduleJob('0 * * * *',()=>{
  console.log("running every 1 hour 00:00")
})

schedule.scheduleJob('0 0 * * *',()=>{
  console.log("running every day mid night 00:00:00")
})


app.use("/img",express.static('uploads'));

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