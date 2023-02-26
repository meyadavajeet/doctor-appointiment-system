const userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register callback
const registerController = async (req, res) => {
   try {
      //check if user is already registered
      const existingUser = await userModel.findOne({ email: req.body.email });
      if (existingUser) {
         return res.status(200).send({ message: "User already exists", success: false });
      }
      // if not registered create new account
      const password = req.body.password;
      const salt = await bcrypt.genSalt(8);
      const hashPassword = await bcrypt.hash(password, salt);
      req.body.password = hashPassword;
      const newUser = await userModel(req.body);
      await newUser.save();
      return res.status(200).json({ success: true, message: "Registration Success." });
   } catch (err) {
      res.status(500).json({ success: false, message: `Error in RegistrationController ${err.message}` });
   }



}

//login callback
const loginController = async (req, res) => {
   try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
         return res.status(200).send({ success: false, message: 'User not found' });
      }
      const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordMatch) {
         return res.status(200).send({ success: false, message: 'Invalid Email or Password.' });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
      return res.status(200).json({ success: true, message: "Login Success.", token: token });
   } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in LoginController ${error.message}` });
   }
}

//auth callback
const authController = async (req, res) => {
   try {
      const user = await userModel.findById({ _id: req.body.userId })
      user.password = undefined;
      if (!user) {
         return res.status(200).send({
            success: false,
            message: 'User not found'
         });
      } else {
         res.status(200).send({
            success: true,
            data: user
         })
      }
   } catch (err) {
      console.log(error);
      res.status(500).send({ message: 'Authorization error', success: false, error });
   }
}

module.exports = { loginController, registerController, authController };

