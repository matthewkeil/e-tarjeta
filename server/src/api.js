const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')
const express = require('express');
const bodyParser = require('body-parser');
const api = express();
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const jwt = require('jsonwebtoken');


// const passport = require('./passport');
const db = require('./db');
const authRouter = require('./routes/auth.router');
const appointmentRouter = require('./routes/appointments.router');
const clientsRouter = require('./routes/clients.router');
const providersRouter = require('./routes/providers.router');

const PROD = process.env.NODE_ENV === 'production';
const SESSION_SECRET = process.env.SESSION_SECRET || 'Terrible_Session_Secret';
const JWT_SECRET = process.env.JWT_SECRET || "very_bad_secret";

api.use(helmet());

api.options('*', cors());
api.use(cors({
    origin: PROD ? '*' : /localhost/,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowHeaders: [
      "Authorization",
      "Accept",
      "Content-Type",
      "DNT",
      "Viewport-Width",
      "Width"
    ]
}));

api.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// api.use(passport.initialize());
// api.use(passport.session());

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

if (PROD) {
    api.use(compression());    
}


api.use(async (req, res, next) => {
  if (req.headers.authorization) {
    const token = Array.isArray(req.headers.authorization)
      ? req.headers.authorization[0].split(" ")[1]
      : req.headers.authorization.split(" ")[1];

    const id = await jwt.verify(token, JWT_SECRET);

    let user;

    user = await Clients.findByID(id);

    if (!user) { 
      user = await Providers.findById(id);
    }

    req.user = user;
  }

  next();
});

api.use('/clients', clientsRouter);
api.use('/', appointmentRouter);
api.use('/providers', providersRouter);

api.use((err, req, res, next) => {
  console.error(`>>>> error handler\n\n${err}\n\n>>>> error handler`);
  return res.json({error: err.message})
})

module.exports = api;