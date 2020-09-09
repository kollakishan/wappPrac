//importing
import express from "express";
import mongoose from "mongoose";

// app config================================================
const app = express(); // this is application instance,this basically creating application and allow to write the apis
const port = process.env.PORT || 9000;

//middleware=================================================

//DB config===================================================
const connection_url = `ongodb+srv://Kishan:Gannasicalil1!@cluster0.q3wxm.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//???============================================================

//api routes=======================================================
app.get("/", (req, res) => res.status(200).send("hello World"));

//listener=======================================================
app.listen(port, () => console.log(`Listening on local hoast: ${port}`));
