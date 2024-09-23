const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');
const padalwa = require('../controller/padalwaController');
const patatlo = require('../controller/patatloController');
const paapat = require('../controller/paapatController');
const palima = require('../controller/palimaController');

router.get('/', hp.nom);
router.get('/2nd', padalwa.second);
router.get('/3rd', patatlo.third);
router.get('/4rth', paapat.fourth);
router.get('/5th', palima.fifth);
module.exports = router;