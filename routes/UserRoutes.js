const express = require('express');

const { loginController, registerController } = require('../controllers/UserController');

// router object
const router = express.Router();

/**
 * routers start
 */
//LOGIN USER || POST
router.post('/login', loginController);

//REGISTER USER || POST
router.post('/register', registerController);


module.exports = router;
