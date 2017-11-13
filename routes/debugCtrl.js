var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/debug', function(req, res, next) {
  res.render('debug',{title:"debug"});
});

module.exports = router;
