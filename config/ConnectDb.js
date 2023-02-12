const mongoose = require('mongoose');
const colors = require('colors');
const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white)
  } catch (error) {
    console.error(`${error}`.bgRed)
  }
}

module.exports = ConnectDb;