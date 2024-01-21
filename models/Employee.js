const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

employeeSchema.plugin(AutoIncrement, { inc_field: "employeeId" });
module.exports = mongoose.model("Employee", employeeSchema);
