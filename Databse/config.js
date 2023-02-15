const mongoose = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost:27017/demo", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connection Successfully Established"))
  .catch((err) => console.log(err));
