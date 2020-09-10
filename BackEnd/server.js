//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./DbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// app config================================================
const app = express(); // this is application instance,this basically creating application and allow to write the apis
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1069763",
  key: "ff690a5877cc57b38019",
  secret: "9fac029d7813b035af39",
  cluster: "us3",
  encrypted: true,
});

//middleware=================================================
app.use(express.json());

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

//DB config===================================================
const connection_url = `mongodb+srv://Kishan:<password>@cluster0.q3wxm.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//???============================================================
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

//api routes================================================================================================================================================
app.get("/", (req, res) => res.status(200).send("hello World")); //GET

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const DbMessage = req.body;

  Messages.create(DbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener=======================================================
app.listen(port, () => console.log(`Listening on local hoast: ${port}`));
