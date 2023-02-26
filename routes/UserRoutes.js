const express = require('express');

const { loginController, registerController, authController, applyDoctorController } = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

// router object
const router = express.Router();

/**
 * routers start
 */
//LOGIN USER || POST
router.post('/login', loginController);

//REGISTER USER || POST
router.post('/register', registerController);


//AUTH || POST
router.post("/get-user-data", AuthMiddleware, authController);

//POST apply as a doctor
router.post('/apply-doctor', AuthMiddleware, applyDoctorController);

module.exports = router;
