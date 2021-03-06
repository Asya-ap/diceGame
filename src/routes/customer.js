const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list); // lo que tenemos en la funcion del archivo
//customerController nos listara todo lo de esa funcion
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);

router.get('/update/:id', customerController.edit);
router.get('/update/:id', customerController.update;

module.exports = router;