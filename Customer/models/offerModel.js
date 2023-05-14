const mongoose = require("mongoose");  // Importing the Mongoose library which is used to define the schema and interact with the MongoDB database.

const offerSchema = mongoose.Schema(  // Defining a new schema for the offer object in MongoDB using the mongoose.Schema() method
  {
    offer: {   // Defining a field offer in the schema with the type of String.
      type: String,
      required: true,  // Marking the field offer as required, meaning that it must have a value when a new offer is created.
    },
    amount: {   //Defining a field amount in the schema with the type of String
      type: String,
      required: true,
    }
  },
  {
    timestamps: true, //Adding an option to the schema to enable automatic timestamps for creation and modification dates.
  }
);

module.exports = mongoose.model("Offer", offerSchema);

/* The offerModel.js file defines the schema for the offers, which is used to interact with the MongoDB database through Mongoose.*/ 