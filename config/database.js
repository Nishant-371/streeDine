const mongooes = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongooes
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((error) => {
      console.log("Issue in db connection");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
