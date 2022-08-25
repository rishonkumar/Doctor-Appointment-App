const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");

// if endpoint is api/user go and check userRoute

app.use("/api/user", userRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api/doctor", doctorRoute);
const port = process.env.PORT || 5000;

// console.log(process.env.MONGO_URL);

app.listen(port, () => console.log(`Listening on port ${port}`));
