var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', cardController.viewAll);

// router.post('/card', function(req, res, ){
//   res.render('card', {

module.exports = router;




