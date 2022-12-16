var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController');


/* GET home page. */
router.get('/', cardController.viewAll);

router.get('/', cardController.renderEditForm);

router.get('/', cardController.updateCard);

router.get('/', cardController.deleteCard);

router.get('/', cardController.renderAddForm);

router.get('/', cardController.addCard);

module.exports = router;




