let express = require("express");
let router = express.Router();

// import the burger model (which contains the associated orm methods)
let burger = require("../models/burger.js");

// =================== ROUTES
router.get("/", (req, res) => {
  burger.all((data) => {
    // create an object containing the burgers received from the database (used by handlebars)
    let burgerObj = {
      burgers: data
    };
    res.render("index", burgerObj);   // render the index page
  })
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  // update database with new status of 'eaten'
  burger.update(
    req.body,
    // Can I just pass the req.body object here instead of
    // creating a new object with eaten: req.body.eaten?  What 
    // if there was more than one thing being changed? Wouldn't I 
    // want to pass a larger object through?
    // SALLY  -- apparently, yes, I can, but I'll leave this here in
    //           case I run into issues later
    // This is received by burger.update as 'columnVals'
    // {
    //   eaten: req.body.eaten
    // },
    condition,
    (result) => {         // This is the callback function
      if(result.changedRows === 0) {
        // if nothing changed, ID must have been bad
        return res.status(404).end();
      }
      res.status(200).end();    // update happened successfully
  })
});


router.post("/api/burgers", (req, res) => {
  burger.create(
    Object.keys(req.body),
    Object.values(req.body),
    (result) => {         // This is the callback function
      // SALLY -- CHECK FOR ERROR??
      res.json({ id: result.insertId });    // send back the id of the new burger
  })
});


//  SALLY ADD OTHER ROUTES FOR REMAINING ORM FUNCTIONS

module.exports = router;

