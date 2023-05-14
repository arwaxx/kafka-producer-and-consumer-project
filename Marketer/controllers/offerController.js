const asyncHandler = require("express-async-handler");
const produce = require("../producers/marketerProducer");
const Offer = require("../models/offerModel");

const createOffer = asyncHandler(async (req, res) => {
  const offerBody = req.body.offer;
  const amountBody = req.body.amount;
  if (!offerBody || !amountBody) {
    res.status(400);
    throw new Error("Please add an offer and an amount to create an offer");
  }
  const offer = new Offer(offerBody, amountBody);
  produce(offer, false);
  res.status(200).json(offer);
});

const deleteOffer = asyncHandler(async (req, res) => {
  const offerBody = req.body.offer;
  const amountBody = req.body.amount;
  if (!offerBody || !amountBody) {
    res.status(400);
    throw new Error("Please add an offer and an amount to create an offer");
  }
  const offer = new Offer(offerBody, amountBody);
  produce(offer, true);
  res.status(200).json(offer);
});

module.exports = {
  createOffer,
  deleteOffer,
};
/*two functions are defined using asyncHandler. These functions are createOffer and deleteOffer.
 Both functions take in request and response objects and are used to create or delete an offer, respectively.
  They both first validate that the offer and amount properties are included in the request body. 
  They then create an Offer object with the offer and amount properties and call the produce function with 
  the Offer object and a deleteFlag parameter that is set to true or false, depending on whether the function is being used to create or delete an offer.
 Finally, the function returns the Offer object in the response with a 200 status code.*/