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
      // SALLY - Ask Nick about error checking here
      res.json({ id: result.insertId });    // send back the id of the new burger
  })
});

module.exports = router;

