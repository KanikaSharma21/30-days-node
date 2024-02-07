const express = require("express");

const app = express();

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    /*
      => if name parameter is provided, then Hello {name}
      => else Hello Guest
    */
    const fetchName = req.query.name;
    if(fetchName){
        return res.send(`Hello ${fetchName}`);
    }
    return res.send(`Hello Guest`);
  }

  
app.get("/greet", greetHandler);

app.listen(4000,()=>{
    console.log("Port is listening on 4000")
})