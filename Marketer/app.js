const express = require("express");
const { errorHandler } = require("./middlwares/errorMiddlware");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/offers", require("./routes/offersRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Marketer running on http://localhost:${PORT}`);
});


/*the express application is created and middleware is added to parse incoming JSON data and to handle errors. 
The offersRoutes.js file is then added as a route to the application,
 and the application is started on a specified port.*/