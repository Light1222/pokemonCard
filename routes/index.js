var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController');


/* GET home page. */
router.get('/', cardController.viewAll);

router.get('/', cardController.renderEditForm);

router.get('/', cardController.updatePokemonCard);

router.get('/', cardController.deletePokemonCard);

router.get('/', cardController.renderPokemonAddForm);

router.get('/', cardController.addPokemonCard);

module.exports = router;




