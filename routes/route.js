const signin = require('../controller/controller');


const router = require('express').Router();

router.post('/user/signin',signin);


module.exports = router;

