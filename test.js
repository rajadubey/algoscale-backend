
// const mongoose = require("mongoose");

// //connect to db
// mongoose
//   .connect("mongodb://localhost/alogoscale")
//   .then(() => console.log("Connected to Database"))
//   .catch((err)=>console.log("Error in MongoDB Connection"+ err));

// //creating messageSchema
// const messageSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     message: String,
//     time: Number
// });

// const Message = mongoose.model('Message', messageSchema); // model


  


  

//     let date = 1604188800000; //date

//     for(let d=1;d<=10;++d, date+=172800000) // for 15 days, increasing by 2 day
//     {
//         for(let i=1, j=100;i<=Math.floor((Math.random() * 5) + 1);j-=10,++i){
//             new Message({
//                 name: `tester ${i}${j}`,
//                 email: `tester${i}${j}@gmail.com`,
//                 message: `This is test message from tester${i}${j}`,
//                 time: date
//             }).save().then(()=>console.log('added'));
//             }
//     }
