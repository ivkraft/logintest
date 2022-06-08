var cors=require('cors');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = [
    cors({origin:true,credentials: true}),
    bodyParser.json(),
    cookieParser()

]