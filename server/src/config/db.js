const mongoose = require("mongoose");

const DBConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Database conected at ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DBConnection;
