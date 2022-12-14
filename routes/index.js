var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/card', function(req, res, ){
//   res.render('card', {
//     name: req.body.name,
//     hp: req.body.hp,
//     type: req.body.type,
//     poke_img: req.body.poke_img,
//     mtype1: req.body.mtype1,
//     mtype2: req.body.mtype2,
//     mtype3: req.body.mtype3,
//     mname: req.body.mname,
//     d1: req.body.d1,
//     m2type1: req.body.m2type1,
//     m2type2: req.body.m2type2,
//     m2type3: req.body.m2type3,
//     m2name: req.body.m2name,
//     d2: req.body.d1,
//     wentype: req.body.wentype
//     bentype: req.body.bentype
//     rentype: req.body.rentype
//   });
// })

module.exports = router;




