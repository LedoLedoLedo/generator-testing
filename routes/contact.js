var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "you can contact us" });
});

router.get("/:about",(req, res) =>{
   res.json ({message:"about us we good"})
});

module.exports = router;
