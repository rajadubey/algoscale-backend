const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
app.use(express.json());
app.use(cors());
const PORT = 5000;

//connect to db
mongoose
  .connect("mongodb://localhost/algoscale")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log("Error in MongoDB Connection" + err));

//creating messageSchema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  time: Number,
});

// model created
const Message = mongoose.model("Message", messageSchema);

// a get request for testing
app.get("/", (request, response) => {
  response.send("Welcome to Algoscale");
});

app.post("/submitForm", (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const message = request.body.message;
  const time = Date.now();
  console.log(name+ ' is added - 1');  
  const newMessage = new Message({ name, email, message, time });
  newMessage.save().then(() => {
      console.log(name+ ' is added - 2');  
    response.sendStatus(200).json({message: "Success"})
  }).catch((err)=>sendStatus(400).json({ error }));
  console.log(name+ ' is added - 3');  
});

//returns all the messages count for every day between the given range of dates
app.post("/forms", (request, response) => {
  const startDate = Number(request.body.startDate);
  const endDate = Number(request.body.endDate);
  console.log(startDate, endDate);
  const oneDay = 86400000;
  Message.find()
    .then((data) => {
      const requiredData = [];
      for (let date = startDate; date <= endDate; date += oneDay) {
        requiredData.push({
          date: date,
          size: data.filter((record) => record.time === date).length + 1,
        });
      }
      response.send(requiredData);
    })
    .catch((err) => response.sendStatus(404).json({ err }));
});

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));