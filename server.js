const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//==== ROUTES ====//
app.use("/api/region", require("./routes/region"));
app.use("/api/district", require("./routes/district"));
app.use("/api/users", require("./routes/user"));
app.use("/api/step", require("./routes/step"))

const port = process.env.PORT;
MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on the port ${port} \nDB connected`);
    });
  })
  .catch((err) => {
    console.log("No connection", err);
  });
