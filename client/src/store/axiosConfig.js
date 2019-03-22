const PROD = process.env.NODE_ENV === 'production'
const PROTOCOL = PROD ? "https" : "http";
const HOST = PROD ? "api-etarjeta.herokuapp.com" : 'localhost';
const PORT = PROD ? "" : `:${process.env.PORT || 4000}`;
const URL = `${PROTOCOL}://${HOST}${PORT}`;

export default ({route, method, data}) => ({
  url: URL + route,
  method,
  data,
  headers: {
    "Access-Control-Allow-Origin": URL
  }
});
