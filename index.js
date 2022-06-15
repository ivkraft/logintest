const https = require("https");
const app = require("./app");
const fs = require("fs");

const certificate = process.env.certificate;
const privateKey = process.env.privateKey;

const server = https.createServer({
  key: fs.readFileSync(privateKey),
  cert: fs.readFileSync(certificate)
},app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});