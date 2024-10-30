const express = require("express");
const app = express();
const http = require("http");



app.use(express.urlencoded({ extended: true }));
app.use(cors());



// app.post('/checkroomid', async (req, res) => {
// }



server.listen(5000, () => {
    console.log("server is running");
  })