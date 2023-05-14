const Offer = require("../models/offerModel");

const deleteOffer = async (offerName, amountValue) => {
  const offer = await Offer.findOneAndDelete({ offer: offerName, amount: amountValue });
  console.log(offer);
};

const createOffer = async (offerName, amountValue) => {
  await Offer.create({ offer: offerName, amount: amountValue });
};

module.exports = {
  deleteOffer,
  createOffer,
};

/*That's correct! offerUtilities.js defines two utility functions createOffer and deleteOffer
 which can be used to create or delete offers in the database using the Offer model defined in offerModel.js.
 These functions are exported and can be used in other parts of the application.*/ 