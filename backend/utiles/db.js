const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = dbConnect;
