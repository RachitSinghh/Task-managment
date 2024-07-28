const express = require('express')
const app = express();

const db = require("./config/db");


const PORT = process.env.PORT || 3000;

// init middleWare 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our hotel");
  });
  
  // Import the router file


  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });