const express = require("express");
const mongoose = require("mongoose");
// server ekat aena data jason frmat eken enne , ewa server ekat atherum ganna ba, ewa js object ekak bawata pariwarthanaya kireema karanu lanbai
const bodyParser = require("body-parser");

const cors = require('cors')

const postRoutes = require('./routes/posts')
const app = express();

// import routes 

//app.middlewware
app.use(bodyParser.json())

app.use(cors())

//app.use(postRoutes)
app.use(postRoutes)

const PORT = 8000;
const DB_URL =
  "mongodb+srv://twg:twg123@mernapp.cxq0bbk.mongodb.net/mernCrud?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("db connected") ;
  })
  .catch((err) => {
    console.log("db connection error", err);
  });

app.listen(PORT, () => {
  console.log("server invoked");
});
