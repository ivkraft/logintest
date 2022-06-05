const mongoose = require("mongoose");

//const  mongoAtlasUri =
//        "mongodb+srv://testlogin:F3%21EH7AuDUpWP%406@cluster0.wnctp.mongodb.net/?retryWrites=true&w=majority";

const { MONGO_URI } = process.env;

exports.connect = function() {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};