const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { readdirSync } = require("fs");
const app = express();

// CORS
const options = {
  origin: "http://localhost:3001",
  useSuccessStatus: 200,
};

// Middlewares
app.use(express.json());
app.use(cors(options));

//Traditional Routing
// const userRoutes = require("./routes/user");
// app.use("/", userRoutes);

//Dynamic Routing
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//Database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully..."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is Listening to port ${PORT}...`);
});
