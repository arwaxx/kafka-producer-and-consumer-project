const mongoose = require("mongoose"); //This line imports the Mongoose library, which provides a convenient way to interact with a MongoDB database from a Node.js application.

const connectDB = async () => {  //This line defines an asynchronous function called connectDB, which will be used to connect to the MongoDB database.
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { //This line uses the mongoose.connect() method to establish a connection to the MongoDB database. The MONGO_URI environment variable contains the URL of the database.
      dbName: process.env.DB_NAME,  //This line sets the name of the database to use within the conn object. The DB_NAME environment variable contains the name of the database.
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (errors) {
    console.log(errors);
    process.exit(1);
  }
};

module.exports = connectDB;
/*The db.js file is responsible for setting up the connection to the MongoDB database.*/ 