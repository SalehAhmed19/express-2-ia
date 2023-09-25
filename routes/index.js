var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const count = 4 * 4;
  res.render("index", { title: "Express", count: count });
});

module.exports = router;
