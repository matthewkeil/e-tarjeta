require('dotenv').config();

const morgan = require('morgan');
const api = require('./api');

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4000;

api.use(morgan('dev'));

api.listen(PORT, () => {
    console.log(`api listening on http://${HOST}:${PORT}`)
});