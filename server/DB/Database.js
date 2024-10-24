const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL).then((data) => {
    console.log(`Mongo Db Connected to ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
