
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/aprendiz");


require("dotenv").config();


// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose.connect(process.env.MONGO_URI)

.then(()=> console.log("conncted to MongoDB Atlas"))
.catch((error)=> console.error(error));

app.listen(port, () => console.log("server listening to",port));