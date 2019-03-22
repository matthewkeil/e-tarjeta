const PROD = process.env.NODE_ENV === 'production'
const PROTOCOL = PROD ? "https" : "http";
const HOST = process.env.HOST || "api-etarjeta.herokuapp.com";
const PORT = process.env.PORT ? `:${process.env.PORT}` : "";
const URL = `${PROTOCOL}://${HOST}${PORT}`;

export default ({route, method, data}) => ({
  url: URL + route,
  method,
  data,
  headers: {
    "Access-Control-Allow-Origin": URL
  }
});
