const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = [
  cors({ origin: true, credentials: true }),
  bodyParser.json(),
  cookieParser(),
];
