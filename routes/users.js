var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res,) {
  res.json('respond with a resource');
});

router.get("/profile",function(req, res){
   res.json ({message:"this is where your pictures goes"})
})

router.post("/signup", function(req, res){
  res.json({ message: "please enter username and password" });
})


module.exports = router;
