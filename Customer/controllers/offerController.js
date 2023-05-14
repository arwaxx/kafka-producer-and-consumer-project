const asyncHandler = require("express-async-handler");
const Offer = require("../models/offerModel");

const getOffers = asyncHandler(async (req, res) => {  //define an asynchronous function called getOffers using the asyncHandler utility. This function uses the find() method on the Offer model to retrieve all offers from the database and return them as a JSON response.
  console.log("======================================");
  console.log("GET OFFERS");
  console.log("======================================");
  const offers = await Offer.find({});
  res.status(200).json(offers);
});

const createOffer = asyncHandler(async (req, res) => {  //define an asynchronous function called createOffer using the asyncHandler utility. This function checks if the request body includes an offer and an amount. If not, it sends a 400 error and throws an error message. If the request body is valid, it creates a new offer in the database using the create() method on the Offer model with the provided offer and amount values and returns the new offer as a JSON response.
  if (!req.body.offer || !req.body.amount) {
    res.status(400);
    throw new Error("Please add an offer and an amount to create an offer");
  }

  const offer = await Offer.create({
    offer: req.body.offer,
    amount: req.body.amount,
  });

  res.status(200).json(offer);
});

const getOffer = asyncHandler(async (req, res) => {  //define an asynchronous function called getOffer using the asyncHandler utility. This function retrieves a specific offer from the database using the findById() method on the Offer model and the ID specified in the request parameters. If the offer doesn't exist, it sends a 400 error and throws an error message. If the offer exists, it returns the offer as a JSON response.
  const offer = await Offer.findById(req.params.id);
  if (!offer) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  res.status(200).json(offer);
});

const updateOffer = asyncHandler(async (req, res) => { //efine an asynchronous function called updateOffer using the asyncHandler utility. This function first retrieves a specific offer from the database using the findById() method on the Offer model and the ID specified in the request parameters. If the offer doesn't exist, it sends a 400 error and throws an error message. If the offer exists, it updates the offer in the database using the findByIdAndUpdate() method on the Offer model with the new offer and amount values provided in the request body, and returns the updated offer as a JSON response.
  const offer = await Offer.findById(req.params.id);
  if (!offer) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  const updatedOffer = await Offer.findByIdAndUpdate(
    req.params.id,
    {
      offer: req.body.offer,
      amount: req.body.amount,
    },
    { new: true }
  );

  res.status(200).json(updatedOffer);
});

const deleteOffer = asyncHandler(async (req, res) => {  //define an asynchronous function called deleteOffer using the asyncHandler utility. This function first retrieves a specific offer from the database using the findById() method on the Offer model and the ID specified in the request parameters. If the offer doesn't exist, it sends a 400 error and throws an error message. If the offer exists, it deletes the offer from the database using the deleteOne() method on the offer object, and returns a JSON response containing the deleted offer's ID.
  const offer = await Offer.findById(req.params.id);
  if (!offer) {
    res.status(400);
    throw new Error("There is no offer with id = " + req.params.id);
  }

  await offer.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getOffers,
  createOffer,
  updateOffer,
  deleteOffer,
  getOffer,
};



/*The offerController.js file defines the functions to handle the various REST API endpoints, including
 getting all offers, getting a specific offer by ID, creating a new offer, updating an existing offer, 
  and deleting an offer. These functions interact with the database using the offerModel.js schema and Mongoose.*/