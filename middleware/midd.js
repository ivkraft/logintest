var cors=require('cors');
var bodyParser = require('body-parser');
module.exports = [
    cors({origin:true,credentials: true}),
    bodyParser.json()

]